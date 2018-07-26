import React, { Component } from 'react';
import Sidenav from '../_components/Sidenav';
import Header from '../_components/Header';
import axios from 'axios';
import config from '../config.js';
import { connect } from 'react-redux';
import { getItemMaster } from '../_actions/index';
import ItemMasterRow from './ItemMasterRow'
import '../styles/css/item_master.css';

let index = 0;
class ItemMaster extends Component {

  constructor(props){
    super(props);
    this.state = {
      reload: false
    }
  }
  componentWillMount() {
  	this.props.getItemMaster();
  }

  getItemRow() {
  	return this.props.items.map((items) => {
      return (
        <ItemMasterRow data={items} key={items.item_code} />
   		);
  	});
  }

  createItemsTable() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Item Name</th>
            <th style={{maxWidth: "30px"}} className="center ">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.getItemRow()}
        </tbody>
      </table>
    );
  }

  reload = () => {
    console.log("reloading..");
    this.props.getItemMaster();
    this.setState({
      reload: !this.state.reload
    });
    console.log("reloaded");

  }
  buttonReload(){
    return (
      <button id="" onClick={this.reload}>Refresh</button>
    );
  }

  render() {
    //console.log(this.props);
  	return (
      <div>
      	<Header />
        <Sidenav />
        <div className="container">
          <div className="contents">
            <h1>Item Master</h1>
            { this.buttonReload() }
            { this.createItemsTable() }
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
	return {
		items: state.items
	}
}

export default connect(mapStateToProps,{getItemMaster})(ItemMaster);
