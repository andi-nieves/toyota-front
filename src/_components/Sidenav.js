import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/sidenav.css';

export default class Sidenav extends Component {
  render() {
    return (
      <nav className="sidenav">
    		<ul>
    			<li>
    				<Link to="/home">Home</Link>
    			</li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/assets">Assets</Link>
          </li>
          <li>
            <Link to="/service_calls">Service Calls</Link>
          </li>
          <li>
            <Link to="/service_history">Service History</Link>
          </li>
          <li>
            <Link to="/pm_templates">PM Templates</Link>
          </li>
          <li>
            <Link to="/item_master">Item Master</Link>
          </li>
          <li>
            <Link to="/receive_parts">Receive Parts</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
    		</ul>
      </nav>
    );
  }
}
