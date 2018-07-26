import { VALID_ITEM_MASTER, INVALID_ITEM_MASTER } from '../_actions';

export default function (state={}, action) {
	// console.log(action);
	switch(action.type) {
		case VALID_ITEM_MASTER:
			return action.payload;
		case INVALID_ITEM_MASTER:
			return { ...state, error: action.payload }
		default:
			return [{}];
	}
}
