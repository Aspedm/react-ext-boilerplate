import isString from 'lodash/isString';

/**
 * Tip! Add unique id for your container. Best practice add prefix.
 * Example: pikachu-ts-boilerplate
 * @param {string} id
 * @returns {void}
 */
export const createCsContainer = (id: string): void => {
	if (!isString(id)) return;

	const el: HTMLDivElement = document.createElement('div');
	el.id = id;
	document.body.insertBefore(el, document.body.childNodes[0]);
};

/**
 * @param {string} id
 * @returns {void}
 */
export const removeCsContainer = (id: string): void => {
	if (!isString(id)) return;

	const el: HTMLElement | null = document.getElementById(id);
	if (!el) return;

	el.remove();
};

/**
 * @param {string} id
 * @param {string} selector
 * @returns {void}
 */
export const createCsContainerInCurrentPlace = (id: string, selector: string): void => {
	if (!isString(id)) return;
	if (!isString(selector)) return;

	const place: Element | null = document.querySelector(selector);
	if (!place) return;

	const el: HTMLDivElement = document.createElement('div');
	el.id = id;

	place.insertBefore(el, place.childNodes[0]);
};
