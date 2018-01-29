import React, { Component } from 'react';

export default class Post extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="headerNav">
          <div className="leftNav">
              <ul className="headerSearch">
                  <li className="headerSearchRadiusLogo"><a href="/" id="radiusLogo">
                    <span>SpaceTrades</span></a>
                  </li>
              </ul>
              <input type="text" id="search" className="search" placeholder="Name, Category" />
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
                      <a href="/profile/{profile}">
                          <span className="headerUsername">{this.usernameCurrent()}</span>
                      </a>
                  </li>
              </ul>
              <ul className="headerHomeButton">
                  <li><a href="/">Home</a></li>
              </ul>
              <ul className="headerPostOptions clickDropper">
                  <li className="headerDropDown">
                      <a className="small-search" data-toggle="tooltip" data-placement="bottom" title="Search">
                          <i className="fa fa-search"></i>
                      </a>
                  </li>
                  <li className="headerDropDown navGlobal">
                      <a data-toggle="tooltip" data-placement="bottom" title="Manager"><i className="fa fa-bars"></i></a>
                      <ul className="headerDropDownNav managerDropdown">
                          <a className="addListing" href="#"><li>Add Listing</li></a>
                          <a href="/profile/{profile}/active"><li>Active Meetups</li></a>
                          <a href="/profile/{profile}/offers"><li>Sent Offers</li></a>
                          <a href="/profile/{profile}/listings"><li>Your Listings</li></a>
                          <a href="/profile/{profile}/saved"><li>Saved Products</li></a>
                          <a href="/profile/{profile}/history"><li>Meetup History</li></a>
                      </ul>
                  </li>
                  <li className="headerDropDown navNotifications clickDropper">
                      <a data-toggle="tooltip" data-placement="bottom" title="Notifications"><i className="fa fa-globe"></i></a>
                      <ul className="headerDropDownNav notifyDropdown">
                          <li>{Notification}</li>
                          <button type="button" className="modNotificationsTrigger btn btn-primary">
                              View All Notifications
                          </button>
                      </ul>
                  </li>
                  <li className="headerDropDown navMessage clickDropper">
                      <a data-toggle="tooltip" data-placement="bottom" title="Chat" href="/chat">
                      <i className="material-icons">chat</i></a>
                  </li>
                  <li className="headerDropDown navGeneral clickDropper">
                  <a data-toggle="tooltip" data-placement="bottom" title="Other"><i className="fa fa-caret-down"></i></a>
                  <ul className="headerDropDownNav">
                      <a href="/help"><li>Help Center</li></a>
                      <a href="/help"><li>Go Premium</li></a>
                      <a href="/help/report"><li>Report</li></a>
                      <a href="/profile/{profile}/settings"><li>Profile Settings</li></a>
                      <a href="#" className="logout" onClick={() => Meteor.logout()}><li>Logout</li></a>
                  </ul>
              </li>
          </ul>
        </div>
      </nav>
    )
  }

}
