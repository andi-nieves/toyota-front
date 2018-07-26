import React, { Component } from 'react';
import Ticket from '../_components/Ticket';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../styles/css/kanban-column.css';

class KanbanColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isHidden: false,
			lastCount: 0
		};
	}

	toggleColumn = () => {
		this.setState({
			isHidden: !this.state.isHidden
		})
	}
	componentWillReceiveProps(){
		if(Object.keys(this.props.tickets).length > this.state.lastCount){
			// var flush = new Audio('notif.mp3');
			//   flush.play();
			  this.setState({
				lastCount: Object.keys(this.props.tickets).length
			})
		}
		// console.log(this.state);
	}
	componentWillUpdate(){
		// console.log(Object.keys(this.props.tickets).length);
		// console.log(this.state.lastCount);
		// if(Object.keys(this.props.tickets).length > this.state.lastCount){
		// 	var flush = new Audio('notif.mp3');
  		// 	flush.play();
		// }
	}
	getTickets() {
		// console.log("render");
		
		if(Object.keys(this.props.tickets).length==0){
			return;
		}
		return this.props.tickets.map((ticket) => {
			var url = `/service_calls/${ticket.id}`;
			if(this.props.column.status === parseInt(ticket.status, 10)){
				return (
					<Link to={url} key={ticket.id}>
						<Ticket ticketId={ticket.id} createdAt={ticket.created_at} client={ticket.client} status={ticket.status}/>
					</Link>
				);
			} else if (this.props.column.status === 3 && parseInt(ticket.status,10) === 4) {
				return (
					<Link to={url} key={ticket.id}>
						<Ticket ticketId={ticket.id} createdAt={ticket.created_at} client={ticket.client} status={ticket.status}/>
					</Link>
				);
			} else if (this.props.column.status === 5 && parseInt(ticket.status,10) === 6) {
				return (
					<Link to={url} key={ticket.id}>
						<Ticket ticketId={ticket.id} createdAt={ticket.created_at} client={ticket.client} status={ticket.status}/>
					</Link>
				);
			}

			return "";
		});
	}

	getColumn() {
		if(!this.state.isHidden) {
			return(
				<div>
					<div className="col-header">
						<button onClick={ this.toggleColumn }>-</button>
						<h2>{this.props.column.columnName}</h2>
					</div>
					<div className="col-body">
						{this.getTickets()}
					</div>
				</div>
			);
		} else {
			return(
				<button className="btn-plus" onClick={this.toggleColumn}>+</button>
			);
		}
	}

	render() {
		
		return(
			<div className="col">
				{this.getColumn()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		tickets: state.tickets
		// lastCount: Object.keys(state.tickets
	}
	
}

export default connect(mapStateToProps)(KanbanColumn);
