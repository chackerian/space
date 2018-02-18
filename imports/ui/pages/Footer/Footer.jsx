import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Listing, Offer } from '/imports/api/links/db.js';

import FooterPost from './footerpost.jsx';
import FooterPre from './footerpre.jsx';

export default class Footer extends Component {

  constructor(props) {
    super(props)
  }

  renderFooter = () => {
    if (Meteor.user()) {
      var profile = Meteor.user()._id
    } else {
      }
  }

  render() {
    return this.renderFooter()
  }

}
