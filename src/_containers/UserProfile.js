import React, { Component } from 'react';
import Sidenav from '../_components/Sidenav';
import Header from '../_components/Header';

import '../styles/css/user-profile.css';

export default class UserProfile extends Component {
  render() {
  	return (
      <div>
      	<Header />
        <Sidenav />
        <div className="user-profile-container">
			<div className="user-profile-header">
				<div className="employee-photo">
					<img src="images/profile.jpg" alt=""/>
				</div>
				<div className="employee-details">
					<div className="employee-details-wrapper">
						<h1>Employee One</h1>
						<h2>employeeone@gmail.com</h2>
						<button>Edit Profile</button>
					</div>
				</div>
				<div className="employee-body">
					<ul>
						<li>
							<span className="bold-number">Email</span>: employeeone@gmail.com
						</li>
						<li>
							<span className="bold-number">First Name</span>: Employee
						</li>
						<li>
							<span className="bold-number">Last Name</span>: One
						</li>
						<li>
							<span className="bold-number">Department</span>: Department 1
						</li>
						<li>
							<span className="bold-number">Position</span>: Position 1
						</li>
						<li>
							<span className="bold-number">Date of birth</span>: 02/24/1997
						</li>
					</ul>
				</div>
			</div>
        </div>
      </div>
    );
  }
}
