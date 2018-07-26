import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';

import './styles/css/reset.css';
import './styles/css/base.css';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import SignIn from './_containers/SignIn';
import SignUp from './_containers/SignUp';
import Home from './_containers/Home';
import Kanban from './_containers/Kanban';
import UserProfile from './_containers/UserProfile';
import ItemMaster from './_containers/ItemMaster';
import CreateServiceCall from './_containers/CreateServiceCall';
import EditServiceCall from './_containers/EditServiceCall';

import allReducers from './_reducers';

import requireAuth from './_containers/hoc/require_auth';
import noRequireAuth from './_containers/hoc/no_require_auth';

import { AUTHENTICATED } from './_actions';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(allReducers);

const user = localStorage.getItem('user');

if(user) {
	store.dispatch({ type: AUTHENTICATED });
}

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={noRequireAuth(SignIn)} />
				<Route exact path="/signup" component={noRequireAuth(SignUp)} />
				<Route exact path="/home" component={requireAuth(Home)} />
				<Route exact path="/user_profile" component={requireAuth(UserProfile)} />
				<Route exact path="/service_calls" component={requireAuth(Kanban)} />
				<Route exact path="/service_calls/:id" component={requireAuth(EditServiceCall)} />
        		<Route exact path="/item_master" component={requireAuth(ItemMaster)} />
				<Route exact path="/create_service_call" component={requireAuth(CreateServiceCall)} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
