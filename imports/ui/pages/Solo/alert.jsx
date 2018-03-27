import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Alert extends Component {

  constructor(props) {
    super(props)
  }

  render() {
      return (
          <div className={this.props.classNames} id={this.props.id} style={this.props.styles}>
              <div className='s-alert-box-inner'>
                  {this.props.message}
              </div>
              <span className='s-alert-close' onClick={this.props.handleClose}></span>
          </div>
      )
  }

}
