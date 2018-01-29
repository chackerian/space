import React, { Component } from 'react';

export default class Homepost extends Component {

  constructor(props) {
    super(props)
  }

  currentUsername() {
    if(Meteor.user()) {
      var split = Meteor.user().profile.name.split(" ");
      var last = split[1].charAt();
      var merge = split[0] + " " + last;
      return merge;
    }
  }

  navGlobal() {
    if ($(".navGeneral > .headerDropDownNav").is( ":visible" )) {
      $(".navGeneral > .headerDropDownNav").toggle();
    }
    if ($(".navNotifications > .headerDropDownNav").is( ":visible" )) {
      $(".navNotifications > .headerDropDownNav").toggle();
    }
    $(".navGlobal > .headerDropDownNav").toggle()
  }

  navGeneral() {
    if ($(".navGlobal > .headerDropDownNav").is( ":visible" )) {
      $(".navGlobal > .headerDropDownNav").toggle();
    }
    if ($(".navNotifications > .headerDropDownNav").is( ":visible" )) {
      $(".navNotifications > .headerDropDownNav").toggle();
    }
    $(".navGeneral > .headerDropDownNav").toggle();
  }

  navNotifications() {
    if ($(".navGlobal > .headerDropDownNav").is( ":visible" )) {
      $(".navGlobal > .headerDropDownNav").toggle();
    }
    if ($(".navGeneral > .headerDropDownNav").is( ":visible" )) {
      $(".navGeneral > .headerDropDownNav").toggle();
    }
    $(".fa-globe").removeClass('notificationHighlight');
    $(".navNotifications > .headerDropDownNav").toggle()
  }

  componentDidMount() {
    $(".search").keypress(function(e) {
      var key = e.key
      if (key == "Enter") {
        var search = $(".search").val();
        var options = {
          search: search
        }
        FlowRouter.go("/search?q="+search)
      }
    });
  }

  render() {
    let profile = Meteor.user()._id
    return (
      <nav className="headerNav">
          <div className="leftNav">
              <ul className="headerSearch">
                  <li className="headerSearchRadiusLogo"><a href="/" id="radiusLogo">
                  <span>SpaceTrades</span></a></li>
                  <a className="modLocationRadiusTrigger btn btn-primary" href={`/profile/${this.profile}/settings`}>
                  <li className="headerLocation">{this.locationFull}</li>
                  </a>
              </ul>
              <div className="searchBox">
                <i className="material-icons searchIcon">search</i><input type="text" id="search" className="search" placeholder="Name, Category" />
              </div>
          </div>
          <div className="rightNav">
              <ul className="headerPostOptions headerCatDrop">
                  <li className="headerDropDownShow headerCatDropLi">
                      <span>Categories</span>
                      <ul className="headerDropDownNav headerCatDropDown">
                          <a href="/search?q=Apparel"><li>Apparel</li></a>
                          <a href="/search?q=Electronics"><li>Electronics</li></a>
                          <a href="/search?q=Shoes"><li>Shoes</li></a>
                          <a href="/search?q=Other"><li>Other</li></a>
                      </ul>
                  </li>
              </ul>
              <ul className="headerNameOptions">
                  <li>
                      <a href={`/profile/${profile}`}>
                          <span className="headerUsername">{this.currentUsername()}</span>
                      </a>
                  </li>
              </ul>
              <ul className="headerHomeButton">
                  <li><a href="/">Home</a></li>
              </ul>
              <ul className="headerPostOptions clickDropper">
                  <li className="headerDropDown">
                      <a className="small-search" data-toggle="tooltip" data-placement="bottom">
                          <i className="fa fa-search"></i>
                      </a>
                  </li>
                  <li className="headerDropDown navGlobal">
                      <a data-toggle="tooltip" data-placement="bottom" onClick={this.navGlobal}>
                          <i className="fa fa-bars" aria-hidden="true"></i>
                      </a>
                      <ul className="headerDropDownNav managerDropdown">
                          <a className="addListing" href="#" onClick={() => this.props.onChangeModal("on", "add")}><li>Add Listing <i className="material-icons">add_circle</i></li></a>
                          <a href={`/profile/${profile}/listings`}><li>Listings</li></a>
                          <a href={`/profile/${profile}/active`}><li>Meetups</li></a>
                          <a href={`/profile/${profile}/history`}><li>Past Meetups</li></a>
                          <a href={`/profile/${profile}/saved`}><li>Saved</li></a>
                      </ul>
                  </li>
                  <li className="headerDropDown navNotifications clickDropper">
                      <a data-toggle="tooltip" onClick={this.navNotifications} data-placement="bottom"><i className="material-icons">notifications</i></a>
                      <ul className="headerDropDownNav notifyDropdown">
                          <a href={`/profile/${profile}/listings`}><li>You created a Listing</li></a>
                          <a href={`/profile/${profile}/listings`}><li>You created a Listing</li></a>
                          <a href={`/profile/${profile}/listings`}><li>You created a Listing</li></a>
                          <a href={`/profile/${profile}/listings`}><li>You created a Listing</li></a>
                          <a href={`/profile/${profile}/listings`}><li>You created a Listing</li></a>
                          <a href={`/profile/${profile}/listings`}><li>You created a Listing</li></a>
                      </ul>
                  </li>
                  <li className="headerDropDown navGeneral clickDropper">
                      <a data-toggle="tooltip" onClick={this.navGeneral} data-placement="bottom"><i className="material-icons">more_vert</i></a>
                      <ul className="headerDropDownNav">
                          <a href="/help"><li>Help Center</li></a>
                          <a href="/help"><li>Go Premium</li></a>
                          <a href="/help/prohibited"><li>Report</li></a>
                          <a href={`/profile/${profile}/settings`}><li>Profile Settings</li></a>
                          <a href="#" className="logout" onClick={() => this.props.logout()}><li>Logout</li></a>
                      </ul>
                  </li>
              </ul>
        </div>
      </nav>
    )
  }
}
