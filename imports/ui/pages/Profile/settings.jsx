import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Dropzone from '../Solo/drop.jsx';

export default class Settings extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      var image = Meteor.user().profile.picturelrg;
      var email = Meteor.user().services.facebook.email;
      return (
        <div className="profileSettingsDiv oneDiv">
          <ul className="profileSettingsUl">
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
          </ul>
          <ul className="ActionButtons">
            <li>
              <a className="btn c">Save Settings</a>
            </li>
          </ul>
        </div>
      )
    }
}
