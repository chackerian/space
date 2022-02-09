import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Listing } from '/imports/api/links/db.js';
import GoogleAd from 'react-google-ad';

var HomeCard = ({item}) => (
  <div className="grid-item">
    <li className="homeCardLi">
      <ul className="homeCardItem">
        <li><a className='imglink' href={`/listing/${item.urlKey}`}><img src="https://img.letgo.com/images/c6/55/e4/5a/c655e45a8fb23585e392f1273d7d5511.jpeg?impolicy=img_900" className="homeCardImg"/></a></li>
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
              <li className="homeCardUser" popshow='true'>
                <a href={`/profile/${item.creator_id}`} className="profile-link">{item.creator_initials}</a>
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

  componentDidMount() {
    $("[popshow='true']").hover(() => {
      var pos = $(this).getBoundingClientRect();
      var left = pos.left;
      var top = pos.top+30;
      console.log(top, left);
      $('.popover').css({
        'left': left,
        'top': top 
      });
      $('popover').toggle();
    })
  }

  render() {
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

export default Home
