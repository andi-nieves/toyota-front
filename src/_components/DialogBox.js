import React, { Component } from 'react';

export default class DialogBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			openDialog: true
		}
	}
	close = () => {
		this.setState({
			openDialog: false
		})
	}
	delete = () => {
		alert(this.props.data.item_name);
	}
	render() {

		if(this.state.openDialog){
			return (
					<div className="modal fade in" >
						<div className="modal-content">
							<div className="modal-body">
								{this.props.message}
							</div>
							<div className="modal-footer">
								<button className="close" onClick={this.close}>Close</button>
								<button className="" onClick={this.delete}>Delete</button>
							</div>
						</div>
					</div>
			);
		}else{
			return ("");

		}
		this.state = {
			openDialog: true
		}


	}
}
