import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Listing, Offer } from '/imports/api/links/db.js';

export default class Footer extends Component {

  constructor(props) {
    super(props)
  }

  renderFooter = () => {
  // var isUser = FB.getUserID().length > 0 || false
    if (Meteor.user()) {
      var profile = Meteor.user()._id
      return (
        <footer>
          <div className="footerLeft">
            <ul className="footerItems">
              <div className='leftInnerFooter'>
                <li><h3><a href="/">SpaceTrades</a></h3></li>
                <li><h4><a href="/help">Help</a></h4></li>
                <li><h4><a href="/help/faq">FAQ</a></h4></li>
                <li><h4><a href="/help/terms">Terms</a></h4></li>
              </div>
              <div className='rightInnerFooter'>
                <li><h4><a href="/help/safety">Safety</a></h4></li>
                <li><h4><a href="/help/prohibited">Prohibited</a></h4></li>
                <li><h4><a href="/help/contact">Contact</a></h4></li>
              </div>
            </ul>
            <ul className="footerbottom">
              <li className="footerCopy">&copy; 2018 SpaceTrades Inc</li>
              <li className="footerSocial">
                <ul>
                  <li><a href="https://facebook.com/SpaceTrades"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://twitter.com/SpaceTrades"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://instagram.com/SpaceTrades"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://youtube.com/SpaceTrades"><i className="fa fa-youtube"></i></a></li>
                  <li><a href="/help/contact"><i className="material-icons">email</i></a></li>
                </ul>
             </li>
            </ul>
          </div>
        </footer>
        )
    } else {
      return(
        <footer>
          <div className="footerLeft">
            <ul className="footerItems">
              <div className='leftInnerFooter'>
                <li><h3><a href="/">SpaceTrades</a></h3></li>
                <li><h4><a href="/help">Help</a></h4></li>
                <li><h4><a href="/help/faq">FAQ</a></h4></li>
                <li><h4><a href="/help/terms">Terms</a></h4></li>
              </div>
              <div className='rightInnerFooter'>
                <li><h4><a href="/help/safety">Safety</a></h4></li>
                <li><h4><a href="/help/prohibited">Prohibited</a></h4></li>
                <li><h4><a href="/help/contact">Contact</a></h4></li>
              </div>
            </ul>
            <ul className="footerbottom">
              <li className="footerCopy">&copy; 2018 SpaceTrades Inc</li>
              <li className="footerSocial">
                <ul>
                  <li><a href="https://facebook.com/SpaceTrades"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="https://twitter.com/SpaceTrades"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://instagram.com/SpaceTrades"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://youtube.com/SpaceTrades"><i className="fa fa-youtube"></i></a></li>
                  <li><a href="/help/contact"><i className="material-icons">email</i></a></li>
                </ul>
             </li>
            </ul>
          </div>
        </footer>
        )
      }
  }

  render() {
    return this.renderFooter()
  }

}
