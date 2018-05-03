import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Listing } from '/imports/api/links/db.js';
import { connect } from 'react-redux';

class Profile extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    var profile = Meteor.users.find({_id: FlowRouter.current().params.id}).fetch()
    if (profile && profile.length > 0) {
      var prof = profile[0];
      var linked = Meteor.userId()
      var img = "http://graph.facebook.com/" + prof.services.facebook.id + "/picture?type=large";
      var facebook = "https://www.facebook.com/" + prof.services.facebook.id;
      var city = JSON.parse(Meteor.user().profile.location).city;
      var state = JSON.parse(Meteor.user().profile.location).region_name;
        return(
          <div className="oneDiv">
            <div className="topStrip">
              <ul className="headerAuth editProfile">
                  <li><a onClick={this.props.edit}>Edit</a></li>
              </ul>
              <div className="profileUserLeft">
                  <div className="profileUserImage"><img className='profilePic' src={img} /><a onClick={this.props.edit}><div className='overflower'>Edit Photo</div></a></div>
              </div>
              <div className="profileUserRight">
                <div className="profileUserName">
                  <ul>
                      <li data-toggle="tooltip" data-placement="right" title="Member since {prof.memberSince}"><h1>{prof.profile.name}</h1></li>
                      <li><div className="circle" style={{'backgroundColor': '#4E8F77'}}></div></li>
                  </ul>
                </div>
                <div className="UserRating">
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
                  </ul>
                </div>
                <div className="profileUserInfo">
                    <ul className="profileUserArea">
                        <i className="fa fa-compass"></i><li className='locoplace'>{city='New York'}, {state='New York'}</li>
                    </ul>
                </div>
                <div className="stats">
                  <div className="profileUserAmount">
                    <ul>
                        <li className="profileUserAmountBought">Meetups: {prof.profile.meetups_count}</li>
                    </ul>
                  </div>
                  <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
  }

}

const mapDispatchToProps = dispatch => {
  return {
      edit: () => dispatch({ type: 'IMAGE'})
  };
};

export default connect(null, mapDispatchToProps)(Profile)
