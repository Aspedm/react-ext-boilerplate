import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import App from './App';

const store = new Store();

store.ready().then(() => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>
		, document.getElementById('options-root')
	);
});
