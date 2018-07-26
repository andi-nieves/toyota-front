import React, { Component } from 'react';
import Dropdown from '../_containers/Dropdown';

import '../styles/css/header.css';

export default class Header extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    userClicked: false
	  };
	}

	toggleDropdown = () => {
		if(!this.state.userClicked) {
			this.setState({
				userClicked: true
			})
		} else {
			this.setState({
				userClicked: false
			})
		}
	}

	getDropdown() {
		if (this.state.userClicked)
			return <Dropdown />
	}

	render() {
		var style = {
			backgroundImage: 'url(images/profile.jpg)'
		}

		return (
			<div className="header">
				<div className="container-logo">
				</div>
				<div className="right">
					<div className="container-search">
						<input type="text" placeholder="Search..." className="input-search"/>
					</div>
					<div className="container-user" onClick={ this.toggleDropdown } style={style}>
					</div>
					{this.getDropdown()}
				</div>
			</div>
		);
	}
}
