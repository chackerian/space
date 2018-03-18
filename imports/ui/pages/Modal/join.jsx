import React, { Component } from 'react';
import { Listing } from '/imports/api/links/db.js';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

class JoinModal extends Component {

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
                  <li className="modJoinMessage">We aim to make Buying and Selling Safer and Easier.</li>
                  <li>Currently, we only allow Facebook sign-up to ensure site-wide credibility.</li>
                </ul>
                <p className="joinAgreeSmall">By signing up you agree to our <a className="link" href="/help/terms">Terms and Conditions</a></p>
                <div className="modJoinFB-Btn ph-button facebook" onClick={this.props.login}>
                  <i className="fa fa-facebook-square"></i>
                  <b>Sign Up With Facebook</b>
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
      login: () => dispatch({type: 'LOGIN'}),
      close: () => dispatch({type: 'CLOSE'})
  };
};

export default connect(null, mapDispatchToProps)(JoinModal)
