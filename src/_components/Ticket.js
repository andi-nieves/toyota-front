import React, { Component } from 'react';
import moment from 'moment';

import '../styles/css/ticket.css';

export default class Ticket extends Component {
	render() {
		var age = moment(this.props.createdAt).fromNow(true);
		var ticketAge = () => {
			if(age.includes('a day')) {
				return (
					<h3 className="age age-warning">{age}</h3>
				);
			} else if (age.includes('days')||age.includes('month')||age.includes('year')){
				return (
					<h3 className="age age-danger">{age}</h3>
				);
			} else {
				return (
					<h3 className="age age-safe">{age}</h3>
				);
			}
		}
		var ticketStatus = () => {
			let statusClass;
			let statusName;
			switch(parseInt(this.props.status)) {
				case 3:
					statusClass = `ticket-status ticket-status-${this.props.status}`;
					statusName = 'Pending PO';
					break;
				case 4:
					statusClass = `ticket-status ticket-status-${this.props.status}`;
					statusName = 'Pending Parts';
					break;
				case 5:
					statusClass = `ticket-status ticket-status-${this.props.status}`;
					statusName = 'For Schedule';
					break;
				case 6:
					statusClass = `ticket-status ticket-status-${this.props.status}`;
					statusName = 'For Confirmation';
					break;
				case 9:
					statusClass = `ticket-status ticket-status-${this.props.status}`;
					statusName = 'Complete';
					break;
				default:
					statusClass = `ticket-status ticket-status-default`;
					break;
			}

			return (
				<div className={statusClass}>
					<h3>{statusName}</h3>
				</div>
			);
		}
		return (
			<div className="ticket">
				{ticketAge()}
				<h3>{this.props.ticketId}</h3>
				<h2>{this.props.client}</h2>
				{ticketStatus()}
			</div>
		);
	}
}
