import React, { Component } from 'react';
import { signOutAction } from '../_actions';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import '../styles/css/dropdown.css';

class Dropdown extends Component {
	signout = () => {
		// console.log(this);
		this.props.signOutAction();
	}

	render() {
		return (
			<div className="dropdown">
				<ul>
					<li className="top">
						<Link to='/user_profile'>User Profile</Link>
					</li>
					<li onClick={this.signout}>Sign Out</li>
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, {signOutAction})(Dropdown);

