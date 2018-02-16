import React, { Component } from 'react';
import { Listing } from '/imports/api/links/db.js';
import { Meteor } from 'meteor/meteor';

export default class reportUser extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return(
        <form className="modReport modal">
            <div className="modReportDialog modal-dialog">
                <div className="modReportContent modal-content">
                    <div className="modReportDiv modReportDivTwo modal-body step step-2">
                      <div className="modReportPageTwo">
                          <h2>Select All That Apply</h2>
                          <ul>
                          	<li><input type="checkbox" /> Using a Fake Name</li>
                          	<li><input type="checkbox" />User is a Scammer/ Fraud</li>
                          	<li><input type="checkbox" />They're Racist/Offensive</li>
                          	<li><input type="checkbox"/>They're Posting Spam</li>
                          </ul>
                      </div>
                      <div className="modReportPageThree">
                        <h2>Please Tell Us More</h2>
                        <textarea placeholder="Explain the situation furthur..."></textarea>
                      </div>
                    </div>
                </div>
            </div>
        </form>
      )
    }
}
