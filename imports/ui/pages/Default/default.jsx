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

  fourofour() {
    return(
      <div className="errordiv">
        <h1 className="errorm"></h1>
        <h1 className="errorm">We couldn't find what you were looking for. <br /> This page may not exist or may have been removed.</h1>
        <a href="/" className="errorButton ph-button ph-btn-red">Home</a>
      </div>
    )
  }

  render() {
    return home()
  }

}
