import React, { Component } from 'react';
import { Listing } from '/imports/api/links/db.js';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

export default class reportUser extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return(
        <form className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="modReportPageOne">
                  <h2>Select All That Apply</h2>
                    <ul>
                    	<li><input type="checkbox" />Using a Fake Name</li>
                    	<li><input type="checkbox" />User is a Scammer</li>
                    	<li><input type="checkbox" />User is Racist/Offensive</li>
                    	<li><input type="checkbox" />User is Posting Spam</li>
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
