import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';

class EditListingModal extends Component {

    constructor(props) {
      super(props)
      this.state = {
        price:"",
        listing_title:""
      }
    }

    render() {
      var mape = new google.maps.places.SearchBox(document.getElementById('pac-input'))
      mape.getPlaces()
      return(
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
                <input type="text" className="listtitle" placeholder="Listing Title" maxLength="30" value={this.state.listing_title} onChange={(event) => this.handleChange(event)} />
                <input type="text" className="listprice" placeholder="Price" maxLength="5" value={this.state.price} onChange={(event) => this.handleChange(event)} />
                <div className="listdescription" placeholder="Briefly explain any other information" contentEditable ></div>
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

export default connect(null, mapDispatchToProps)(EditListingModal)