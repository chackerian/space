import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import Dropzone from '../Solo/drop.jsx';
import { S3 } from 'aws-sdk';

var AWS = require('aws-sdk');

var imageminOptions = {
  optimizationLevel: 7,
  progressive: 'true',
  interlaced: 'true'
};

// var s3 = new AWS.S3().putObject()
// console.log(s3)

String.prototype.shorten = function(n) {
  return (this.length > n) ? this.substr(0, n-1) + '...' : this.substr(0,n);
};

class AddModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modaltab: 1,
      types: []
    }
  }

  nextPage(event) {
    var next = parseInt(event.target.getAttribute('data-step'))+1
    this.setState({
      modaltab: next
    })
  }

  backPage(event) {
    var past = parseInt(event.target.getAttribute('data-step'))-1
    this.setState({
      modaltab: past
    })
  }

  selectChange(event) {
    let catvalue = event.target.value;

    const categories = {
      'Apparel': ['Shirt', 'Hoodie', 'Sweater', 'Pants', 'Jacket', 'Socks', 'Hat', 'Backpack'],
      'Electronics': ['Phone', 'Tablet', 'Laptop', 'Game', 'Game Console'],
      'Shoes': ['Basketball', 'Boots', 'Running', 'Casual', 'Sandals', 'Training', 'Skateboarding'],
      'Other': ['Other']
    }

    const brands = {
      'Apparel': ['Bape', 'Supreme', 'Other'],
      'Electronics': ['Apple', 'Asus', 'Beats by Dr Dre', 'Blackberry', 'Bose', 'Cannon', 'Dell', 'Go Pro', 'Google', 'HP', 'Lenovo', 'Logitech', 'Microsoft', 'Nikon', 'Nintendo', 'Panasonic', 'Samsung', 'Sandisk', 'Sharp', 'Sony', 'Turtle Beach', 'Vizio', 'Other'],
      'Shoes': ['Asics', 'Jordans', 'Converse', 'Ewing Athletics', 'Fila', 'Li Ning', 'New Balance', 'Nike', 'Puma', 'Radii', 'Reebok', 'Saucony', 'Sperry', 'Supra', 'Timberland', 'Toms', 'Vans', 'Under Armour', 'Other'],
      'Other': ['Other']
    }

    this.setState({
      category: catvalue,
      types: categories[catvalue],
    })

  }

  selectTypeChange(event) {
    this.setState({
      type: event.target.value
    })
  }

  actionBold = () => {
    document.execCommand('bold');
  }

  actionItalic = () => {
    document.execCommand('italic');
  }

  handleChange(event) {
    var key = event.target.getAttribute('data-key');
    this.setState({
      [key]: event.target.value
    })
  }

  createListing = (props) => {
    var titled = this.state.listing_title.charAt(0).toUpperCase() + this.state.listing_title.slice(1)

    var splite = Meteor.user().profile.name.split(" ")
    var last = splite[1].charAt();
    var initials = splite[0] + " " + last;

    var options = {
      creator_id: Meteor.userId(),
      creator_facebook_id: Meteor.user().services.facebook.id,
      creator_image: Meteor.user().profile.picturelrg,
      creator_username: Meteor.user().profile.name,
      creator_initials: initials,
      listing_title: this.state.listing_title,
      urlKey: this.state.listing_title.replace(/ /g, '-'),
      images: [],
      category: this.state.category,
      type: this.state.type,
      price: this.state.price,
      description: this.state.description,
    }

    function addListingValidate() {
      for (var x in options) {
        if (options[x].length > 0) {
          return true
        }
      }
    }

    if (addListingValidate()) {
      Meteor.call('addListing', options);
    }
    
    this.props.close();
    this.props.alert();
  }

  componentDidMount() {
    $(".listtitle").focus()
  }

  render() {
    if (this.state.modaltab == 1) {
      return(
          <div className="modal-dialog">
            <div className="modal-content">
              <div className='modal-head'>
                <div className='modal-header'>Add Listing</div>
                <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
              </div>
              <div className="modal-body">
                <div className="modAddListingPage">
                  <ul className="modAddListingPageOneUl">
                    <li>
                      <h3 className="listing_title">What Are You Selling?</h3>
                      <input type="text" className="listtitle" placeholder="Title" maxLength="30" data-key="listing_title" value={this.state.listing_title} onChange={(event) => this.handleChange(event)} />
                    </li>
                    <li>
                      <h3>At What Price?</h3>
                      <input type="text" className="money" placeholder="Price" maxLength="5" data-key="price" value={this.state.price} onChange={(event) => this.handleChange(event)} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className='modal-foot'>
                <div className="modMultiBtn">
                  <button type="button" className="modalNext" data-step="1" onClick={(event) => this.nextPage(event)}>Next</button>
                </div>
              </div>
            </div>
          </div>
      )
    }

    if (this.state.modaltab == 2) {
      return(
          <div className="modal-dialog">
            <div className="modal-content">
              <div className='modal-head'>
                <div className='modal-header'>Add Listing</div>
                <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
              </div>
              <div className="modal-body">
                  <div className="modAddListingPage">
                    <ul className="modAddListingPageOneUl">
                        <li className="modOfferRequestOfferWrap">
                            <h3 className="category">What is its Category?</h3>
                            <div className="styled-select">
                                <select className="listcategory" value={this.state.category} onChange={(event) => this.selectChange(event)}>
                                    <option defaultValue>Select Category</option>
                                    <option value="Apparel">Apparel</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Shoes">Shoes</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </li>
                          <li className="modOfferRequestOfferWrap">
                            <h3 className="typed">What is its Type?</h3>
                            <select className="listtype" value={this.state.type} onChange={(event) => this.selectTypeChange(event)}>
                              <option defaultValue>Select Type</option>
                              {
                                this.state.types.map(type => {
                                  return <option value={type}>{type}</option>
                                })
                              }
                            </select>
                          </li>
                      </ul>
                </div>
              </div>
              <div className='modal-foot'>
                <div className="modMultiBtn">
                    <button type="button" className="modalBack" data-step="2" onClick={(event) => this.backPage(event)}>Back</button>
                    <button type="button" className="modalNext" data-step="2" onClick={(event) => this.nextPage(event)}>Next</button>
                </div>
              </div>
            </div>
          </div>
        )
      }

  if (this.state.modaltab == 3) {

    return(
          <div className="modal-dialog">
            <div className="modal-content">
              <div className='modal-head'>
                <div className='modal-header'>Add Listing</div>
                <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
              </div>
              <div className="modal-body">
                <div className="modAddListingPage imageUploadPage">
                  <ul className="addListImg">
                    <Dropzone></Dropzone>
                  </ul>
                </div>
              </div>
              <div className='modal-foot'>
                <div className="modMultiBtn">
                  <button type="button" className="modalBack" data-step="3" onClick={(event) => this.backPage(event)}>Back</button>
                  <button type="button" className="modalNext" data-step="3" onClick={(event) => this.nextPage(event)}>Next</button>
                </div>
              </div>
            </div>
          </div>
      )
  }

    if (this.state.modaltab == 4) {
      return(
        <div className="modal-dialog">
          <div className="modal-content">
            <div className='modal-head'>
                <div className='modal-header'>Add Listing</div>
                <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
            </div>
            <div className="modal-body">
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
            </div>
            <div className='modal-foot'>
              <div className="modMultiBtn">
                <button type="button" className="modalBack" data-step="4" onClick={(event) => this.backPage(event)}>Back</button>
                <button type="button" className="modalNext" data-step="4" onClick={this.createListing}>Create</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

}

const mapDispatchToProps = dispatch => {
  return {
      close: () => dispatch({type: 'CLOSE'}),
      alert: () => dispatch({type: 'NOTIFY'})
  };
};

export default connect(null, mapDispatchToProps)(AddModal)
