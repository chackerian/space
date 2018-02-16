import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import HelpNav from './nav.jsx';

export default class Help extends Component {

    constructor(props) {
      super(props)
    }

    center() {
      return(
        <div className="oneDiv">
            <HelpNav />
            <h2 className="helpShow">Welcome to the Help Center</h2>
            <p className="helpPagesPar">SpaceTrades helps people organize meetups for buying and selling items locally, whether you are looking to trade your products for others or just sell them. </p>
            <p className="helpPagesPar">Here you can find answers to common questions, review vital safety tips, check the privacy and terms policy and contact us. </p>

            <ul className="helpImgUl">
                <li><div className="aboutImg"></div></li>
                <li><div className="aboutImg"></div></li>
                <li><div className="aboutImg"></div></li>
            </ul>

            <div className="helpCenterThree">
                <ul className="helpThree">
                    <li>
                        <ul>
                            <li><h3>Get Answers</h3></li>
                            <li>If you have any questions, look over the <a className='link' href="/help/faq">FAQ</a>.</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><h3>Contact us</h3></li>
                            <li>If you would like to get in touch with us for any reason.</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><h3>Review Terms</h3></li>
                            <li>To use the site, you agree to certain <a className='link' href="/help/terms">Terms &amp; Conditions</a>.</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><h3>Terms and Conditions</h3></li>
                            <li>To use the site, you agree to certain <a className='link' href="/help/terms">Terms &amp; Conditions</a>.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
      )
    }

  render() {
    return (
      this.center()
    )
  }

}
