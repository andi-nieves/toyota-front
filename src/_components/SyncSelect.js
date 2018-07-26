import React, { Component } from 'react';
export default class SyncSelect extends Component {
	static propTypes = {
	  onValueMismatch: PropTypes.func.isRequired,
	  value: PropTypes.string.isRequired
	}
  
	checkSelect () {
	  const {
		refs: {select},
		props: {
		  value: propsValue,
		  onValueMismatch
		}
	  } = this
	  const selectValue = select.value
  
	  if (selectValue !== propsValue) onValueMismatch(selectValue, select)
	}
  
	componentDidMount () {
	  this.checkSelect()
	}
  
	componentDidUpdate () {
	  this.checkSelect()
	}
  
	render () {
	  const {onValueMismatch: _, ...props} = this.props
  
	  return (<select {...props} ref='select' />)
	}
  }