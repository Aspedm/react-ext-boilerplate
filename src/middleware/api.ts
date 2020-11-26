import axios, { AxiosError, AxiosResponse } from 'axios';
import apiConfig from '../configs/api';
import { FAILURE, SUCCESS } from '../constants/api';
import { IActionCommonInterface } from '../store/interfaces';

const HTTPClient = axios.create(apiConfig);

/**
 * @param res
 * @param action
 * @param next
 * @returns {any}
 */
const handleResponse = (res: AxiosResponse<any>, action: IActionCommonInterface, next: (params: IActionCommonInterface) => void) => {
	next({
		type: `${action.type}_${SUCCESS}`,
		payload: {
			data: res.data,
		},
		meta: action.meta,
	});

	return res.data;
};

/**
 * @param err
 * @param action
 * @param next
 * @returns {any}
 */
const handleErrors = (err: AxiosError<any>, action: IActionCommonInterface, next: (params: IActionCommonInterface) => void) => {
	next({
		type: `${action.type}_${FAILURE}`,
		payload: err.response?.data,
		meta: action.meta,
	});
	return Promise.reject(err.response?.data);
};

const Api = () => (next: (params: IActionCommonInterface) => void) => (action: IActionCommonInterface) => {
	const result = next(action);

	if (!action.meta || !action.meta.async) {
		return result;
	}

	if (!action.config) {
		throw new Error('Config is required. Please set config. \n\n Documentaion: https://github.com/axios/axios#request-config');
	}

	return HTTPClient.request(action.config)
		.then((resp: AxiosResponse<any>) => handleResponse(resp, action, next))
		.catch((error: AxiosError<any>) => handleErrors(error, action, next));
};

export default Api;
