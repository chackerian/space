import { Meteor } from 'meteor/meteor';
import React from 'react';

export default function(state=[], action) {

  function logout() {
    rush = () => {
      this.setState({
        log: false
      });
    }

    Meteor.logout(function(err, result) {
      rush()
    });
  }

  function login() {
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

  switch(action.type) {
    case "LOGIN":
      login();
      return "app";
    case "JOIN":
      console.log("join")
      return {
        modal: "join",
        status: "on"
      }
    case "LOGOUT":
      logout();
      return "app";
    case "ADD":
      console.log("add")
      return {
        modal: "add",
        status: "on"
      }
    default:
      return "app";
  }
}
