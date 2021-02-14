import { AxiosRequestConfig } from 'axios';

export interface IActionCommonInterface {
	type: string;
	payload: {
		data?: object | object[];
	};
	config?: AxiosRequestConfig;
	meta: {
		ignoreAuth?: boolean;
		async: boolean;
	};
}