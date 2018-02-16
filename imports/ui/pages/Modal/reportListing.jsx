import React, { Component } from 'react';
import { Listing } from '/imports/api/links/db.js';
import { Meteor } from 'meteor/meteor';

export default class reportListing extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return(
        <form className="modReport modal">
          <div className="modReportDialog modal-dialog">
            <div className="modReportContent modal-content">
              <div className="modReportDiv modReportDivOne modal-body step step-1">
                <h2>Select All That Apply</h2>
                <ul>
                 <li><input type="checkbox" classNameName="prohibitChoice" />Product is Prohibited </li>
                 <li><input type="checkbox" className="offenseChoice" />Contains Offensive Content</li>
                 <li><input type="checkbox" className="irrelevantChoice" />Contains Irrelevant Content</li>
                 <li><input type="checkbox" className="falseChoice" />Contains False Content</li>
                 <li><input type="checkbox" className="falseChoice" />Contains Nudity</li>
                 <li><input type="checkbox" className="falseChoice" />Doesn't Belong On SpaceTrades</li>
                 <li><input type="checkbox" className="complianceChoice" />Or Doesn't Comply With a Community Standard</li>
               </ul>
              </div>
            <div className="modReportDiv modReportDivThree modal-body step step-3">
              <div className="modReportPageThree">
                <h2>Please Tell Us More</h2>
                <textarea className="message" placeholder="Briefly provide explanation"></textarea>
              </div>
              <div className="modMultiBtn modMultiBtnReportThree">
                 <a className="action" value="Send Report" />
             </div>
           </div>
         </div>
       </div>
      </form>
      )
  }

}
