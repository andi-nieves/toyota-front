import React, { Component } from 'react';
import DialogBox from './DialogBox'

export default class DeleteModalButton extends Component {
	constructor(props){
		super(props);
		this.state = {
			openDialog: false
		}
	}
	open = () => {
		console.log(this.props);
		this.setState({
			openDialog: true
		});
	}
	close = () => {
		this.setState({
			openDialog: false
		});
	}
	dialog() {
		// console.log(this.props);
		if(this.state.openDialog){
			return (
				<DialogBox message={"<h1>Hey</h1>Are you sure you want to delete this record?"} data={this.props.data}/>
			);
		}else{
			return ("");
		}
	}
	render() {
		return (
				<div>
					<button className="delete-button" onClick={this.open}>x</button>
					{this.dialog()}
				</div>

		);
	}
}
