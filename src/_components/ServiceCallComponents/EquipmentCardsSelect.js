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
