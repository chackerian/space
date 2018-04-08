import React, { Component } from 'react';
import { currentUsername } from '../helpers.js';
import { connect } from 'react-redux';

class Homepost extends Component {

  logout = () => {
    Meteor.logout();
  }

  clearToggle() {
    if ($(".navNotifications > .headerDropDownNav").is(":visible")) {
      $(".navNotifications > .headerDropDownNav").toggle();
    }
    if ($(".navGeneral > .headerDropDownNav").is(":visible")) {
      $(".navGeneral > .headerDropDownNav").toggle();
    }
  }

  navGeneral() {
    if ($(".navNotifications > .headerDropDownNav").is(":visible")) {
      $(".navNotifications > .headerDropDownNav").toggle();
    }
    $(".navGeneral > .headerDropDownNav").toggle();
  }

  navNotifications() {
    if ($(".navGeneral > .headerDropDownNav").is(":visible")) {
      $(".navGeneral > .headerDropDownNav").toggle();
    }
    $(".fa-globe").removeClass('notificationHighlight');
    $(".navNotifications > .headerDropDownNav").toggle()
  }

  componentDidMount() {
    this.clearToggle();
    $(".search").keypress(function(e) {
      var key = e.key
      if (key == "Enter") {
        var search = $(".search").val();
        FlowRouter.go("/search?q="+search);
      }
    });
  }

  render() {
    let profile = Meteor.user()._id;
    this.clearToggle();
    return (
      <nav className="headerNav">
        <div className="wholeNav">
          <div className="leftNav">
            <div className="iconLogo">
              <ul className="headerSearch">
                <li className="headerSearchRadiusLogo">
                  <a href="/" className="radiusLogo"><span>SpaceTrades</span></a>
                </li>
              </ul>
            </div>
            <div className="searchBox">
              <input type="text" id="search" className="search" placeholder="Search" autoFocus="True" /> <i className="material-icons searchIcon">search</i>
            </div>
          </div>
          <div className="rightNav">
            <ul className="headerNameOptions">
              <li>
                <a href={`/profile/${profile}`}>
                  <span>{currentUsername()}</span>
                </a>
              </li>
            </ul>
            <li className="headerDropDown">
              <a className="small-search" data-toggle="tooltip" data-placement="bottom"><i className="fa fa-search"></i></a>
            </li>
            <ul className="headerAuth">
                <li><a className="addListing" href="#" onClick={this.props.add}>Add Listing</a></li>
            </ul>
            <ul className="clickDropper">
              <li className="navNotifications">
                <a data-toggle="tooltip" onClick={this.navNotifications} data-placement="bottom"><i className="material-icons matdrop">notifications</i></a>
                <ul className="headerDropDownNav notifyDropdown">
                  <a href={`/profile/${profile}/listings`}><li>You received a message</li></a>
                </ul>
              </li>
              <li className="navGeneral">
                <a data-toggle="tooltip" onClick={this.navGeneral} data-placement="bottom"><i className="material-icons matdrop">more_vert</i></a>
                <ul className="headerDropDownNav">
                  <a href="/listings"><li>Listings</li></a>
                  <a href="/saved"><li>Saved</li></a>
                  <a href="/help"><li>Help Center</li></a>
                  <a href="#" className="logout" onClick={this.logout}><li>Logout</li></a>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
      add: () => dispatch({ type: 'ADD'})
  };
};

export default connect(null, mapDispatchToProps)(Homepost)
