import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Listing } from '/imports/api/links/db.js';
import { render } from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

// import reducers
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Alert from '../../pages/Solo/alert.jsx';
import Header from '../../pages/Header/header.jsx';
import Modal from '../../pages/Modal/modal.jsx';
import Footer from '../../pages/Footer/footer.jsx';

HeaderContainer = withTracker(({ urlKey }) => {
  const list = Meteor.user();
  return {
    list
  };
})(Header);

export default class MainLayout extends Component {

  constructor(props) {
    super(props);
  }

  onChangeModal(status, modal='join') {

    if (status == "off") {
      $("body").css("overflow", "auto");
    }

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

      setTimeout(function(){
        $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
            var options = {
              id: Meteor.user()._id,
              location: JSON.stringify(data, null, 2)
            }
            Meteor.call('updateUserCreation', options)
        });
      }, 3000);
    }

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
      <Provider store={store}>
        <Alert />
        <Modal />
        <HeaderContainer />
        {this.props.content}
        <FooterContainer />
      </Provider>
    )
  }
}

FooterContainer = withTracker(({ urlKey }) => {
  const list = Meteor.user();
  return {
    list
  };
})(Footer);
