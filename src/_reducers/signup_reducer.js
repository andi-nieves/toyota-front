import { VALID_SIGNUP, INVALID_SIGNUP } from '../_actions';

export default function(state={}, action) {
	switch(action.type) {
		case VALID_SIGNUP:
			return { ...state, valid: true };
		case INVALID_SIGNUP:
			return { ...state, error: action.payload };
		default:
			return state;
	}
}