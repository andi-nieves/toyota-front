import React, { Component } from 'react';
import { Field,change } from 'redux-form';

export default class CustomerIDSSelect extends Component {

	sap_costumer_codeonChange = (_this) => {
		console.log(this.props.data);
		const { name,value } = _this.target;
		const { dispatch } = this.props.data;
		
		let selectedData = this.props.data.customerids.filter((ci) => {
			return ci.sap_customer_code==value ? ci : null;
		})
		selectedData = selectedData[0];
		dispatch(change('serviceCall', 'companyName', selectedData.name));
		dispatch(change('serviceCall', 'contactPerson', selectedData.contact_person));
		dispatch(change('serviceCall', 'contactNumber', selectedData.contact_number));
		this.props.data.getEquipmentCardBySAPCode(value);
		this.props.dispatch(this.setState({
			
		}));
		// this.setState({
		// 	equipment_cards: {id: "2312",card_no: "asdadas"}
		// })
		
	}
	getSelect(){
		if(this.props.data.customerids!=undefined && Object.keys(this.props.data.customerids).length> 0 ){
			return this.props.data.customerids.map((cid) => {
				return(
					<option key={cid.id} value={cid.sap_customer_code}>{cid.name}</option>
				);
			});
		}
	}
	render() {
		return (
			<Field name="sap_costumer_code"
				component="select"
				type="select"
				placeholder=""
				value=""
				onChange={this.sap_costumer_codeonChange}
			>
				{ this.getSelect() }
			</Field>
		);
	}
}
