import React, { Component } from 'react';
import Sidenav from '../_components/Sidenav';
import Header from '../_components/Header';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import moment from 'moment';
import { createServiceCallAction,getAllCostumerID,getEquipmentCardBySAPCode } from '../_actions/index';
import Select from 'react-select';
import '../styles/css/create_service_call.css';

class CreateServiceCall extends Component {

	constructor(props) {
		super(props)
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
		this.state = {
			selected_equipment_code: "",
			sample: "andy",
			hasError: false
		}
	}

	forceUpdateHandler() {
		this.forceUpdate();
	};

	getInitialState() {
		return {
			backspaceRemoves: true,
			multi: true,
			creatable: false,
		};
	}

	componentWillMount() {
		this.props.getAllCostumerID();
	}

	customerids() {
		var options = [];
		if (this.props.customerids != undefined && Object.keys(this.props.customerids).length > 0) {
			options = this.props.customerids.map((cid) => {
				cid.value = cid.id;
				cid.label = cid.name;
				return cid;
			});
		}
		return options;
	}

	equipment_cards() {
		var options = [];
		if (this.props.equipment_cards != undefined && Object.keys(this.props.equipment_cards).length > 0) {
			options = this.props.equipment_cards.map((cid) => {
				cid.value = cid.id;
				cid.label = cid.internal_sn;
				return cid;
			});
		}
		return options;
	}

	handleChange = (input, props) => {
		// console.log(input);

		const {
			dispatch
		} = this.props;
		this.props.getEquipmentCardBySAPCode(input.sap_customer_code);
		dispatch(change('serviceCall', 'company[name]', input.name));
		dispatch(change('serviceCall', 'company[contact_person]', input.contact_person));
		dispatch(change('serviceCall', 'company[contact_number]', input.contact_number));
		dispatch(change('serviceCall', 'company[address]', input.street));
		this.setState({
			selected_equipment_code: "",
			sample: input.sap_customer_code
		});
	}

	handle_equipment_card_change(input) {
		console.log(input);//e_model
		const {
			dispatch
		} = this.props;
		dispatch(change('serviceCall', 'concern[model]', input.e_model));
		this.setState({
			selected_equipment_code: input.card_no
		});
	}

