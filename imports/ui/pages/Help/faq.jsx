import React, { Component } from 'react';
import HelpNav from './nav.jsx';

export default class AboutHelp extends Component {

  render() {
    return(
      <div className="faqdiv oneDiv">
        <HelpNav />

        <h2>How Does It Work?</h2>

        Create a listing, wait for messages from other users, organize a meetup.

        <h2>Do I need to provide a credit card, paypal account...etc?</h2>

        No. SpaceTrades may include online payment systems in the future but currently it is strictly cash only at the meetup. This keeps things safer for both people meeting up.

        <h2>Can I create an account without Facebook?</h2>

        No. SpaceTrades currently requires all users to sign up through Facebook. This helps maintain user accountability.
      </div>
    )
  }
}
