import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Offer, Listing } from '/imports/api/links/db.js';
import { render } from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { createStore } from 'redux';

import Modal from '../../pages/Modal/modal.jsx';
import Alert from '../../pages/Solo/salert.jsx';
import Header from '../../pages/Header/header.jsx';
import Footer from '../../pages/Footer/Footer.jsx';

HeaderContainer = withTracker(({ urlKey }) => {
  const list = Meteor.user();
  return {
    list
  };
})(Header);

export default class MainLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {status: "off", modal: "join", log: false}
    this.onChangeModal = this.onChangeModal.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  onChangeModal(status, modal='join') {
    this.setState({
      status: status,
      modal: modal
    });
  }

  logout() {
    rush = () => {
      this.setState({
        log: false
      });
    }

    Meteor.logout(function(err, result) {
      rush()
    });
  }

  login() {
    rush = () => {
      this.setState({
        log: true
      });

      setTimeout(function(){ Meteor.call('updateUserCreation', Meteor.user()._id) }, 3000);
    }

    // FB.login();
    Meteor.loginWithFacebook({}, function(err, result) {
      if (err == undefined) {
        rush()
      } else {
        console.log("failed to login")
      }
    })
  }

  render() {
    return (
      <div>
        <Alert alert="on"/>
        <Modal status={this.state.status} login={this.login} modal={this.state.modal} onChangeModal={this.onChangeModal} />
        <HeaderContainer login={this.login} logout={this.logout} log={this.state.log} status={this.state.status} onChangeModal={this.onChangeModal} />
        {this.props.content}
        <FooterContainer />
      </div>
      )
    }
}

FooterContainer = withTracker(({ urlKey }) => {
  const list = Meteor.user();
  return {
    list
  };
})(Footer);
