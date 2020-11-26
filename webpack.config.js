const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtensionReloader = require('webpack-extension-reloader');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { version } = require('./package.json');


const locateContentScripts = require('./scripts/locateContentScripts');

const sourceRootPath = path.join(__dirname, 'src');
const contentScriptsPath = path.join(sourceRootPath, 'content_scripts');
const distRootPath = path.join(__dirname, 'dist');
const nodeEnv = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const webBrowser = process.env.WEB_BROWSER ? process.env.WEB_BROWSER : 'chrome';

const contentScripts = locateContentScripts(contentScriptsPath);

const getValueFromArgv = (valueName, argv, defaultValue) => {
    let argvValue = '';

    if (defaultValue) argvValue = process.env[defaultValue];

    argv.forEach(item => {
        if (item.indexOf(valueName) !== -1) {
            argvValue = item.split('=')[1]; // eslint-disable-line
        }
    });

    return argvValue;
};

const extensionReloader = nodeEnv === 'watch' ? new ExtensionReloader({
	port: 9128,
	reloadPage: true,
	entries: {
		background: 'background',
		extensionPage: ['popup', 'options'],
		contentScript: Object.keys(contentScripts),
	}
}) : () => { this.apply = () => { } };

const cleanWebpackPlugin = nodeEnv === 'production' ? new CleanWebpackPlugin() : () => { this.apply = () => { } };

module.exports = {
	watch: nodeEnv === 'watch',
	optimization: {
        minimizer: [new TerserPlugin()]
	},
	stats: {
		modules: false
	},
	entry: {
		background: path.join(sourceRootPath, 'background', 'background.ts'),
		options: path.join(sourceRootPath, 'options', 'options.tsx'),
		popup: path.join(sourceRootPath, 'popup', 'popup.tsx'),
		...contentScripts,
	},
	output: {
		path: distRootPath,
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|ts|tsx)?$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
				  'style-loader',
				  'css-loader',
				  'sass-loader',
				],
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader'
				],
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true,
							},
						},
					}
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new CheckerPlugin(),
		new Dotenv(),

		// Options page
		new HtmlWebpackPlugin({
			template: path.join(sourceRootPath, 'options', 'options.html'),
			inject: 'body',
			filename: 'options.html',
			chunks: ['options'],
		}),

		// Popup page
		new HtmlWebpackPlugin({
			template: path.join(sourceRootPath, 'popup', 'popup.html'),
			inject: 'body',
			filename: 'popup.html',
			title: 'Web Extension Starter - Popup Page',
			chunks: ['popup'],
		}),

		new CopyWebpackPlugin([
			{
				from: 'node_modules/webextension-polyfill/dist/browser-polyfill.js',
				to: path.join(distRootPath),
			},
			{
				from: path.join(sourceRootPath, 'assets'),
				to: path.join(distRootPath, 'assets'),
				test: /\.(jpg|jpeg|png|gif|svg)?$/,
			},
			{
				from: path.join(sourceRootPath, 'icons'),
				to: path.join(distRootPath, 'icons'),
				test: /\.(jpg|jpeg|png|gif|svg)?$/,
			},
			{
				from: path.join(sourceRootPath, '_locales'),
				to: '_locales' 
			},
			{
                from: path.join(sourceRootPath, 'manifest.json'),
                to: 'manifest.json',
                transform: (content) => {
                    const jsonContent = JSON.parse(content);
                    const browser = getValueFromArgv('--browser', process.argv, 'npm_package_config_browser');
                    const extName = getValueFromArgv('--name', process.argv);

                    // Set plugin version
                    jsonContent.version = version;

					// Set plugin name, common use case for debug
					if (extName) {
						jsonContent.name = extName;
					}

                    if (browser === 'firefox') {
                        jsonContent['applications'] = {};
                        jsonContent.applications['gecko'] = {};
                    }

                    return JSON.stringify(jsonContent, null, 2);
				},
			},
		]),
		new webpack.DefinePlugin({
			'NODE_ENV': JSON.stringify(nodeEnv),
			'WEB_BROWSER': JSON.stringify(webBrowser),
		}),
		extensionReloader,
		cleanWebpackPlugin
	],
}