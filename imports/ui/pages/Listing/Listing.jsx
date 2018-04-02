import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Listing } from '/imports/api/links/db.js';

import Carousel from './carousel.jsx';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class ListingItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  edit = () => {
    $(".editListing").text("Save");

    var title = $(".listingItemTitle").text();
    var price = $(".itemMoney").text().replace(/\$/g, '');
    var desc = $(".desc-full").text();

    $(".listingItemTitle").replaceWith("<input class='listingItemTitle titleEdit editing' placeholder='Enter Title' type='text' value='" + title + "'> </input>");
    $(".listingItemTitle").focus();

    $(".itemMoney").replaceWith("<input class='moneyEdit itemMoney money editing' type='text' value='" + price + "'> </input>");
    $(".desc-full").replaceWith("<div contenteditable='true' class='descEdit editing'> </div>");
  }

  save = () => {
      sAlert.success("Saved", {position: "top"});
      $(".editListing").text("Edit");

      var title = $(".titleEdit").val().shorten(25);
      var price = $(".moneyEdit").val().shorten(10);
      var desc = $(".descEdit").val().shorten(50);

      $(".titleEdit").replaceWith("<h1 class='listingItemTitle'>" + title + "</h1>");
      $(".moneyEdit").replaceWith("<li class='money itemMoney'>$" + price + "</li>");
      $(".descEdit").replaceWith("<p class='desc-full'>" + desc + "</p>");

      var options = {
        id: FlowRouter.current().params.id,
        listing_title: title,
        price: price,
        description: desc
      }

      Meteor.call('updateListing', options)
  }

  manage = () => {
    var listing = Listing.find({urlKey: FlowRouter.current().params.id}).fetch()[0]
    var isUser = Meteor.user();

    try {
      var isCreator = listing.creator_id == Meteor.user()._id ? true : false;
    } catch (error) {

    }

    if (isCreator && isUser) {
      return (
        <ul className="buttonas">
            <li><a className="editListing" href="#" onClick={this.edit}>Edit Listing</a></li>
        </ul>
      )
    } else if (isUser) {
      return (
        <ul class="buttonas">
          <li><a class="editListing" href="/chat">Chat</a></li>
          <li><a class="editListing" href="#">Save</a></li>
          <li><a class="editListing" href="#">Report</a></li>
        </ul>
      )
    } else {
      return (
        <ul class="buttonas">
          <li><a class="editListing" href="#">Chat</a></li>
          <li><a class="editListing" href="#">Save</a></li>
          <li><a class="editListing" href="#">Report</a></li>
        </ul>
      )
    }
  }

  render() {
    let listing = Listing.find({ urlKey: FlowRouter.current().params.id }).fetch()
    console.log("listing", listing)
    if (listing && listing.length > 0) {
      var listed = listing[0]
      var createdAt = moment(listed.createdAt).format("dddd, MMMM D");
      return (
        <div className="listingItemDiv">
          <div className="listingItemLeft">

          <div className="titleBox">
            <h1 className="listingItemTitle">{listed.listing_title}</h1>
          </div>

          <div className="row rowListing">
            <div className="dateDiv">
              <p className="listingItemCreated">
                {createdAt}
              </p>
            </div>
            <div className="listingPrice">
              <ul className="listingItemPrice">
                  <li className="money itemMoney">${listed.price}</li>
              </ul>
            </div>
          </div>
          <div className='topPage'>
            <Carousel />
            <img className='placeLocation' src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=15&size=800x300&key=AIzaSyAEOUmcuTmsCc3YaJ2pnX70Utc2V4MOj64" />
          </div>
          <div className='bottomPage'>
            <div className="guardian">
              <div className="listingItemUser">
                <ul className="listingItemUserImg">
                    <li><a href={`/profile/${listed.creator_id}`}><img src={listed.creator_image}/></a></li>
                </ul>
                <ul className="listingItemUserInfo">
                    <li className="listingItemUserName"><a href={`/profile/${listed.creator_id}`}>{listed.creator_username}</a></li>
                    <li className="rating">
                        <div className="rateit" data-rateit-value="{listed.totalrating}" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                    </li>
                </ul>
              </div>
              <Social listing={listed} />
              { this.manage() }
            </div>
            <div className="desc">
              <div className="desc-box">
                <h4 className="box-title">Description</h4>
                <p className="desc-full description">{listed.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    } else {
        return "<div> <h1>AD</h1> </div>"
      }
    }
}

var Social = ({listing}) => (
  <div className="listingItemShare">
      <a href={`http://twitter.com/share?url=spacetrades.io/listing/${listing._id}&text=${listing.listing_title} at spacetrades.io/listing/${listing._id}`} target="_blank" className="share-btn twitter">
          <i className="fa fa-twitter"></i>
      </a>
      <a href={`https://plus.google.com/share?url=spacetrades.io/listing/${listing._id}`} target="_blank" className="share-btn google-plus">
          <i className="fa fa-google-plus"></i>
      </a>
      <a href={`http://www.facebook.com/sharer/sharer.php?u=spacetrades.io/listing/${listing._id}`} target="_blank" className="share-btn facebook">
          <i className="fa fa-facebook"></i>
      </a>
      <a href={`http://reddit.com/submit?url=spacetrades.io/listing/${listing._id}&title=SpaceTrades`} target="_blank" className="share-btn reddit">
          <i className="fa fa-reddit"></i>
      </a>
  </div>
)
