import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class OfferModal extends Component {

  OfferRequest = (props) => {
    var options = {
      listingId: this._id,
      rater: Meteor.user().profile.name,
      rater_id: Meteor.userId(),
      friendly_rate: $(".friendlyRate").rateit('value'),
      efficiency_rate: $(".efficiencyRate").rateit('value'),
      negotiatiate_rate: $(".negotiateRate").rateit('value'),
      comment_title: $("#listtitle").val(),
      comment: $(".feedbackComment").val()
    }

    options.price = Number(this.offerprice);
    options.date = moment(this.date).format("dddd, MMM DD");

    // Ratings
    var sellUniq = $(".describedRate").rateit('value');
    var buyUniq = $(".paymentRate").rateit('value');

    _.isObject(sellUniq) ? options.payment_rate = buyUniq : options.described_rate = sellUniq
    this.creator_id == Meteor.userId() ? options.rated_id = this.offer_creator : options.rated_id = this.creator_id;
    var selfName = Meteor.user().profile.name;

    var other;
    selfName == this.username ? other = this.offer_creator_name : other = this.username;

    options.rated = other;

    if (validate.feedback()) {
      if (Meteor.user().profile.name == this.username) {
        // User is seller
        Meteor.call('sendFeedbackToBuyer', options)
      } else {
        Meteor.call('sendFeedbackToSeller', options)
      }
    }
  }

    updateTime() {
      var original = moment.unix(Session.get('activeSelected').meetup_time);
      var delayTime = original.diff(moment());
      var delayTimeMinutes = delayTime / 1000 / 60;
      var hours = Math.floor(delayTimeMinutes / 60);
      var minutes = Math.floor(delayTimeMinutes % 60);
      var timeString = hours + " hours and " + minutes + " minutes";
    }

    render() {
      return (
          <div className="modOfferRequestDialog modal-dialog">
            <div className="modOfferRequestContent modal-content">
              <div className="modOfferRequestDiv modal-body step step-1">
                <div className="modOfferRequestPageOne">
                  <ul className="modOfferRequestPageOneUl">
                    <li className="modOfferRequestOfferWrap">
                      <h2>How Much Would You Like To Offer?</h2>
                      <input type="text" className="listprice" id="mroffer" placeholder="Price..." maxLength="5" />
                    </li>
                    <li className="radioWrap paymentRadio">
                      <h2>How Would You Like To Pay?</h2>
                      <ul>
                        <li className="modOfferRequestPaymentPaypal">
                          <input type="radio" id="modOfferRequestPaymentPaypalRadio" name="OfferPayment" value="Paypal" className="radioWrapElement"/>
                          <label htmlFor="modOfferRequestPaymentPaypalRadio">Paypal</label>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="modMultiBtn modMultiBtnSingle modMultiBtnOfferRequest modMultiBtnOfferRequestDouble modMultiBtnOfferRequestOne">
                  <button type="button" className="btn btn-primary modalNext" data-step="1" onClick={(nextPage(event))}>Next</button>
                </div>
              </div>
              <div className="modOfferRequestDiv modal-body step step-2">
                <div className="modOfferRequestPageOne">
                  <ul className="modOfferRequestPageOneUl">
                    <li className="modOfferRequestOfferWrap">
                      <h2>When Would You Like To Meet?</h2>
                      <input type="text" id="datepicker" />
                    </li>
                    <li className="radioWrap timeRadio">
                      <h2>What Time Would You Like To Meet?</h2>
                      <ul>
                        <li>
                          <input type="radio" className="radioWrapElement" id="modOfferRequestTimeMorningRadio" name="offerTime" value="Morning"/>
                          <label htmlFor="modOfferRequestTimeMorningRadio">Morning</label>
                        </li>
                        <li>
                          <input type="radio" className="radioWrapElement" id="modOfferRequestTimeAfternoonRadio" name="offerTime" value="Afternoon"/>
                          <label htmlFor="modOfferRequestTimeAfternoonRadio">Afternoon</label>
                        </li>
                        <li>
                          <input type="radio" className="radioWrapElement" id="modOfferRequestTimeNightRadio" name="offerTime" value="Night"/>
                          <label htmlFor="modOfferRequestTimeNightRadio">Night</label>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="modMultiBtn modMultiBtnOfferRequest modMultiBtnOfferRequestDouble modMultiBtnOfferRequestTwo">
                  <button type="button" className="btn btn-primary modalBack" onClick={(event) => (backPage(event))}>Back</button>
                  <button type="button" className="btn btn-primary modalNext" onClick={(event) => (nextPage(event))}>Next</button>
                </div>
              </div>
              <div className="modOfferRequestDiv modal-body step step-3">
                <div className="modOfferRequestPageThree">
                  <h2>Where Would You Like To Meetup?</h2>
                </div>
                <div className="modMultiBtn modMultiBtnOfferRequest modMultiBtnOfferRequestThree">
                <button type="button" className="btn btn-primary step step-3 modalBack">Back</button>
                <button type="button" data-dismiss="modal" className="btn btn-primary modalSubmitBtn" id="offerRequestModalSubmit">
                  <input type="button" value="Send Offer" className="offerRequestBtn" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
