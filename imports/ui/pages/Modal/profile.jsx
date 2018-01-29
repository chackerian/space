import React, { Component } from 'react';
import { Listing } from '/imports/api/links/db.js';
import { Meteor } from 'meteor/meteor';

export default class ProfileModal extends Component {
  render() {
    return(
      <div className="modJoin" id="JoinModal">
        <div className="modJoinDialog modal-dialog" role="document">
          <div className="modJoinContent modal-content">
            <div className="modJoinBody modal-body">
              <div className="modWrapper">
                <div className="modal-close"><a className="close" onClick={() => this.props.onChangeModal("off")}><i className="material-icons">close</i></a> </div>
                Image Here
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
