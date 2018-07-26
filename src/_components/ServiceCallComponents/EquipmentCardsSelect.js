import React, { Component } from 'react';
import { Field,change } from 'redux-form';
export default class EquipmentCardsSelect extends Component {
    constructor(){
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }
    forceUpdateHandler(){
        this.forceUpdate();
    };
	onChange = (_this) => {
		// console.log(this.props.data);
		// const { name,value } = _this.target;
		// const { dispatch } = this.props.data;
		
		// let selectedData = this.props.data.customerids.filter((ci) => {
		// 	return ci.sap_customer_code==value ? ci : null;
		// })
		// selectedData = selectedData[0];
		// dispatch(change('serviceCall', 'companyName', selectedData.name));
		// dispatch(change('serviceCall', 'contactPerson', selectedData.contact_person));
		// dispatch(change('serviceCall', 'contactNumber', selectedData.contact_number));
		// this.props.data.getEquipmentCardBySAPCode(value);
		
		
	}
	populateOptions(){
		if(this.props.data.equipment_cards!=undefined && Object.keys(this.props.data.equipment_cards).length> 0 ){
			return this.props.data.equipment_cards.map((cid) => {
				return(
					<option key={cid.id} value={cid.id}>{cid.card_no}</option>
				);
			});
		}
    }
    shouldComponentUpdate(nextProp,nextState){
        console.log("nak ng tokwa!");
        
        this.forceUpdateHandler();
        return true;
    }
	render() {
		return (
			<Field name="equipment_card_code"
				component="select"
				type="select"
				placeholder=""
				value=""
				onChange={this.onChange}
			>
				{ this.populateOptions() }
			</Field>
		);
	}
}
