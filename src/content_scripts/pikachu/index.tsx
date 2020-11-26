import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import App from './App';
import { createCsContainer } from '../../helpers/cs';

createCsContainer('pikachu-ts-boilerplate');
const store = new Store();

store.ready().then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
		, document.getElementById('pikachu-ts-boilerplate'));
});
