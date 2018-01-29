import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import HelpNav from './nav.jsx';

export default class AboutHelp extends Component {

  render() {
    return (
      <div className="aboutDiv oneDiv">
        <HelpNav />
        <h2 className="helpPagesLogo">About Us</h2>
        <ul className="helpAboutUl">
          <li>
            <p className="helpPagesPar">
              SpaceTrades helps people organize meetups for buying and selling items locally, whether you are looking to trade your products for others or just sell them.
            </p>
          </li>
          <li>
            <ul className="helpImgUl">
              <li><div className="aboutImg"></div></li>
              <li><div className="aboutImg"></div></li>
              <li><div className="aboutImg"></div></li>
            </ul>
          </li>
          <li>
              <p className="helpPagesPar"> <b>Read</b> through the <a className="link" href='/help/'>Help Center</a> for any questions </p>
          </li>
          <li>
              <p className="helpPagesPar"> <b>View</b> and edit your profile: <a className="link" href="/profile/{profile}">{usernameCurrent}</a></p>
          </li>
          <li>
              <p className="helpPagesPar"> <b>Create</b> your first listing: <a className="link" href="/add">Add Listing</a></p>
          </li>
        </ul>
      </div>
    )
  }
}
