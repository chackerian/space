import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import AddModal from './add.jsx';
import JoinModal from './join.jsx';
import ReportUser from './reportUser.jsx';
import ReportListing from './reportListing.jsx';

export default class Modal extends Component {

  render() {
    if (this.props.status == "on") {
      $(".modal-backdrop").remove()
      $("body").append("<div class='modal-backdrop'></div>");
      $("body").css("overflow", "hidden")
      if (this.props.modal == "add") {
        return <AddModal />
      }
      if (this.props.modal == "join") {
        return <JoinModal login={this.props.login} />
      }
      if (this.props.modal == "reportUser") {
        return <JoinModal login={this.props.login} />
      }
      if (this.props.modal == "reportListing") {
        return <JoinModal login={this.props.login} />
      }

    }
    else {
      $(".modal-backdrop").remove()
      $("body").css("overflow", "none")
      return null
    }
  }

}
