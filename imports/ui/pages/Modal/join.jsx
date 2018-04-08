import React, { Component } from 'react';
import { Listing } from '/imports/api/links/db.js';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

class JoinModal extends Component {

  login = () => {
    this.props.close();
    Meteor.loginWithFacebook({
      requestPermissions: ['user_friends', 'public_profile', 'email']
    }, function(err, result) {
      if (err == undefined) {
        setTimeout(function(){
          $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
            var options = {
              id: Meteor.user()._id,
              location: JSON.stringify(data, null, 2)
            }
            Meteor.call('updateUserCreation', options)
          });
        }, 5000);
      }
    })
  }

  render() {
    return(
      <div className="modJoin">
        <div className="modJoinDialog modal-dialog">
          <div className="modJoinContent modal-content">
            <div className="modJoinBody modal-body">
              <div className="modWrapper">
                <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
                <h1>Join SpaceTrades</h1>
                <ul>
                  <li className="modJoinMessage">SpaceTrades helps people organize meetups for buying and selling items locally. We aim to make buying and selling safer and easier.</li>
                </ul>
                <p className="joinAgreeSmall">By signing up you agree to our <a className="link" target="_blank" href="/help/terms">Terms and Conditions</a></p>
                <div className="join-button facebook" onClick={this.login}>
                  <i className="fa fa-facebook-square"></i>
                  <b>Continue with Facebook</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
      close: () => dispatch({type: 'CLOSE'})
  };
};

export default connect(null, mapDispatchToProps)(JoinModal)
