import { combineReducers } from 'redux';

// User
import { user } from './user/reducers';

export default combineReducers({
	user,
});
