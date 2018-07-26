import React, { Component } from 'react';
import Sidenav from '../_components/Sidenav';
import Header from '../_components/Header';
import AddButton from '../_components/AddButton';
import KanbanColumn from './KanbanColumn';

import { getTickets } from '../_actions/index';

import { connect } from 'react-redux';

import '../styles/css/kanban.css';

class Kanban extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isloaded: false
		}
		this.getTickets = this.getTickets.bind(this);
		this.getTickets();
	}
  componentWillMount() {
	  this.props.getTickets();
  }

  getTickets = () => {
	let _this = this;
	setInterval(function (){
		// console.log(_this);
		if(_this.state.isloaded){
			_this.props.getTickets();
			_this.setState({
				isloaded: false
			});
		}else{
			_this.setState({
				isloaded: true
			});
		}
	  },5000);
  }
 

  createColumns() {
  	return this.props.columns.map((column) => {
		return (
  			<KanbanColumn column={column} key={column.id}/>
  		);
  	});
  }

  render() {
  	return (
      <div>
      	<Header />
        <Sidenav />
        <div className="container">
			<h1>Service Calls</h1>
			<div className="inputs">
				<input type="text" className="search" />
				<select name="" id="" className="area-1">
					<option value="north">North</option>
					<option value="south">South</option>
				</select>
				<select name="" id="" className="area-2">
					<option value="area-1">Area 1</option>
					<option value="area-2">Area 2</option>
					<option value="area-3">Area 3</option>
					<option value="area-4">Area 4</option>
				</select>
			</div>
			<div className="kanban-board">
				{this.createColumns()}
			</div>
			<AddButton />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		columns: state.columns
	}
}

export default connect(mapStateToProps, {getTickets})(Kanban);
