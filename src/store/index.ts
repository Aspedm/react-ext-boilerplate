import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Api from '../middleware/api';
import rootReducers from './modules';

const enhancers = [];
const middleware = [
	thunk,
	Api,
];

if (process.env.NODE_ENV !== 'production') {
	const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
	if (typeof devToolsExtension === 'function') enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers,
);

const store = createStore(
	rootReducers,
	composedEnhancers,
);

export default store;
