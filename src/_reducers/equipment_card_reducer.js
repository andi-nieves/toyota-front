import { VALID_EQUIPMENT_CARD, INVALID_EQUIPMENT_CARD } from '../_actions';

export default function (state={}, action) {
	// console.log(action.type);
	switch(action.type) {
		case VALID_EQUIPMENT_CARD:
			return action.payload;
		case INVALID_EQUIPMENT_CARD:
			return { ...state, error: action.payload }
		default:
			return state;
	}
}
 