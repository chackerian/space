import React, { Component } from 'react';
import { Listing } from '/imports/api/links/db.js';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

class reportListingModal extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return(
          <div className="modal-dialog">
            <div className="modal-content">
              <div className='modal-head'>
                <div className='modal-header'>Report Listing</div>
                <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
              </div>
              <div className="modal-body">
                <h2>Select All That Apply</h2>
                <ul className='reportListingChecks'>
                 <li><input type="checkbox" />Product is Prohibited</li>
                 <li><input type="checkbox" />Contains Offensive Content</li>
                 <li><input type="checkbox" />Contains Irrelevant Content</li>
                 <li><input type="checkbox" />Contains False Content</li>
                </ul>
                <h2>Tell Us More</h2>
                <div className="contentsBit" data-text="Briefly explain" contentEditable="true"></div>
              </div>
              <div className="modMultiBtn">
                 <a className="action" value="Send Report" />
              </div>
            </div>
        </div>
      )
    }
}

const mapDispatchToProps = dispatch => {
  return {
      close: () => dispatch({type: 'CLOSE'})
  };
};

export default connect(null, mapDispatchToProps)(reportListingModal)