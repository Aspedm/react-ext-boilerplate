import { AxiosRequestConfig } from 'axios';

export interface ICaptcha {
	site_key: string;
}

export interface ICaptchaErrorObject {
	captcha: ICaptcha;
	captcha_phrase_key: string;
	type: string;
}

export interface IErrors {
	error: string;
	error_description: string;
	captcha?: ICaptchaErrorObject;
}

export interface IActionCommonInterface {
	type: string;
	payload: {
		data?: object | object[];
		errors?: IErrors[];
		request?: object[];
		result?: boolean;
	};
	config?: AxiosRequestConfig;
	meta: {
		ignoreAuth?: boolean;
		async: boolean;
	};
}

export interface IJsonApiResp {
	data: any;
	result: boolean;
	request: object[];
}
