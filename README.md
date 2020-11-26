<div align="center">
<h1>React extension boilerplate</h1>
</div>

This project contains minimal env and structure for my own extensions.

### Build with
* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [React router](https://github.com/ReactTraining/react-router)
* [Redux](https://redux.js.org/)
* [Webextension polyfill](https://github.com/mozilla/webextension-polyfill)

### Browser Support



| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png" alt="Vivaldi" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Vivaldi | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png" alt="Yandex" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Yandex |
| --------- | --------- | --------- | --------- | --------- | --------- |
| Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions                                                                       |


### Hot to use

1. Install dependencies
```sh
yarn
```
2. Start developer mode
```sh
yarn start
```

### How to build

- Production build
```sh
yarn build:prod
```

- Developer build
```sh
yarn build:dev
```

### How to build zip archive for stores
```sh
yarn clean && yarn build:prod && yarn build:zip
```

## Credits
A big thanks to:
- [Web-Extension-Starter](https://github.com/ymdevs/Web-Extension-Starter) - For inspiration, previous version was based on Vue.js. And locate content scripts. 