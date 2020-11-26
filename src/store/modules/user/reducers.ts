import { IActionCommonInterface } from '../../interfaces';
import { GET_USER, GET_USER_FAILURE, GET_USER_SUCCESS } from './events';

export const user = (state = null, action: IActionCommonInterface) => {
	switch(action.type) {
		case GET_USER:
			return {
				loading: true,
			};
		case GET_USER_SUCCESS:
			return action.payload;
		case GET_USER_FAILURE:
			return null;
		default:
			return state;
	}
};
