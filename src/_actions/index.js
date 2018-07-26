import axios from 'axios';
import {
	push
} from 'react-router-redux';
import config from '../config.js';

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';

export const VALID_TICKETS = 'valid_tickets';
export const INVALID_TICKETS = 'invalid_tickets';

export const VALID_SIGNUP = 'valid_signup';
export const INVALID_SIGNUP = 'invalid_signup';

export const VALID_SERVICE_CALL = 'valid data';
export const INVALID_SERVICE_CALL = 'invalid data';

export const VALID_ITEM_MASTER = 'valid_items';
export const INVALID_ITEM_MASTER = 'invalid_items';

export const VALID_CUSTOMER_ID_LIST = 'valid_customer_id_list';
export const INVALID_CUSTOMER_ID_LIST = 'invalid_customer_id_list';

export const VALID_EQUIPMENT_CARD = 'valid_equipment_card';
export const INVALID_EQUIPMENT_CARD = 'invalid_equipment_card';

export function signInAction({
	email,
	password
}, history) {
	return async (dispatch) => {
		if (email.toString().trim().length === 0) {
			dispatch({
				type: AUTHENTICATION_ERROR,
				payload: "Please enter Email Address!",
			});
			return;
		}
		try {
			const res = await axios.post(`${config.url}/api/login`, {
				email,
				password
			});
			dispatch({
				type: AUTHENTICATED
			});
			localStorage.setItem('user', res.data.access_token);
			history.push('/home');
		} catch (error) {
			localStorage.setItem('user', "ABCDEFGHIJKL");
			history.push('/home');

			dispatch({
				type: AUTHENTICATED,
				payload: 'Invalid email or password',
				hide: 'hey'
			});
		}
	};
}

export function signUpAction({
	firstName,
	lastName,
	email,
	password
}, history) {
	return async (dispatch) => {
		try {
			// const res = await axios.post(`${URL}/signup`, { email, password });
		} catch (error) {
			dispatch({
				type: INVALID_SIGNUP,
				payload: 'Invalid signup'
			})
		}
	}
}

// export function updateServiceCallStatus({id,status}}) {
// 	return async (dispatch) => {
// 		try {
// 			const res = await axios.post(`${config.url}/api/servicecalls/update`,{data: data});
// 			dispatch({
// 				type: 'valid_ticket',
// 				payload: res.data
// 			});
// 		} catch (error) {
	
// 		}
// 	}
// }

export function createServiceCallAction(data) {
	return async (dispatch) => {
		try {
			const res = await axios.post(`${config.url}/api/servicecalls`,{data: data});
			dispatch({
				type: 'valid_ticket',
				payload: res.data
			});
		} catch (error) {
	
		}
	}
}

export function signOutAction() {
	const token = localStorage.user;
	axios.post(`${config.url}/api/logout`, {
		token
	});
	localStorage.clear();
	push('/');
	return {
		type: UNAUTHENTICATED
	};
}

export function getTickets() {
	return async (dispatch) => {
		try {
			const res = await axios.get(`${config.url}/api/servicecalls`);
			dispatch({
				type: VALID_TICKETS,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: INVALID_SIGNUP,
				payload: 'Unable to get service requests'
			});
		}
	}
}

export function getItemMaster() {

	return async (dispatch) => {
		try {
			const res = await axios.post(`${config.url}/api/items/all`);
			dispatch({
				type: VALID_ITEM_MASTER,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: INVALID_ITEM_MASTER,
				payload: 'Invalid Items'
			});
		}
	}

}

export function getEquipmentCardBySAPCode(sap_code) {

	return async (dispatch) => {

		try {
			const res = await axios.post(`${config.url}/api/get_equipment_card_by_sap_costumer_code`, {
				"sap_code": sap_code
			});
			dispatch({
				type: VALID_EQUIPMENT_CARD,
				payload: res.data
			});
		} catch (error) {
			dispatch({
				type: INVALID_EQUIPMENT_CARD,
				payload: error
			})
		}
	}
}
export function getAllCostumerID() {
	
	return async (dispatch) => {
		try {
			const res = await axios.get(`${config.url}/api/customers/all`);
			dispatch({
				type: VALID_CUSTOMER_ID_LIST,
				payload: res.data
			});
		} catch (e) {
			dispatch({
				type: INVALID_CUSTOMER_ID_LIST,
				payload: "Invalid Costumer IDS"
			});
		}
	}
}