	submit = (values,u,x) => {
		
		// console.log(values);
		values.card_no = this.state.selected_equipment_code
		// console.log(x);
		let required = ["name","address","area"];
		this.setState({
			hasError: false
		});
		if(values.company == undefined || values.card_no == "" || values.concern == undefined || values.concern.fail_type == undefined){
			this.setState({
				hasError: true
			});
			return;
		}
		this.props.createServiceCallAction(values);
		this.props.history.push('/service_calls');
		// alert("saved!");
	}
	showError = () => {
		if(this.state.hasError){
			return (
				<div id="errorBox" className="errorBox">
					<i className="fa fa-exclamation-triangle"></i>
					<div className="message">
						<h2>Error</h2>
						<p>Please fill up all required fields with (*) asterisk marks.</p>
						
					</div>
				</div>
			);
		}
	}
	render() {

		const { handleSubmit } = this.props;
		console.log( this.props );
		var dateToday = moment().format("MMM Do YY").toString();
		var timeNow = moment().format('LTS');
		return (
		<div>
			<Header />
			<Sidenav />
			<div className="create-service-call-container">
				<h1 id="title">Service Call Form</h1>
				{this.showError()}
				<Tabs>
					<div className="tab-links">
						<TabLink to="content-info">Info</TabLink>
						<TabLink to="content-concern">Concern</TabLink>
					</div>

					<form onSubmit={ handleSubmit(this.submit) }>
						<div className="content">
							<TabContent for="content-info">
							<div className="form-group">
								<label htmlFor="company[sap_costumer_code]">SAP Costumer Code <i className="required">*</i></label>
								<Select
									id="state-select-costumer-code"
									placeholder="Select Costumer Code"
									ref={(ref) => { this.select = ref; }}
									onBlurResetsInput={false}
									onSelectResetsInput={false}
									autoFocus
									classname="react-select"
									props={this.props}
									options={this.customerids()}
									simpleValue
									onChange={this.handleChange.bind(this)}
									name="company[costumer_code]"
									searchable={true}
								/>
							</div>
								

								<div className="form-group">
									<label htmlFor="cname">Company Name</label>
									<Field name="company[name]"
									id="cname"
									component="input"
									type="text"
									placeholder=""
									/>
								</div>

								<div className="form-group">
									<label htmlFor="company[address]">Address</label>
									<Field name="company[address]"
									component="input"
									type="text"
									placeholder=""
									/>
								</div>

								<div className="form-group">
									<label htmlFor="area">Area</label>
									<Field name="company[area]"
									component="select"
									type="text"
									placeholder=""
									value=""
									>
										<option value="">Select One</option>
										<option >ARIA 1</option>
										<option >ARIA 2</option>
										<option >ARIA 3</option>
										<option >ARIA 4</option>
										<option >ARIA 5</option>
										<option >ARIA 6</option>
									</Field>
								</div>
								
								<div className="form-group">
									<label htmlFor="company[contact_person]">Contact Person</label>
									<Field name="company[contact_person]"
									component="input"
									type="text"
									placeholder=""
									/>
								</div>

								<div className="form-group">
									<label htmlFor="company[contact_number]">Contact Number</label>
									<Field name="company[contact_number]"
									component="input"
									type="text"
									placeholder=""
									/>
								</div>

								<div className="form-group">
									<label htmlFor="dateReceived">Date Received</label>
									<span className="value">{dateToday}</span>
									{/* <Field name="dateReceived"
									component="input"
									type="text"
									placeholder=""
									hidden
									/> */}
								</div>

								<div className="form-group">
									<label htmlFor="timeReceived">Time Received</label>
									<span className="value">{timeNow}</span>
								</div>

								<div className="form-group">
									<label htmlFor="requestedDate">Requested Date</label>
									<Field name="company[requestedDate]"
									component="input"
									type="date"
									placeholder=""
									/>
								</div>
							</TabContent>

							<TabContent for="content-concern">
								
								<div className="form-group">
									<label htmlFor="">Equipment Card <i className="required">*</i></label>
									<Select
										id="state-select-equipment-card"
										placeholder="Select Equipment Card"
										onBlurResetsInput={false}
										onSelectResetsInput={false}
										classname="react-select"
										props={this.props}
										options={this.equipment_cards()}
										simpleValue
										clear
										onChange={this.handle_equipment_card_change.bind(this)}
										name="equipment_card_no"
										searchable={true}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="">Model/Serial</label>
									<Field name="concern[model]"
									component="input"
									type="text"
									placeholder=""
									/>
								</div>

								<div className="form-group">
									<label htmlFor="engine">Fail Type <i className="required">*</i></label>
									<div className="checkbox-field">
										<label htmlFor="engine">
										<Field name="concern[[fail_type[engine]]" id="engine" component="input" type="checkbox"/>
										Engine</label>
									</div>
									<div className="checkbox-field">
										<label htmlFor="driveTrain">
										<Field name="concern[fail_type[driveTrain]]" id="driveTrain" component="input" type="checkbox"/>
										<span>Drive Train</span>
										</label>
									</div>
									<div className="checkbox-field">
										<label htmlFor="chassis">
										<Field name="concern[fail_type[chassis]]" id="chassis" component="input" type="checkbox"/>
										<span>Chassis</span>
										</label>
									</div>
									<div className="checkbox-field">
										<label htmlFor="electrical">
										<Field name="concern[fail_type[electrical]]" id="electrical" component="input" type="checkbox"/>
										<span>Electrical</span>
										</label>
									</div>
									<div className="checkbox-field">
										<label htmlFor="materialHandling">
										<Field name="concern[fail_type[materialHandling]]" id="materialHandling" component="input" type="checkbox"/>
										<span>Material Handling</span>
										</label>
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="frequency">Frequency</label>
									<div className="radio-group">
										<label>
											<Field name="concern[frequency]"
											component="input"
											type="radio"
											value="continuously"
											placeholder=""
											/> Continuously
										</label>
										<label>
											<Field name="concern[frequency]"
											component="input"
											type="radio"
											value="periodical"
											placeholder=""
											/> Periodical
										</label>
									</div>
								</div>

								<div className="form-group">
									<label htmlFor="firstOccurence">First Occurence</label>
									<div className="radio-group">
										<label>
											<Field name="concern[firstOccurence]"
											component="input"
											type="radio"
											value="continuously"
											placeholder=""
											/> Continuously
										</label>
										<label>
											<Field name="concern[firstOccurence]"
											component="input"
											type="radio"
											value="periodical"
											placeholder=""
											/> Periodical
										</label>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="concern[concerns]">Concerns</label>
									<Field name="concern[concerns]"
									component="textarea"
									type="text"
									placeholder=""
									/>
								</div>
							</TabContent>

							<div className="form-group">
								<button type="submit">Submit</button>
							</div>
						</div>
					</form>
					
				</Tabs>
				
			</div>
		</div>
		);
	}
}

function mapStateToProps(state) {

	return {
		errorMessage: state.serviceCall.error,
		// initialValues: {
		// 	dateReceived: moment().toDate()
		// },
		customerids: state.customerids,
		equipment_cards: state.equipment_cards!=undefined && Object.keys(state.equipment_cards).length> 0  ? state.equipment_cards : []
	};
}

const reduxFormServiceCall = reduxForm({
	form: 'serviceCall'
})(CreateServiceCall);

export default connect(mapStateToProps,{createServiceCallAction,getAllCostumerID,getEquipmentCardBySAPCode})(reduxFormServiceCall);
