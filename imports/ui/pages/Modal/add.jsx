import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactFilestack, { client } from 'filestack-react';
import { connect } from 'react-redux';
// import { s3 } from 's3';
// var s4 = new aws.S3();

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
      brand: brands[catvalue]
    })

  }

  selectTypeChange(event) {
    this.setState({
      type: event.target.value
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
  }

  createListing = (props) => {
    var titled = this.state.listing_title.charAt(0).toUpperCase() + this.state.listing_title.slice(1)
    var options = {
      creator_id: Meteor.userId(),
      creator_facebook_id: Meteor.user().services.facebook.id,
      creator_image: Meteor.user().profile.picturelrg,
      creator_username: Meteor.user().profile.name,
      listing_title: this.state.listing_title,
      urlKey: this.state.listing_title.replace(/ /g, '-'),
      images: Session.get('images'),
      category: this.state.category,
      type: this.state.type,
      price: this.state.price,
      trade: this.state.trade,
      condition: this.state.condition,
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
    this.props.close()
  }

  render() {
    if(this.state.modaltab == 1) {
      return(
          <div className="modAddListingDialog modal-dialog">
            <div className="modAddListingContent modal-content">
              <div className="modAddListingDiv modal-body step-1">
                <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
                <div className="modAddListingPage">
                  <ul className="modAddListingPageOneUl modOfferRequestPageOneUl">
                    <li className="modOfferRequestOfferWrap">
                      <h3 className="listing_title">What Are You Selling?</h3>
                      <input type="text" className="listtitle" placeholder="Listing Title" maxLength="30" data-key="listing_title" value={this.state.listing_title} onChange={(event) => this.handleChange(event)} />
                    </li>
                    <li className="modOfferRequestOfferWrap">
                      <h3 className="price">At What Price?</h3>
                      <input type="text" className="listprice" placeholder="Price" maxLength="5" data-key="price" value={this.state.price} onChange={(event) => this.handleChange(event)} />
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
              <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
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
              <div className="modMultiBtn">
                  <button type="button" className="btn btn-primary modalNext" data-step="2" onClick={(event) => this.nextPage(event)}>Next</button>
                  <button type="button" className="btn btn-primary modalBack" data-step="2" onClick={(event) => this.backPage(event)}>Back</button>
              </div>
            </div>
          </div>
        </div>
        )
      }

    if(this.state.modaltab == 3) {
      return(
        <div className="modAddListingDialog modal-dialog">
          <div className="modAddListingContent modal-content">
            <div className="modAddListingDiv modal-body step step-3">
              <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
              <div className="modAddListingPage">
              <h3>Provide Details</h3>
              <ul className="modAddListingPageFourUl">
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

    return(
      <div className="modAddListingDialog modal-dialog">
        <div className="modAddListingContent modal-content">
          <div className="modAddListingDiv modal-body step step-4">
            <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
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
            <div className="modal-close">
              <a className="close" onClick={this.props.close}><i className="material-icons">close</i></a>
            </div>
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
                            <input type="radio" id="cashRadio" name="addListingPayment" value="Cash" className="radioWrapElement" defaultChecked/>
                            <label htmlFor="cashRadio">Cash</label>
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
              <div className="modal-close"><a className="close" onClick={this.props.close}><i className="material-icons">close</i></a></div>
              <div className="modAddListingPage">
                <h3 className="description">Add Description</h3>
                <textarea className="listdescription" placeholder="Briefly explain any other information about the item" data-key="description" value={this.state.description} onChange={(event) => this.handleChange(event)}></textarea>
              </div>
              <div className="modMultiBtn">
                  <button type="button" className="add btn btn-primary modalSubmitBtn" onClick={this.createListing}>Create</button>
                  <button type="button" className="btn btn-primary step step-6 modalBack" onClick={(event) => this.backPage(event)}>Back</button>
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
      close: () => dispatch({type: 'CLOSE'})
  };
};

export default connect(null, mapDispatchToProps)(AddModal)
