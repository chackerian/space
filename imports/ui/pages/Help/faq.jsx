import React, { Component } from 'react';
import HelpNav from './nav.jsx';

export default class AboutHelp extends Component {

  render() {
    return(
      <div className="faqdiv oneDiv">
        <HelpNav />

        <h1>How Does It Work?</h1>

        <h2>1.Initial Stage</h2>

        Create a listing

        <h1>Do I need to provide a credit card, paypal account...etc?</h1>

        No. SpaceTrades may include online payment systems in the future but currently it is strictly cash only at the meetup. This keeps things safer for both people meeting up.

        <h1>Can I create an account without Facebook?</h1>

        No. SpaceTrades currently requires all users to sign up through Facebook. This helps maintain user accountability

      </div>
    )
  }
}
