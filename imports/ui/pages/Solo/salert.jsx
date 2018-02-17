import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Alert extends Component {

  constructor(props) {
    super(props)
    this.state = {status: 'on'}
  }

  close() {
    clearTimeout(tmpl.sAlertCloseTimeout);
  }

  render() {
    if (this.props.status == "on") {
      return(
      <div className="s-alert-box s-alert-success s-alert-top s-alert-show" style={{top: 0 + 'px'}}>
        <div className="s-alert-box-inner">
            <p>{message="ASD"}</p>
        </div>
        <span className="s-alert-close" onClick={this.closeModal}></span>
      </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

}
