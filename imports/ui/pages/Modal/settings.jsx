import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class SettingsModal extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      var image = Meteor.user().profile.picturelrg;
      var email = Meteor.user().services.facebook.email;
      return (
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modWrapper">
                <li className="profileSettingsLi">
                  <ul className="profileSettingsPhoto">
                    <li><h4>Photo</h4></li>
                    <li className="profileSettingsImage"><img className="profilePic" src={image} /><input type="file" classNameName="profileSettingsSelectImg" onChange={this.changeImage} /></li>
                  </ul>
                </li>
                <li className="profileSettingsLi">
                  <ul className="profileSettingsEmail">
                    <li><h4>Email</h4></li>
                    <li><input type="text" className="profileSettingsEmailInput" placeholder="Email" value={email} /></li>
                  </ul>
                </li>
                <li className="profileSettingsLi">
                  <ul className="profileSettingsBlock">
                    <li><h4>Location</h4></li>
                    <li><input id="pac-input" className="controls" type="text" placeholder="Choose Location" /></li>
                  </ul>
                </li>
                <ul className="buttonas">
                    <li><a href="#" onClick={this.edit}>Save</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
}
