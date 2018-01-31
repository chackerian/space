import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Listing, Offer } from '/imports/api/links/db.js';

export default class Profile extends Component {

  constructor(props) {
    super(props)
  }

  profile() {
    var prof = Meteor.users.find({_id: this.props.id}).fetch()[0]
    console.log(this.props.id, prof)
    var img = "http://graph.facebook.com/" + prof.services.facebook.id + "/picture?type=large";
    var facebook = "https://www.facebook.com/" + prof.services.facebook.id
    return(
      <div className="profileUser oneDiv">
          <div className="profileUserLeft">
              <a href="settings">
                <div className="profileUserImage"><img src={img} /></div>
              </a>
          </div>
          <div className="profileUserRight">
              <div className="profileUserName">
                  <ul>
                      <li data-toggle="tooltip" data-placement="right" title="Member since {prof.memberSince}"><h1>{prof.profile.name}</h1></li>
                      <li><div className="circle" style={{'background-color': 'green'}}></div></li>
                  </ul>
              </div>
              <div className="profileUserRating">
                <ul className="profileUserRatingUl">
                  <li>
                    <a href={facebook} target="_blank">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:{prof.services.facebook.email}" target="_blank">
                        <i className="fa fa-envelope-o"></i>
                    </a>
                  </li>
                  <li className="profileStars">
                      <span className="review-count">({prof.reviews_count} Reviews)</span>
                  </li>
                </ul>
              </div>
              <div className="profileUserInfo">
                  <ul className="profileUserArea">
                      <i className="fa fa-compass"></i><li>{prof.locationPartial='new york'}</li>
                  </ul>
              </div>
              <div className="profileUserAmount">
                  <ul>
                      <li className="profileUserAmountBought">Meetups: {prof.eetups_count}</li>
                  </ul>
              </div>
          </div>
      </div>
    )
  }

  profileSettings() {
    var options = {
      about: $(".profileSettingsAboutInput").val(),
      email: $(".profileSettingsEmailInput").val()
    }

    var photo = typeof Session.get("img1url") != "undefined" ? options.photo = Session.get("img1url") : options.photo = Meteor.user().profile.picturesm;

    Meteor.call("addProfileInfo", options);
    FlowRouter.go("/profile/" + Meteor.userId());

    $(".profileUserRight").animate("fadeInUp");
    $(".profileUserImage").animate("fadeInLeft");

    sAlert.success('Saved', {position: 'top'});
  }

  render() {
    return this.profile()
  }

}
