import React, { Component } from 'react';
import { connect } from 'react-redux';

class Popper extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
		<div className='popover'>
			<div className='arrow'></div>
			<h3 className='popover-header'></h3>
			<div className='popover-body'></div>
		</div>
	)
  }
}

const mapStateToProps = state => {
  return {
    popstatus: state.status
  };
}

export default connect(mapStateToProps, null)(Popper)