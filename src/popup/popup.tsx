import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import BaseLoader from '../components/baseLoader';

const store = new Store();

store.ready().then(() => {
	ReactDOM.render(
		<Suspense fallback={<BaseLoader />}>
			<Router>
				<Provider store={store}>
					<App />
				</Provider>
			</Router>
		</Suspense>
		, document.getElementById('popup-root')
	);
});
