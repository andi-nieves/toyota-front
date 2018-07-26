import { VALID_TICKETS, INVALID_TICKETS } from '../_actions';

export default function (state={}, action) {	
	switch(action.type) {
		case VALID_TICKETS:
			return action.payload;
		case INVALID_TICKETS:
			return { ...state, error: action.payload }
		default:
			return state;
	}
}

// ---------------- DUMMY DATA -----------------

// export default function () {
// 	return [
// 		{
// 			id: 123,
// 			client: 'Mr. Geek MSI',
// 			status: 1,
// 			created_at: '2018-02-26T09:30:43',
// 		},
// 		{
// 			id: 124,
// 			client: 'Client 12345',
// 			status: 1,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 125,
// 			client: 'AirPH Travel and Tours',
// 			status: 2,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 126,
// 			client: "Filbar's",
// 			status: 3,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 17,
// 			client: 'National Bookstore',
// 			status: 4,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 128,
// 			client: 'Logistics 12345',
// 			status: 3,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 129,
// 			client: 'AirPH Travel and Tours',
// 			status: 5,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 130,
// 			client: 'AirPH Travel and Tours',
// 			status: 6,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 131,
// 			client: 'SIX',
// 			status: 5,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 132,
// 			client: 'AirPH Travel and Tours',
// 			status: 7,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 133,
// 			client: 'AirPH Travel and Tours',
// 			status: 8,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 134,
// 			client: 'AirPH Travel and Tours',
// 			status: 9,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 135,
// 			client: 'AirPH Travel and Tours',
// 			status: 9,
// 			created_at: '2018-02-21T09:30:43',
// 		},
// 		{
// 			id: 136,
// 			client: 'AirPH Travel and Tours',
// 			status: 9,
// 			created_at: '2018-02-21T09:30:43',
// 		}
// 	]
// }
