import { VALID_CUSTOMER_ID_LIST, INVALID_CUSTOMER_ID_LIST } from '../_actions';

export default function (state={}, action) {
	// console.log(action.type);
	switch(action.type) {
		case VALID_CUSTOMER_ID_LIST:
			return action.payload;
		case INVALID_CUSTOMER_ID_LIST:
			return { ...state, error: action.payload }
		default:
			return state;
	}
}
 