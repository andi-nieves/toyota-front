import React, { Component } from 'react';
import Sidenav from '../_components/Sidenav';
import Header from '../_components/Header';

export default class Home extends Component {
  render() {
  	return (
      <div>
      	<Header />
        <Sidenav />
        <div className="container">
          <h1>Home</h1>
        </div>
      </div>
    );
  }
}
