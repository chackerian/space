import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

class SettingsModal extends Component {

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
                <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
                <li className="profileSettingsLi">
                  <ul className="profileSettingsEmail">
                    <li><h4>Email</h4></li>
                    <li><input type="text" placeholder="Email" value={email} /></li>
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

const mapDispatchToProps = dispatch => {
  return {
      close: () => dispatch({type: 'CLOSE'}),
      image: () => dispatch({type: 'IMAGE'})
  };
};

export default connect(null, mapDispatchToProps)(SettingsModal)
