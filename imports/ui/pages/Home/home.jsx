import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Listing, Offer } from '/imports/api/links/db.js';
import GoogleAd from 'react-google-ad';

var HomeCard = ({item}) => (
  <div className="grid-item">
    <li className="homeCardLi">
      <ul className="homeCardItem">
        <li><a className='imglink' href={`/listing/${item.urlKey}`}><img src={item.images[0]} className="homeCardImg"/></a></li>
      </ul>
      <ul className="homeCardDetails">
        <li className='homeTitle'><a href={`/listing/${item.urlKey}`}><h4>{item.listing_title}</h4></a></li>
        <li className="homeCardLeft">
            <ul>
              <li className="money homePrice">${item.price}</li>
            </ul>
        </li>
        <li className="homeCardRight">
            <ul>
              <li className="homeCardUser">
                <a href={`/profile/${item.creator_id}`} className="profile-link">{item.creator_username}</a>
              </li>
            </ul>
        </li>
      </ul>
    </li>
  </div>
)

export default class Home extends Component {

  constructor(props) {
    super(props)
  }

  listerino = () => {
    this.setState({listings: "a"})
  }

  cards() {
    let clint = Listing.find({ status: "Pending" }).fetch();
    return(
      clint.map((item, index) => {
        return (
          <HomeCard index={index} item={item} />
        )
      })
    )
  }

  render() {
    return (
      <div className="homeCard">
        <ul className="homeCardUl">
          <div className="grid" data-isotope='{ "itemSelector": ".grid-item", "masonry": { "columnWidth": 150 } }'>
            { this.cards() }
          </div>
        </ul>
      </div>
    )
  }

}
