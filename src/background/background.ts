import { wrapStore } from 'webext-redux';
import store from '../store/index';
import Background from './main';

wrapStore(store);
(window as any).plugin = new Background(store);
