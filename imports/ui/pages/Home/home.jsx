import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Listing } from '/imports/api/links/db.js';
import GoogleAd from 'react-google-ad';

var HomeCard = ({item}) => (
  <div className="grid-item">
    <li className="homeCardLi">
      <ul className="homeCardItem">
        <li><a className='imglink' href={`/listing/${item.urlKey}`}><img src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ffreshkorean1.files.wordpress.com%2F2012%2F07%2Forange-ec98a4eba08ceca780-fresh-korean.jpg&f=1" className="homeCardImg"/></a></li>
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

class Home extends Component {

  constructor(props) {
    super(props)
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
    setTimeout(function(){
      $('.grid').masonry()
    }, 1000)
    return (
      <div className="homeCard">
        <ul className="homeCardUl">
          <div className="grid" data-isotope='{ "itemSelector": ".grid-item", "masonry": { "columnWidth": 200 } }'>
            { this.cards() }
          </div>
        </ul>
      </div>
    )
  }

}

export default connect()(Home)
