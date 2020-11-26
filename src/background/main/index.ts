import { CombinedState, Store } from 'redux';
import { IActionCommonInterface } from '../../store/interfaces';

class Background {
	private store: Store<CombinedState<any>, IActionCommonInterface>;

	constructor(store: Store<CombinedState<any>, IActionCommonInterface>) {
		this.store = store;

		this.init();
	}

	private init(): void {
		this.store.getState();
		/**
         * Here you can init some plugin module. Example add module Users and create this. this.user = new Users();
         * Or you can can init message listener browser.runtime.onMessage.addListener
         */
	}
}

export default Background;
