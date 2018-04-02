import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { connect } from 'react-redux';

class Alert extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.status == "on") {
      return (
        <div className={this.props.classNames} id={this.props.id} style={this.props.styles}>
            <div className='s-alert-box-inner'>
                {this.props.message}
            </div>
            <span className='s-alert-close' onClick={this.props.handleClose}></span>
        </div>
      )
    } else {
      return null
    }
  }

}

const mapStateToProps = state => {
  return {
    status: state.status
  };
}

export default connect(mapStateToProps, null)(Alert)
