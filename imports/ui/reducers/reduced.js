import { Meteor } from 'meteor/meteor';
import React from 'react';

export default function(state=[], action) {

  switch(action.type) {
    case "JOIN":
      return {
        modal: "join",
        status: "on"
      }
    case "ADD":
      return {
        modal: "add",
        status: "on"
      }
    case "CLOSE":
      return {
        modal: "add",
        status: "off"
      }
    default:
      return "app";
  }
}
