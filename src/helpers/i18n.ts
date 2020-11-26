import isString from 'lodash/isString';
import { browser } from 'webextension-polyfill-ts';

/**
 * @param {string} key
 * @param {any} vars
 * @returns {string}
 */
const i18n = (key: string = '', vars: any = []) => {
	if (!isString(key) || !key) return '';

	return browser.i18n.getMessage(key, vars);
};

/**
 * @param {number} count
 * @param {string[]} letiatives
 * @returns {string}
 */
export const pluralize = (count: number, letiatives: string[]) => {
	const ends = +count % 10;
	const ends2 = +count % 100;

	if ((ends === 1) && (ends2 !== 11)) {
		return i18n(letiatives[0]);
	}

	if (((ends === 2) || (ends === 3) || (ends === 4)) &&
		(ends2 !== 12) && (ends2 !== 13) && (ends2 !== 14)) {
		return i18n(letiatives[1]);
	}

	return i18n(letiatives[2]);
};

export default i18n;
