import { Meteor } from 'meteor/meteor';
import React from 'react';

const insert = (state, action) => {
    return [...state, action.data];
};

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
    case "CLOSE_MODAL":
      return {
        modal: "add",
        status: "off"
      }
    case "NOTIFY":
      return {
        modal: "add",
        status: "on"
      }
    case "CLOSE_NOTIFY":
      return {
        modal: "add",
        status: "on"
      }
    default:
      return "app";
  }
}
