import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import signupReducer from './signup_reducer';
import columnReducer from './column_reducer';
import ticketReducer from './ticket_reducer';
import serviceCallReducer from './service_call_reducer';
import itemsReducer from './item_reducer';
import customerIDSReducer from './customerids_reducer';
import equipmentcardReducer from './equipment_card_reducer';

const allReducers = combineReducers({
	form: formReducer,
	auth: authReducer,
	signup: signupReducer,
	columns: columnReducer,
	tickets: ticketReducer,
	serviceCall: serviceCallReducer,
	items: itemsReducer,
	customerids: customerIDSReducer,
	equipment_cards: equipmentcardReducer
});

export default allReducers;
