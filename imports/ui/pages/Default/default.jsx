import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Defaults extends Component {

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

  notfound() {
    return(
      <div className="errordiv">
        <h1 className="errorm">We couldn't find what you were looking for. <br /> This page may not exist or may have been removed.</h1>
        <a href="/" className="errorButton ph-btn-red">Home</a>
      </div>
    )
  }

  render() {
    return home()
  }

}
