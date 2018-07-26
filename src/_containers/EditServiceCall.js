import axios from 'axios';
import React, { Component } from 'react';
import Sidenav from '../_components/Sidenav';
import Header from '../_components/Header';
import config from '../config';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import { log } from 'core-js';
import { join } from 'path';

class EditServiceCall extends Component {
  
  constructor(props){
    super(props)
  }
  state = {
    data: [],
    hasError: false,
    successfullyEdited: false
  }
  componentDidMount(){
      let id = this.props.match.params.id;
      let res = axios.get(`${config.url}/api/servicecalls/${id}`).then((x)=>{
        this.setState({
          data: x.data
        });
      });
  }
  submit = (values,x,d) => {
    this.setState({
      hasError: false
    });
    if(values.status == undefined){
      this.setState({
        hasError: true
      });
      return;
    }
    let id = this.props.match.params.id;
    let data = {id: id,status: values.status};
    // console.log(data);
     
    const res =  axios.post(`${config.url}/api/servicecalls/update`,{data: data}).then((res) => {
      console.log(res);
      if(res.data.success){
        this.setState({
          successfullyEdited: true
        });
      }
    });

  }
  displaymsg(){
    if(this.state.hasError){
			return (
				<div id="errorBox" className="errorBox box">
					<i className="fa fa-exclamation-triangle"></i>
					<div className="message">
						<h2>Error</h2>
						<p>Please select status!</p>
						
					</div>
				</div>
			);
    }
    if(this.state.successfullyEdited){
      return (
				<div id="successBox" className="successBox box">
					<i className="fa fa-info-circle"></i>
					<div className="message">
						<h2>Record Successfully updated!</h2>
						{/* <p>Please select status!</p> */}
						
					</div>
				</div>
			);
    }
  }
  render() {
    const { handleSubmit } = this.props;
    // console.log(this.state);
    let data  = this.state.data[0];
    if(data==undefined){
      return (
        <div>
          <Header />
          <Sidenav />
          <div className="create-service-call-container">
          <h1 id="title">Service Call Form</h1>
          </div>
        </div>
      );
    }
    
    let company = JSON.parse(data.company_info);
    let concern = JSON.parse(data.concern);
    let fail_types = Object.keys(concern.fail_type).join(", ").toUpperCase();
  	return (
      <div>
			<Header />
			<Sidenav />
			<div className="create-service-call-container">
				<h1 id="title">Service Call Form</h1>
				<Tabs>
					<div className="tab-links">
						<TabLink to="content-info">Info</TabLink>
						<TabLink to="content-concern">Concern</TabLink>
            <TabLink to="content-status">Status</TabLink>
					</div>

					<form onSubmit={ handleSubmit(this.submit) }>
						<div className="content">
							<TabContent for="content-info">
                <div className="form-group">
									<label htmlFor="">COMPANY</label>
									<span className="value">{company.model || "-"}</span>
								</div>

                <div className="form-group">
									<label htmlFor="">Contact Number</label>
									<span className="value">{company.contact_number || "-"}</span>
								</div>

                <div className="form-group">
									<label htmlFor="">Contact Person</label>
									<span className="value">{company.contact_person || "-"}</span>
								</div>

                <div className="form-group">
									<label htmlFor="">Address</label>
									<span className="value">{company.address || "-"}</span>
								</div>
							</TabContent>

							<TabContent for="content-concern">

                <div className="form-group">
									<label htmlFor="">MODEL</label>
									<span className="value">{concern.model || "-"}</span>
								</div>
                <div className="form-group">
									<label htmlFor="">FAIL TYPE</label>
									<span className="value">{fail_types || "-"}</span>
								</div>
                <div className="form-group">
									<label htmlFor="">CONCERN</label>
									<span className="value">{concern.concerns || "-"}</span>
								</div>
                <div className="form-group">
									<label htmlFor="">FREQUENCY</label>
									<span className="value">{concern.frequency || "-"}</span>
								</div>
                <div className="form-group">
									<label htmlFor="">FIRST OCCURENCE</label>
									<span className="value">{concern.firstOccurence || "-"}</span>
								</div>
								
							</TabContent>

              <TabContent for="content-status">
                {this.displaymsg()}
                <div className="form-group">
									<label htmlFor="area">Status</label>
									<Field name="status"
									component="select"
									type="text"
									placeholder="Select One"
									>
                    <option value = "">Select One</option>
										<option value = "3">Pending PO</option>
										<option value = "4">Pending Parts</option>
                    <option value = "5">For Schedule</option>
                    <option value = "6">For Confirmation</option>
									</Field>
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
const reduxFormServiceCall = reduxForm({
	form: 'serviceCall'
})(EditServiceCall);
function mapStateToProps(state) {
}
export default connect(mapStateToProps)(reduxFormServiceCall);
