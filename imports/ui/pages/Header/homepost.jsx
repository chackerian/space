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

  clearToggle() {
    if ($(".navNotifications > .headerDropDownNav").is( ":visible" )) {
      $(".navNotifications > .headerDropDownNav").toggle();
    }
    if ($(".navGeneral > .headerDropDownNav").is( ":visible" )) {
      $(".navGeneral > .headerDropDownNav").toggle();
    }
  }

  navGeneral() {
    if ($(".navNotifications > .headerDropDownNav").is( ":visible" )) {
      $(".navNotifications > .headerDropDownNav").toggle();
    }
    $(".navGeneral > .headerDropDownNav").toggle();
  }

  navNotifications() {
    if ($(".navGeneral > .headerDropDownNav").is( ":visible" )) {
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
        var options = {
          search: search
        }
        FlowRouter.go("/search?q="+search)
      }
    });
  }

  render() {
    let profile = Meteor.user()._id;
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
              <ul className="headerNameOptions">
                  <li>
                      <a href={`/profile/${profile}`}>
                          <span className="headerUsername">{this.currentUsername()}</span>
                      </a>
                  </li>
              </ul>
              <ul className="headerPostOptions clickDropper">
                  <li className="headerDropDown">
                      <a className="small-search" data-toggle="tooltip" data-placement="bottom">
                          <i className="fa fa-search"></i>
                      </a>
                  </li>
                  <ul className="headerAuth">
                      <li><a className="btn btn-primary addListing" href="#" onClick={() => this.props.onChangeModal("on", "add")}>Add Listing</a></li>
                  </ul>
                  <li className="headerDropDown navNotifications clickDropper">
                      <a data-toggle="tooltip" onClick={this.navNotifications} data-placement="bottom"><i className="material-icons">notifications</i></a>
                      <ul className="headerDropDownNav notifyDropdown">
                          <a href={`/profile/${profile}/listings`}><li>You received a message</li></a>
                          <a href={`/profile/${profile}/listings`}><li>You created a Listing</li></a>
                      </ul>
                  </li>
                  <li className="headerDropDown navGeneral clickDropper">
                      <a data-toggle="tooltip" onClick={this.navGeneral} data-placement="bottom"><i className="material-icons">more_vert</i></a>
                      <ul className="headerDropDownNav">
                          <a href="/help"><li>Help Center</li></a>
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
