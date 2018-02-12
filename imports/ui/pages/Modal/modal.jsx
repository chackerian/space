import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import AddModal from './add.jsx';
import JoinModal from './join.jsx';

export default class Modal extends Component {

  render() {
    if (this.props.status == "on") {
      $(".modal-backdrop").remove()
      $("body").append("<div class='modal-backdrop'></div>");
      $("body").css("overflow", "hidden")
      if (this.props.modal == "add") {
        return <AddModal onChangeModal={this.props.onChangeModal} />
      }
      if (this.props.modal == "join") {
        return <JoinModal login={this.props.login} onChangeModal={this.props.onChangeModal} />
      }
    }
    else {
      $(".modal-backdrop").remove()
      $("body").css("overflow", "none")
      return null
    }
  }

}
