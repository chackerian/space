import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import Carousel from './carousel.jsx';
import { Listing, Offer } from '/imports/api/links/db.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { withTracker } from 'meteor/react-meteor-data';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

String.prototype.shorten = function(n) {
  return (this.length > n) ? this.substr(0, n-1) + '...' : this.substr(0,n);
};

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

    $(".listingItemTitle").replaceWith("<input class='listingItemTitle titleEdit editing' type='text' value='" + title + "'> </input>");
    $(".listingItemTitle").focus();

    $(".itemMoney").replaceWith("<input class='moneyEdit itemMoney money editing' type='text' value='" + price + "'> </input>");
    $(".desc-full").replaceWith("<input class='descEdit editing' type='text' value='" + desc + "'> </input>");
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
    }
    catch (error) {
      console.log(error)
    }

    if (isCreator && isUser) {
      return (
        <div className="actions">
          <a className='actionButton editListing' href='edit' onClick={()=> this.edit()}>Edit</a>
        </div>
      )
    }
    else if (isUser) {
      return (
        <div className="actions">
          <a className='actionButton' href='chat'>Chat</a>
          <a className='actionButton' href='save'>Save</a>
          <a className='actionButton' href='report'>Report</a>
        </div>
      )
    }
    else {
      return (
      <div className="actions">
        <a className='actionButton' href='chat'>Chat</a>
        <a className='actionButton' href='save'>Save</a>
        <a className='actionButton' href='report'>Report</a>
      </div>
      )
    }
  }

  imageModal() {
  	<div className="modJoin">
  	    <div className="modImageDialog modal-dialog" role="document">
  	        <div className="modal-content">
  	        	<div className="modal-close">
  					<a className="close"><i className="material-icons">close</i></a>
  				</div>
  	        	<div className="modal-body">
  			        <img src="{img1}" />
  	        	</div>
  	        </div>
  	    </div>
  	</div>
  }

  render() {
    var listing = Listing.find({urlKey: FlowRouter.current().params.id}).fetch()[0]
    var createdAt = moment(listing.createdAt).format("dddd, MMMM D");

    if (listing) {
      return (
        <div className="listingItemDiv oneDiv">
          <div className="listingItemLeft">

          <div className="titleBox">
            <h1 className="listingItemTitle">{listing.listing_title}</h1>
          </div>

          <div class="row">
            <div className="offerDiv">
              <p className="listingItemOffersReceived">
                {createdAt}th
              </p>
            </div>

            <div className="listingItemPriceButtons">
              <ul className="listingItemPrice">
                  <li className="money itemMoney">${listing.price}</li>
              </ul>
            </div>
          </div>
          <div className='topPage'>
            <Carousel />
            <img className='placeLocation' src="https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=600x600&key=AIzaSyAEOUmcuTmsCc3YaJ2pnX70Utc2V4MOj64" />
          </div>
          <div className='bottomPage'>
            <div className="desc">
              <div className="desc-box desc-box-details">
                <h4 className="box-title">Details</h4>
                <p className="desc-full">
                  <span className='cat'>Category: <a href={`/search?q=${listing.category}`} className="searchProperty">{listing.category}</a></span>
                  <span className='type right'>Type: <a href={`/search?q=${listing.type}`} className="searchProperty">{listing.type}</a></span>
                  <br />
                  <span className='condition'>Condition: {listing.condition}</span>
                  <span className="right">Trade Offers: {listing.trade}</span>
                </p>
              </div>
              <div className="desc-box">
                <h4 className="box-title">Description</h4>
                <p className="desc-full description">{listing.description}</p>
              </div>
            </div>

            <div className="guardian">
              { this.manage() }
              <div className="listingItemUser">
                <ul className="listingItemUserImg">
                    <li><a href={`/profile/${listing.creator_id}`}><img src={listing.creator_image}/></a></li>
                </ul>
                <ul className="listingItemUserInfo">
                    <li className="listingItemUserName"><a href={`/profile/${listing.creator_id}`}>{listing.creator_username}</a></li>
                    <li className="rating">
                        <div className="rateit" data-rateit-value="{listing.totalrating}" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                    </li>
                </ul>
              </div>
              <Social listing={listing} />
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
