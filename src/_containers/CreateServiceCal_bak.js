import React, { Component } from 'react';
import Sidenav from '../_components/Sidenav';
import Header from '../_components/Header';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import moment from 'moment';
import CustomerIDSSelect from '../_components/ServiceCallComponents/CustomerIDSSelect'
import { getAllCostumerID } from '../_actions/index';
// import { SyncSelect } from '../_components/SyncSelect';
import '../styles/css/create_service_call.css';
import 'react-select2-wrapper/css/select2.css';

class CreateServiceCall extends Component {

	constructor(props){
		super(props)	
	}

	componentWillMount() {
		this.props.getAllCostumerID();
	 }
	submit = (values) => {
		// console.log(values);
	}
	handleSCCChange(){
		console.log("hey");
	}
	// onFormChange = (e)=>{
	// 	const { name, value } = e.target;
	// 	console.log("FORM CHANGED!");
	// 	console.log(name + " ,--, " + value);
	// 	console.log(e);
	// 	e.currentTarget.companyName.value = "andy";
	// }
  render() {
	const { handleSubmit } = this.props;
	
	// const { update } = this.props.initialValues.companyName;
	console.log(this.props);
	  
  	var dateToday = moment().format("MMM Do YY").toString();
	var timeNow = moment().format('LTS');
	this.props.initialValues.companyName = "basdasd";
  	return (
      <div>
      	<Header />
        <Sidenav />
        <div className="create-service-call-container">
			<h1>Service Call Form</h1>
			<Tabs>
				<div className="tab-links">
					<TabLink to="content-info">Info</TabLink>
					<TabLink to="content-concern">Concern</TabLink>
					<TabLink to="content-concern">Schedule</TabLink>
					<TabLink to="content-concern">Reference</TabLink>
					<TabLink to="content-concern">PM</TabLink>
					<TabLink to="content-concern">Parts Installed</TabLink>
					<TabLink to="content-technical">Pictures</TabLink>
				</div>

				<form onSubmit={ handleSubmit(this.submit) }>
					<div className="content">
						<TabContent for="content-info">

						<div className="form-group">
							<label htmlFor="sap_costumer_code">SAP Costumer Code</label>
							<CustomerIDSSelect data={this.props}></CustomerIDSSelect>
						</div>

							<div className="form-group">
								<label htmlFor="companyName">Company Name</label>
								<Field name="companyName"
					              component="input"
					              type="text"
								  placeholder=""
								 
					            />
							</div>

							<div className="form-group">
					            <label htmlFor="address">Address</label>
					            <Field name="address"
					              component="input"
					              type="text"
					              placeholder=""
					            />
							</div>

							<div className="form-group">
					            <label htmlFor="area">Area</label>
					            <Field name="area"
					              component="select"
					              type="text"
					              placeholder=""
					              value=""
					            >
									<option value="" disabled>Area</option>
									<option value="NANU">NANU</option>
					            </Field>
							</div>

							<div className="form-group">
					            <label htmlFor="contactPerson">Contact Person</label>
					            <Field name="contactPerson"
					              component="input"
					              type="text"
					              placeholder=""
					            />
							</div>

							<div className="form-group">
					            <label htmlFor="contactNumber">Contact Number</label>
					            <Field name="contactNumber"
					              component="input"
					              type="text"
					              placeholder=""
					            />
							</div>

							<div className="form-group">
					            <label htmlFor="dateReceived">Date Received</label>
					            <span className="value">{dateToday}</span>
					            <Field name="dateReceived"
					              component="input"
					              type="text"
					              placeholder=""
					              hidden
					            />
							</div>

							<div className="form-group">
					            <label htmlFor="timeReceived">Time Received</label>
					            <span className="value">{timeNow}</span>
							</div>

							<div className="form-group">
					            <label htmlFor="requestedDate">Requested Date</label>
					            <Field name="requestedDate"
					              component="input"
					              type="date"
					              placeholder=""
					            />
							</div>
						</TabContent>

						<TabContent for="content-concern">
							<div className="form-group">
									<label htmlFor="area">Card Number</label>
									<Field name="area"
										component="select"
										type="text"
										placeholder=""
										value=""
									>
										<option value="" disabled>Area</option>
										<option value="NANU">NANU</option>
									</Field>
							</div>
							<div className="form-group">
								<label htmlFor="">Model/Serial</label>
								<Field name="model"
					              component="input"
					              type="text"
					              placeholder=""
					            />
							</div>

							<div className="form-group">
								<label htmlFor="concerns">Concerns</label>
								<Field name="concerns"
					              component="textarea"
					              type="text"
					              placeholder=""
					            />
							</div>
						</TabContent>




						<TabContent for="content-technical">
							<div className="form-group">
								<label htmlFor="">Fail Type</label>
					          	<div className="checkbox-field">
					          		<Field name="engine" id="engine" component="input" type="checkbox"/>
					          		<span>Engine</span>
					          	</div>
					          	<div className="checkbox-field">
					          		<Field name="driveTrain" id="driveTrain" component="input" type="checkbox"/>
					          		<span>Drive Train</span>
					          	</div>
					          	<div className="checkbox-field">
					          		<Field name="chassis" id="chassis" component="input" type="checkbox"/>
					          		<span>Chassis</span>
					          	</div>
					          	<div className="checkbox-field">
					          		<Field name="electrical" id="electrical" component="input" type="checkbox"/>
					          		<span>Electrical</span>
					          	</div>
					          	<div className="checkbox-field">
					          		<Field name="materialHandling" id="materialHandling" component="input" type="checkbox"/>
					          		<span>Material Handling</span>
					          	</div>
							</div>

							<div className="form-group">
					            <label htmlFor="frequency">Frequency</label>
								<div className="radio-group">
									<label>
										<Field name="frequency"
							              component="input"
							              type="radio"
							              value="continuously"
							              placeholder=""
							            /> Continuously
									</label>
						            <label>
						            	<Field name="frequency"
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
										<Field name="firstOccurence"
							              component="input"
							              type="radio"
							              value="continuously"
							              placeholder=""
							            /> Continuously
									</label>
									<label>
										<Field name="firstOccurence"
							              component="input"
							              type="radio"
							              value="periodical"
							              placeholder=""
							            /> Periodical
									</label>
								</div>
							</div>


				            <div className="form-group">
								<button type="submit">Submit</button>
				            </div>
						</TabContent>
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
		initialValues: {
			dateReceived: moment().toDate()
		},
		customerids: state.customerids
	};
}

const reduxFormServiceCall = reduxForm({
	form: 'serviceCall'
})(CreateServiceCall);

export default connect(mapStateToProps,{getAllCostumerID})(reduxFormServiceCall);
