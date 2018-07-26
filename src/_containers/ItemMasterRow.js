import React, { Component } from 'react';
import moment from 'moment';
import DeleteModalButton from '../_components/DeleteModalButton';

import '../styles/css/ticket.css';

export default class ItemMasterRow extends Component {
	constructor(props){
		super(props);
		this.state = {
			isHidden: false
		}
	}
	toggleRow = () => {
		this.setState ( {
			isHidden: !this.state.isHidden
		});
	}
	showModal = () =>{
		alert("Are you sure?");
		this.toggleRow();
	}
	getRow(){
		// console.log(`getRow: $(this.state.isHidden)`);
		if(!this.state.isHidden){
			return (
				<tr>
					<td>{this.props.data.item_code}</td>
					<td>{this.props.data.item_name}</td>
					<td><DeleteModalButton data={this.props.data} /></td>
				</tr>
			);
		}else{
			return ("");
			// return (<button className="hide_" onClick={this.toggleRow}>-</button>);
		}
	}
	render() {
		return (
				this.getRow()
		);
	}
}
