import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Listing } from '/imports/api/links/db.js';
import { connect } from 'react-redux';

class Profile extends Component {

  constructor(props) {
    super(props)
  }

  edit = () => {
    if (Meteor.userId() == FlowRouter.current().params.id) {
      return (
        <ul className="editButton">
          <li><a onClick={this.props.edit}>Edit</a></li>
        </ul>
      )
    }
  }

  render() {
    var profile = Meteor.users.find({_id: FlowRouter.current().params.id}).fetch()
    if (profile.length > 0) {


      var prof = profile[0];
      var img = "http://graph.facebook.com/" + prof.services.facebook.id + "/picture?type=large";
      // var facebook = "https://www.facebook.com/" + prof.services.facebook.id;
      var city = JSON.parse(prof.profile.location).city;
      var state = JSON.parse(prof.profile.location).region;

        return(
          <div className="oneDiv">
            <div className="topStrip">
              <div className="profileUserLeft">
                  <div className="profileUserImage"><img className='profilePic' src={img} /><a onClick={this.props.image}>
                  <div className='overflower'><div className="overflow">Edit Photo</div></div></a></div>
              </div>
              <div className='name'></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="122" height="28">
                  <text id="SpaceTrades" class="cls-1" x="0" y="50">SpaceTrades</text>
                </svg>
              { this.edit() }
            </div>
            <div className='bottom'>
              <div className='desc location'>
                Location: {city}, {state}
              </div>
              <div className='desc'>
                <i class="fa fa-facebook-square fbconnect" aria-hidden="true"></i>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        )
    } else {
        return(
          <div className="oneDiv">
            User doesn't exist
          </div>
        )
    }
  }

}

const mapDispatchToProps = dispatch => {
  return {
      edit: () => dispatch({ type: 'EDIT_PROFILE'}),
      image: () => dispatch({ type: 'IMAGE'})
  };
};

export default connect(null, mapDispatchToProps)(Profile)
