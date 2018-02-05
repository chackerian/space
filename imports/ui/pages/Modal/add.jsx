import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactFilestack, { client } from 'filestack-react';

String.prototype.shorten = function(n) {
  return (this.length > n) ? this.substr(0, n-1) + '...' : this.substr(0,n);
};

export default class AddModal extends Component {

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
      brand: brands[catvalue]
    })

  }

  selectTypeChange(event) {
    this.setState({
      type: event.target.value
    })
  }

  selectQuantityChange(event) {
    this.setState({
      quantity: event.target.value
    })
  }

  selectBrandChange(event) {
    this.setState({
      brandReal: event.target.value
    })
  }

  selectConditionChange(event) {
    this.setState({
      condition: event.target.value
    })
  }

  handleChange(event) {
    var key = event.target.getAttribute('data-key');
    this.setState({
      [key]: event.target.value
    })
    console.log(this.state)
  }

  createListing = (props) => {
    this.props.onChangeModal("off")
    var image = "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture?type=large";
    var titled = this.state.listing_title.charAt(0).toUpperCase() + this.state.listing_title.slice(1)
    var options = {
      creator_id: Meteor.userId(),
      creator_facebook_id: Meteor.user().services.facebook.id,
      creator_image: image,
      creator_username: Meteor.user().profile.name,
      listing_title: titled,
      urlKey: this.state.listing_title.replace(/ /g, '-'),
      category: this.state.category,
      type: this.state.type,
      price: this.state.price,
      trade: this.state.trade,
      condition: this.state.condition,
      description: this.state.description,
      offers_received: 0,
      images: Session.get('images')
    }
    console.log(options)
    function addListingValidate() {
      for (var x in options) {
        if (options[x].length > 0) {
          return true
        }
      }
    }

    if (addListingValidate()) {
      Meteor.call('addListing', options);
      Meteor.call('pulseNotify')
    }

  }

  render() {
    if(this.state.modaltab == 1) {
      return(
          <div className="modAddListingDialog modal-dialog">
            <div className="modAddListingContent modal-content">
              <div className="modAddListingDiv modal-body step-1">
                <div className="modal-close"><a className="close" onClick={() => this.props.onChangeModal("off")}><i className="material-icons">close</i></a></div>
                  <div className="modAddListingPage">
                    <ul className="modAddListingPageOneUl modOfferRequestPageOneUl">
                      <li className="modOfferRequestOfferWrap">
                        <h3 className="listing_title">What Are You Selling?</h3>
                        <input type="text" className="listtitle" placeholder="Listing Title..." maxLength="30" data-key="listing_title" value={this.state.listing_title} onChange={(event) => this.handleChange(event)} />
                      </li>
                      <li className="modOfferRequestOfferWrap">
                        <h3 className="price">At What Price?</h3>
                        <input type="text" className="listprice" placeholder="Price..." maxLength="5" data-key="price" value={this.state.price} onChange={(event) => this.handleChange(event)} />
                      </li>
                    </ul>
                  </div>
                <div className="modMultiBtn modMultiBtnSingle">
                    <button type="button" className="btn btn-primary modalNext" data-step="1" onClick={(event) => this.nextPage(event)}>Next</button>
                </div>
              </div>
            </div>
          </div>
      )
    }

    if(this.state.modaltab == 2) {
      return(
        <div className="modAddListingDialog modal-dialog">
          <div className="modAddListingContent modal-content">
            <div className="modAddListingDiv modAddListingDivTwo modal-body step-2">
              <div className="modal-close"><a className="close" onClick={() => this.props.onChangeModal("off")}><i className="material-icons">close</i></a></div>
                <div className="modAddListingPage">
                  <ul className="modAddListingPageOneUl modOfferRequestPageOneUl">
                      <li className="modOfferRequestOfferWrap">
                          <h3 className="category">What is its Category?</h3>
                          <div className="styled-select">
                              <select className="listcategory" value={this.state.category} onChange={(event) => this.selectChange(event)}>
                                  <option disabled defaultValue>Select Category</option>
                                  <option value="Apparel">Apparel</option>
                                  <option value="Electronics">Electronics</option>
                                  <option value="Shoes">Shoes</option>
                                  <option value="Shoes">Other</option>
                              </select>
                          </div>
                      </li>
                        <li className="modOfferRequestOfferWrap">
                          <h3 className="type">What is its Type?</h3>
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
              <div className="modMultiBtn">
                  <button type="button" className="btn btn-primary modalNext" data-step="2" onClick={(event) => this.nextPage(event)}>Next</button>
                  <button type="button" className="btn btn-primary modalBack" data-step="2" onClick={(event) => this.backPage(event)}>Back</button>
              </div>
            </div>
          </div>
        </div>
        )
      }

  const options = {
    accept: 'image/*',
    maxFiles: 4
  };

  onSuccess = (result) => {
    var images = [];
    var files = result.filesUploaded
    files.map(x => {
      images.push(x.url)
    })
    Session.set('images', images)
  }

  if(this.state.modaltab == 3) {

    return(
      <div className="modAddListingDialog modal-dialog">
        <div className="modAddListingContent modal-content">
          <div className="modAddListingDiv modal-body step step-3">
            <div className="modal-close"><a className="close" onClick={() => this.props.onChangeModal("off")}><i className="material-icons">close</i></a></div>
            <div className="modAddListingPage">
              <ul className="addListImg">
                <ReactFilestack
                  apikey='AY9qCMb1DR52X6kAM4p5Bz'
                  buttonText="Add Images"
                  buttonClass="uploadimages"
                  options={options}
                  onSuccess={onSuccess}
                />
              </ul>
            </div>
            <div className="modMultiBtn">
                <button type="button" className="btn btn-primary modalNext" data-step="3" onClick={(event) => this.nextPage(event)}>Next</button>
                <button type="button" className="btn btn-primary modalBack" data-step="3" onClick={(event) => this.backPage(event)}>Back</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if(this.state.modaltab == 4) {
    return(
      <div className="modAddListingDialog modal-dialog">
        <div className="modAddListingContent modal-content">
          <div className="modAddListingDiv modal-body step step-4">
            <div className="modal-close"><a className="close" onClick={() => this.props.onChangeModal("off")}><i className="material-icons">close</i></a></div>
            <div className="modAddListingPage">
            <h3>Provide Details</h3>
            <ul className="modAddListingPageFourUl">
                <li><label>Quantity</label>
                  <div className="styled-select">
                      <select className="listquantity" value={this.state.quantity} onChange={(event) => this.selectQuantityChange(event)}>
                          <option value="1">1</option>option>
                          <option value="2">2</option>option>
                          <option value="3">3</option>option>
                          <option value="4">4</option>option>
                          <option value="5">5</option>option>
                          <option value="6">6</option>option>
                          <option value="7">7</option>option>
                          <option value="8">8</option>option>
                          <option value="9">9</option>option>
                          <option value="10">10+</option>option>
                      </select>
                  </div>
                </li>
                <li><label>Brand</label>
                    <div className="styled-select">
                        <select className="listbrand" value={this.state.brandReal} onChange={(event) => this.selectBrandChange(event)}>
                            <option disabled defaultValue>Select Brand</option>
                            {
                              this.state.brand.map(brand => {
                                return <option value={brand}>{brand}</option>
                              })
                            }
                        </select>
                    </div>
                </li>
                <li>
                    <label>Condition</label>
                    <div className="styled-select">
                        <select className="condition" value={this.state.condition} onChange={(event) => this.selectConditionChange(event)}>
                            <option value="New">New</option>
                            <option value="Like New">Like New</option>
                            <option value="Used">Used</option>
                            <option value="Needs Repair">Needs Repair</option>
                        </select>
                    </div>
                </li>
                <li hidden className="listsizenumber"><label>Size</label>
                    <div className="styled-select">
                        <select className="listsizeshoe" onChange={this.shoeChange} value={this.state.size}>
                            <option disabled defaultValue>Select Size</option>
                            <option value="5 womens">5 Womens</option>
                            <option value="5.5 womens">5.5 Womens</option>
                            <option value="6 womens">6 Womens</option>
                            <option value="6.5 womens">6.5 Womens</option>
                            <option value="7 womens">7 Womens</option>
                            <option value="7 mens">7 Mens</option>
                            <option value="7.5 womens">7.5 Womens</option>
                            <option value="7.5 mens">7.5 Mens</option>
                            <option value="8 womens">8 Womens</option>
                            <option value="8 mens">8 Mens</option>
                            <option value="8.5 womens">8.5 Womens</option>
                            <option value="8.5 mens">8.5 Mens</option>
                            <option value="9 womens">9 Womens</option>
                            <option value="9 mens">9 Mens</option>
                            <option value="9.5 womens">9.5 Womens</option>
                            <option value="9.5 mens">9.5 Mens</option>
                            <option value="10 womens">10 Womens</option>
                            <option value="10 mens">10 Mens</option>
                            <option value="10.5 womens">10.5 Womens</option>
                            <option value="10.5 mens">10.5 Mens</option>
                            <option value="11 womens">11 Womens</option>
                            <option value="11 mens">11 Mens</option>
                            <option value="11.5 womens">11.5 Womens</option>
                            <option value="11.5 mens">11.5 Mens</option>
                            <option value="12 womens">12 Womens</option>
                            <option value="12 mens">12 Mens</option>
                            <option value="12.5 mens">12.5 Mens</option>
                            <option value="13 mens">13 Mens</option>
                            <option value="13.5 mens">13.5 Mens</option>
                            <option value="14 mens">14 Mens</option>
                            <option value="14.5 mens">14.5 Mens</option>
                            <option value="15 mens">15 Mens</option>
                        </select>
                    </div>
                </li>
                <li hidden className="listsizename"><label>Size</label>
                    <div className="styled-select">
                        <select className="listsizename">
                            <option disabled defaultValue>Select Size</option>
                            <option value="XS">XS</option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                </li>
                <li hidden className="listcapacity"><label>Capacity</label>
                    <div className="styled-select capacity-select">
                        <select className="listspace">
                            <option disabled defaultValue>Select Size</option>option>
                            <option value="4 GB">4 GB</option>
                            <option value="8 GB">8 GB</option>
                            <option value="16 GB">16 GB</option>
                            <option value="32 GB">32 GB</option>
                            <option value="64 GB">64 GB</option>
                            <option value="128 GB">128 GB</option>
                            <option value="250 GB">250 GB</option>
                            <option value="500 GB">500 GB</option>
                            <option value="1 TB">1 TB</option>
                            <option value="1 TB +">1 TB +</option>
                        </select>
                    </div>
                </li>
              </ul>
            </div>
            <div className="modMultiBtn">
                <button type="button" className="btn btn-primary modalNext" data-step="4" onClick={(event) => this.nextPage(event)}>Next</button>
                <button type="button" className="btn btn-primary modalBack" data-step="4" onClick={(event) => this.backPage(event)}>Back</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if(this.state.modaltab == 5) {
    return(
      <div className="modAddListingDialog modal-dialog">
        <div className="modAddListingContent modal-content">
          <div className="modAddListingDiv modAddListingDivFive modal-body step step-5">
            <div className="modal-close"><a className="close" onClick={() => this.props.onChangeModal("off")}>
            <i className="material-icons">close</i>
            </a></div>
            <div className="modAddListingPage">
                  <ul className="modOfferRequestPageOneUl">
                      <li className="radioWrap" value={this.state.trade} onChange={(event) => this.handleChange(event)}>
                          <h3>Do You Want To Allow Trade Offers?</h3>
                          <ul>
                              <li>
                                  <input type="radio" id="modAddListingTradeOffersNo" data-key="trade" name="addListingTradeOffers" value="Not Allowed" className="radioWrapElement"/>
                                  <label htmlFor="modAddListingTradeOffersNo">No</label>
                              </li>
                              <li className="modOfferRequestPaymentCash">
                                  <input type="radio" id="modAddListingTradeOffersYes" data-key="trade" name="addListingTradeOffers" value="Allowed" className="radioWrapElement"/>
                                  <label htmlFor="modAddListingTradeOffersYes">Yes</label>
                              </li>
                          </ul>
                      </li>
                      <li className="radioWrap">
                          <h3>Which Form Of Payment Will You Accept?</h3>
                          <ul className="paymentform" data-key="payment" value={this.state.payment} onChange={(event) => this.handleChange(event)}>
                              <li className="modOfferRequestPaymentCash">
                                  <input type="radio" id="modAddListingCashRadio" name="addListingPayment" value="Cash" className="radioWrapElement" defaultChecked/>
                                  <label htmlFor="modAddListingCashRadio">Cash</label>
                              </li>
                              <li className="modOfferRequestPaymentOther">
                                  <input type="radio" id="modAddListingOtherRadio" name="addListingPayment" value="Other" className="radioWrapElement"/>
                                  <label htmlFor="modAddListingOtherRadio">Other</label>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </div>
                <div className="modMultiBtn">
                    <button type="button" className="btn btn-primary modalNext" data-step="5" onClick={(event) => this.nextPage(event)}>Next</button>
                    <button type="button" className="btn btn-primary modalBack" data-step="5"  onClick={(event) => this.backPage(event)}>Back</button>
                </div>
              </div>
              </div>
            </div>
          )
        }

    if(this.state.modaltab == 6) {
      return(
        <div className="modAddListingDialog modal-dialog">
          <div className="modAddListingContent modal-content">
            <div className="modAddListingDiv modAddListingDivSix modal-body step step-6">
              <div className="modal-close"><a className="close" onClick={() => this.props.onChangeModal("off")}><i className="material-icons">close</i></a></div>
              <div className="modAddListingPage">
                <h3 className="description">Add Description</h3>
                <textarea className="listdescription" placeholder="Briefly explain any other information about the item..." data-key="description" value={this.state.description} onChange={(event) => this.handleChange(event)}></textarea>
              </div>
              <div className="modMultiBtn">
                  <button type="button" className="add btn btn-primary modalSubmitBtn" data-step="6" onClick={this.createListing}>Create</button>
                  <button type="button" className="btn btn-primary step step-6 modalBack" data-step="6" onClick={(event) => this.backPage(event)}>Back</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

}
