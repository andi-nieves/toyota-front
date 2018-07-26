import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/add-button.css';

export default class AddButton extends Component {
	render() {
		return (
			<Link to='/create_service_call'>
				<button className='add-button'>+</button>
			</Link>
		);
	}
}