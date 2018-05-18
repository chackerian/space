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

  componentDidMount() {
    var mape = new google.maps.places.SearchBox(document.getElementById('pac-input'))
    mape.getPlaces()
  }

  render() {
    return(
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
              <input type="text" className="listtitle" placeholder="Title" maxLength="30" value={this.state.listing_title} onChange={(event) => this.handleChange(event)} />
              <input type="text" className="money" placeholder="Price" maxLength="5" value={this.state.price} onChange={(event) => this.handleChange(event)} />
              <div className="addBitExterior">
                <div className="toolbar">
                  <ul className="tools">
                    <li><a onMouseDown={(event) => event.preventDefault()} onClick={this.actionBold}><i className="material-icons tool">format_bold</i></a></li>
                    <li><a onMouseDown={(event) => event.preventDefault()} onClick={this.actionItalic}><i className="material-icons tool">format_italic</i></a></li>
                    <li><a onMouseDown={(event) => event.preventDefault()} onClick={this.actionLink}><i className="material-icons tool">link</i></a></li>
                  </ul>
                </div>
                <div contentEditable="true" data-text="Enter description" className="contentsBit"></div>
              </div>
              <div className="modMultiBtn">
                  <button type="button" className="add modalSubmitBtn" data-step="4" onClick={this.createListing}>Create</button>
                  <button type="button" className="modalBack" data-step="4" onClick={(event) => this.backPage(event)}>Back</button>
              </div>
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