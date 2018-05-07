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
              <div className="profileUserLeft">
                  <div className="profileUserImage"><img className='profilePic' src={img} /><a onClick={this.props.image}>
                  <div className='overflower'><div className="overflow">Edit Photo</div></div></a></div>
              </div>
              <div className='name'>{Meteor.user().profile.name}</div>
              <ul className="editButton">
                <li><a onClick={this.props.edit}>Edit</a></li>
              </ul>
            </div>
            <div className='desc'>
              Location: 
              Meetups
            </div>
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
