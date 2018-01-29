import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Modal extends Component {

  constructor(props) {
    super(props)
  }

  home() {
    return(
      <div className="homeNoListings">
            <h3>We Couldn't Find Any Listings</h3>
            <p>Looks like no one in your area has created a listing yet. Be the first!</p>
            <li className="homeNoListingsButton"><a href="/add" className="btn addListingHome">Add Listing</a></li>
      </div>
    )
  }

  search() {
    return(
      <div className="defaultSearch">
        <h2>Your Search Did Not Return Results</h2>
        <ul>
            <li>Make Sure Words Are Spelled Correctly</li>
            <li>Try Different Keywords</li>
            <li>Try More General Words</li>
        </ul>
      </div>
    )
  }

// <div className="defaultProfileDiv oneDiv">
//   <h2><i className="fa fa-shield"></i>User hasn't created any listings</h2>
//   <li className="defaultProfileButton"><a href="/">Home</a></li>
// </div>
//
// <div class="defaultProfileDiv oneDiv">
//   <h3>You Currently Have No Saved Items</h3>
//   <p>To save an item, go to the page of the item you want to save, and click the <b>"Save"</b> button under <b>"Options"</b>.</p>
// </div>
//
// <div class="defaultProfileDiv oneDiv">
//   <h3>You Currently Have No Created Listings</h3>
//   <p>You can create a listing here: <a href="/add" class="link"> Add Listing</a></p>
//   <p>Want to know more about this page?</p>
//   <li class="defaultProfileButton"><a href="/help">Find Out More</a></li>
// </div>
//
// <div class="defaultProfileDiv oneDiv">
//   <h3>You Currently Have No Pending Offers</h3>
//   <p>As soon as you send an offer, it will be displayed here</p>
//   <p>Want to know more about this page?</p>
//   <li class="defaultProfileButton"><a href="/help">Find Out More</a></li>
// </div>
//
// <div class="defaultProfileDiv oneDiv">
//   <h3>You Haven't Received Any Offers Yet</h3>
//   <p>You reveive an offer when someone fills out the offer form on the item page of your listing. If your expecting an offer, contact the buyer.</p>
//   <li class="defaultProfileButton"><a href="/help">Find Out More</a></li>
// </div>
//
// <div class="defaultProfileDiv oneDiv">
//   <h3>You Currently Have No Meetup History</h3>
//   <p>When you complete a meetup it will be displayed here.</p>
//   <p>Want to know more about this page?</p>
//   <li class="defaultProfileButton"><a href="/help">Find Out More</a></li>
// </div>
//
// <div class="defaultProfileDiv oneDiv">
//   <h3>You Currently Have No Active Meetups</h3>
//   <p>When you accept an offer or your offer gets accepted it will start an active meetup. </p>
//   <p>The meetup information will be displayed here.</p>
//   <p>Want to know more about this page?</p>
//   <li class="defaultProfileButton"><a href="/help">Find Out More</a></li>
// </div>
//
// <div class="defaultProfileDiv oneDiv">
//   <h3>You Currently Have No Active Listings</h3>
//   <p>As soon as you accept an offer or a seller accepts your offer the meetup will be displayed here</p>
//   <li class="defaultProfileButton"><a href="/help">Find Out More</a></li>
// </div>
//
// <div class="defaultProfileDiv oneDiv">
//   <h3>User hasn't received feedback yet</h3>
//   <li class="defaultProfileButton"><a href="/">Home</a></li>
// </div>
//
// <div class="defaultProfileDiv oneDiv defaultProfileUserDiv">
//   <h3 id="defaultProfileUserH2">Feedback Not Available</h3>
//   <p>Person Has Not Completed Any Meetups, Feedback Is Available After a Meetup Occurs</p>
//   <p>Want to know more about this page?</p>
//   <li class="defaultProfileButton"><a href="/help">Find Out More</a></li>
// </div>
//
// <div className="defaultProfileDiv oneDiv">
//   <h2>No Conversations Available</h2>
//   <p>To start a conversation, go to a user profile and click "Chat"</p>
//   <p>Want to know more about Chat?</p>
//   <li className="defaultProfileButton"><a href="/help">Find Out More</a></li>
// </div>
// <!-- CSS Hides "Inbox" On Chat Default -->
// <style type="text/css">
//   .chatConvoTab {
//     display: none !important;
//   }
// </style>
//
// <div className="defaultProfileDiv oneDiv">
//   <h2><i className="fa fa-shield"></i>Unauthorized Access</h2>
//   <p>This Page Exists, But You Don't Have Access To It. <br> To Access This Page, Please Login.</p>
//   <li className="defaultProfileButton"><a href="/">Home</a></li>
// </div>
//
// <div className="defaultProfileDiv oneDiv">
//   <h2><i className="fa fa-wrench"></i>Page Not Found</h2>
//   <p className="errorBr">Sorry About That, We Couldn't Find What You Were Looking For.</p>
//   <p className="errorBr">It May Not Exist, Or May Have Been Removed.</p>
//   <li className="defaultProfileButton"><a href="/">Home</a></li>
// </div>
//
// <div className="errordiv div">
//     <h1 className="errorSad errorm">:(</h1>
//     <h1 className="errorm"></h1>
//     <h1 className="errorm">We couldn't find what you were looking for. <br> This page may not exist or may have been removed.</h1>
//     <a href="/" className="errorButton ph-button ph-btn-red">Home</a>
// </div>

  render() {
    return home()
  }

}
