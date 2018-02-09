import React, { Component } from 'react';
import HelpNav from './nav.jsx';

export default class AboutHelp extends Component {

  render() {
    return(
      <div className="faqdiv oneDiv">
        <HelpNav />

        <h1>How Does It Work?</h1>

        <h2>1.Initial Stage</h2>

        The seller creates a new listing on the <a className="link" href='/add'>Add Listing</a> page and fills out all required information. This listing becomes viewable and searchable to all users.

        <h2>2.Message Stage</h2>

        The seller awaits contact from interested buyers. When a buyer views an item they potentially want, they may contact the seller through <a className="link" href='/chat'>Chat</a>.

        On the <a className="link" href='/profile/{profile}/offers'>Sent Offers</a> and <a className="link" href='/profile/{profile}/listings'>Your Listings</a> pages, both the seller and buyer can monitor their own offers and listings.

        <h2>3.Offer Stage</h2>

        The buyer and seller decide on price, date, and location for their future meetup. Once they have decided on these details, the Buyer sends the Seller an Offer accessed from the Offer button on the listing's item page. The offer request has the following options: price, location, date, time, and any trade items if applicable. Once the Seller accepts the offer request, the meetup has been initiated.

        <h2>4.Post Meetup Feedback Stage</h2>

        After the meetup time has passed, both parties will receive a notification with a pending review. From here the feedback system kicks in. Each member of the meetup has the opportunity to evaluate each other. This feedback is saved to a user's profile for future reference.

        <h1>Do I need to provide a credit card, paypal account...etc?</h1>

        No. SpaceTrades may include online payment systems in the future but currently it is strictly cash only at the meetup. This keeps things safer for both people meeting up.

        <h1>Can I create an account without Facebook?</h1>

        No. SpaceTrades currently requires all users to sign up through Facebook. This helps maintain user accountability

      </div>
    )
  }
}
