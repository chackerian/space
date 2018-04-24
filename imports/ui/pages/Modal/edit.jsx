import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class EditProfileModal extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return(
        <form className="das">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modReportDiv modReportDivOne modal-body step step-1">
                <h2>Select All That Apply</h2>
                <ul>
                 <li><input type="checkbox"/>Product is Prohibited </li>
                 <li><input type="checkbox"/>Contains Offensive Content</li>
                 <li><input type="checkbox"/>Contains Irrelevant Content</li>
                 <li><input type="checkbox"/>Contains False Content</li>
                 <li><input type="checkbox"/>Contains Nudity</li>
                 <li><input type="checkbox"/>Doesn't Belong On SpaceTrades</li>
                 <li><input type="checkbox"/>Or Doesn't Comply With a Community Standard</li>
               </ul>
              </div>
            <div className="modReportDiv modReportDivThree modal-body step step-3">
              <div className="modReportPageThree">
                <h2>Please Tell Us More</h2>
                <textarea className="listdescription" placeholder="Briefly provide an explanation" data-key="description" value={this.state.description} onChange={(event) => this.handleChange(event)}></textarea>
              </div>
              <ul className="buttonas">
                  <li><a href="#">Send</a></li>
              </ul>
           </div>
         </div>
       </div>
      </form>
      )
  }
  
}