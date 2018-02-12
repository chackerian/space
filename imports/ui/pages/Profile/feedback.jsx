
    <div class="modFeedbackInitialDialog modal-dialog">
        <div class="modFeedbackInitialContent modal-content">

            Did the meetup happen

            <div class="modFeedbackInitialDiv modFeedbackDivInitialTwo modal-body step step-2">
                <div class="modFeedbackInitialPageTwo">
                    <h2>Are You Sure You Want To Continue?</h2>
                    <ul>
                        <li>Only go through with this if the meetup did not happen</li>
                        <li>Ex. The person flaked, You couldn't find each other, etc.</li>
                        <li>There was no meetup</li>
                        <li>Only go through with this if the meetup was unsuccessful</li>
                        <li>Ex. You met up but a sale was not made, you were robbed/assulted, etc.</li>
                        <li>Things didn't go the way they were supposed to</li>
                    </ul>
                </div>
            </div>

          <div class="modFeedbackInitialDiv modFeedbackDivInitialSix modal-body step step-6">
            <div class="modFeedbackInitialPageSix">
                <h2>Are You Sure You Want To Continue?</h2>
                <ul>
                    <li>Only go through with this if the meetup was unsuccessful</li>
                    <li>Ex. You met up but a sale was not made, you were robbed/assulted, etc.</li>
                    <li>Things didn't go the way they were supposed to</li>
                    <li>WARNING: Lying on feedback can lead to a ban</li>
                    <li>Only go through with this if the meetup was unsuccessful</li>
                    <li>Ex. You met up but a sale was not made, you were robbed/assulted, etc.</li>
                </ul>
            </div>
            <div class="modMultiBtn modMultiBtnDouble modMultiBtnOfferRequest modMultiBtnFeedbackInitialSix">
                <button type="button" class="btn btn-primary step step-6 modalBack">Back</button>
                <button type="button" class="btn btn-primary step step-6 modalNext">Continue</button>
            </div>
        </div>
        <div class="modFeedbackInitialDiv modFeedbackDivInitialSeven modal-body step step-7">
            <div class="modFeedbackInitialPageSeven">
                <h2>Aren't Flakers The Worst!</h2>
                <p>We've All Been There :(</p>
                <p>Luckily There Are Many Things You Can Do On SpaceTrades</p>
                <p>You Can Report Yusuf Bagha</p>
                <p>You Can Give Feedback</p>
                <p>Bad Behavior Is Not Tolerated</p>
                <ul class="modFeedbackInitialPageSevenUl">
                    <li><button class="btn btn-primary step step-7" data-step="7" data-dismiss="modal" data-toggle="modal" data-target="#feedbackBuyerNeverModal">Continue Feedback</button></li>
                </ul>
            </div>
        </div>
        <div class="modFeedbackDiv modal-body step step-8">
            <div class="">
                <ul>
                    <li>
                        <h4>User Friendliness</h4>
                        <div class="rateit friendlyRate"></div>
                    </li>
                    <li>
                        <h4>Meetup Efficiency</h4>
                        <div class="rateit efficiencyRate"></div>
                        <br>
                        <h4>Price Negotiation</h4>
                        <div class="rateit negotiateRate"></div>
                        <br>
                        {{#if isBuyer}}
                        <h4>Item As Described</h4>
                        <div class="rateit describedRate"></div>
                        {{else}}
                        <h4>Payment Satisfaction</h4>
                        <div class="rateit paymentRate"></div>
                        {{/if}}
                        <br>
                    </li>
                    <li><button type="button" class="btn btn-primary step step-8 modalNext notNext">Continue</button></li>
                </ul>
            </div>
        </div>
        <div class="modFeedbackDiv modFeedbackDiv modal-body step step-9">
            <div class="modFeedback">
             <!--    <div class="modFeedbackPageTwo1 radioWrap">
                    <h2>Overall Experience</h2>
                    <ul>
                        <li>
                            <input type="radio" id="feedbackPositive" class="radioWrapElement" name="feedbackOverall" value="Positive" checked/>
                            <label for="feedbackPositive">Positive</label>
                        </li>
                        <li>
                            <input type="radio" id="feedbackNeutral" class="radioWrapElement"  name="feedbackOverall" value="Neutral" />
                            <label for="feedbackNeutral">Neutral</label>
                        </li>
                        <li>
                            <input type="radio" id="feedbackNegative" class="radioWrapElement"  name="feedbackOverall" value="Negative"/>
                            <label for="feedbackNegative">Negative</label>
                        </li>
                    </ul>
                </div> -->
                <div class="modFeedbackPageTwo2">
                    <h2>Leave a comment</h2>
                    <input type="text" class="modAddListingTitleInput listtitle" placeholder="Comment Title" maxlength="50">
                    <ul>
                        <li><textarea class="feedbackComment" type="text" placeholder="Write a description about your experience!" max-length="80"></textarea></li>
                    </ul>
                </div>
            </div>
            <div class="modMultiBtn modMultiBtnDouble modMultiBtnFeedback modMultiBtnFeedbackDouble modMultiBtnFeedbackTwo">
                <button type="button" class="btn btn-primary step step-9 modalBack">Back</button>
                <button type="button" class="btn btn-primary step step-9 modalSubmitBtn"><input type="submit" class="sendFeedback" value="Send Feedback"></button>
            </div>
        </div>
    </div>
</div>

<li class="profileCardLi">
    <p>{{status}}</p>
    <ul class="profileCardImage">
        <a href="/listing/{{item_id}}"><img src="{{img1}}" class="profileCardImg"></a>
    </ul>
    <ul class="profileCardInfo">
        <li><a href="/listing/{{_id}}"><h4>{{listing_title}}</h4></a></li>
        <li class="money profileCardItem">${{price}}</li>
        <li class="managerOfferView managerOfferUnsave"><a href="#" class="ph-button ph-btn-blue">Unsave</a></li>
    </ul>
</li>

<ul class="profileUserFeedbackViewCriteria">
    <li>
        <ul class="profileUserFeedbackViewCriteriaOne">
            <li class="profileUserFeedbackViewQuestion">Overall Rating</li>
            <li class="profileUserFeedbackViewStars">
               <div class="rateit" data-rateit-value="{{buy_totalrating}}" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
           </li>
       </ul>
   </li>
   <li>
    <ul class="profileUserFeedbackViewCriteriaTwo">
      <li class="profileUserFeedbackViewQuestion">Price Negotiation</li>
      <li class="profileUserFeedbackViewStars">
       <div class="rateit" data-rateit-value="{{buy_negotiationrating}}" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
     </li>
    </ul>
  </li>
  <li>
    <ul class="profileUserFeedbackViewCriteriaTwo">
      <li class="profileUserFeedbackViewQuestion">Payment Satisfaction</li>
      <li class="profileUserFeedbackViewStars">
         <div class="rateit" data-rateit-value="{{paymentrating}}" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
      </li>
    </ul>
  </li>
</ul>

<ul class="profileUserFeedbackViewCriteria">
    <li>
        <ul class="profileUserFeedbackViewCriteriaOne">
            <li class="profileUserFeedbackViewQuestion">Overall Rating</li>
            <li class="profileUserFeedbackViewStars">
                <div class="rateit" data-rateit-value="{{sell_totalrating}}" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
            </li>
        </ul>
    </li>
    <li>
        <ul class="profileUserFeedbackViewCriteriaTwo">
            <li class="profileUserFeedbackViewQuestion">Item As Described</li>
            <li class="profileUserFeedbackViewStars">
               <div class="rateit" data-rateit-value="{{sell_describedrating}}" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
           </li>
       </ul>
   </li>
</ul>

<div class="devsite-rating-stars">
    <div class="devsite-rating-star material-icons" data-rating-val="1"
    data-label="Rating 1">
        <a id="starry"></a>
    </div>

    <div class="devsite-rating-star material-icons" data-rating-val="2" data-label="Rating 2">
        <a id="starry"></a>
    </div>

    <div class="devsite-rating-star material-icons" data-rating-val="3" data-label="Rating 3">
        <a id="starry"></a>
    </div>

    <div class="devsite-rating-star material-icons devsite-rating-star-outline" data-rating-val="4" data-label="Rating 4">
        <a id="starry"></a>
    </div>

    <div class="devsite-rating-star material-icons devsite-rating-star-outline" data-rating-val="5" data-label="Rating 5">
        <a id="starry"></a>
    </div>
</div>

<li class="profileCardLi">
    <p>{{status}}</p>
    <ul class="profileCardImage">
        <a href="/listing/{{item_id}}"><img src="{{img1}}" class="profileCardImg"></a>
    </ul>
    <ul class="profileCardInfo">
        <li><a href="/listing/{{_id}}"><h4>{{listing_title}}</h4></a></li>
        <li class="money profileCardItem">${{price}}</li>
        <li class="managerOfferView managerOfferUnsave"><a href="#" class="ph-button ph-btn-blue">Unsave</a></li>
    </ul>
</li>

<div class="helpcenternav">
    <nav class="helpnav">
        <ul class="helpiteml">
            <li><a href="/profile/{{profile}}" class="helpitem">Profile</a></li>
            <li><a href="/profile/{{profile}}/active" class="helpitem">Active Meetups</a></li>
            <li><a href="/profile/{{profile}}/offers" class="helpitem">Pending Offers</a></li>
            <li><a href="/profile/{{profile}}/listings" class="helpitem">Your Listings</a></li>
            <li><a href="/profile/{{profile}}/history" class="helpitem">History</a></li>
            <li><a href="/profile/{{profile}}/saved" class="helpitem">Saved Products</a></li>
            <li><a href="/profile/{{profile}}/settings" class="helpitem">Settings</a></li>
        </ul>
    </nav>
</div>
<li class="profileCardLi">
      <p class="managerOfferStatus">{{status}} <!-- Pending, Confirmed and Declined--></p>
      <ul class="profileCardImage">
          <a href="/listing/{{listingId}}"><img src="{{img}}" class="profileCardImg"></a>
      </ul>
      <ul class="profileCardInfo">
          <li><a href="/listing/{{listingId}}"><h4>{{listing_title}}</h4></a></li>
          <li class="money profileCardItem">${{offerprice}}</li>
          <li class="profileCardItem">{{dateFormatted}}</li>
          <li class="profileCardItem">{{location}}</li>
          <li class="managerOfferView">
              <button type="button" class="modSentOfferTrigger btn btn-primary" data-toggle="modal" data-target="#sentOfferModal">
                View Offer
              </button>
          </li>
      </ul>
  </li>

<li class="profileCardLi">
    <p><b>Met On {{date}}</b>You met with <a href="/profile/{{idOther}}" class="profileCardBoughtSold">{{nameOther}}</a></p>
    <ul class="profileCardImage">
        <a href="/listing/{{_id}}"><img src="{{img1}}" class="profileCardImg"></a>
    </ul>
    <ul class="profileCardInfo">
        <li><a href="/listing/{{_id}}"><h4>{{listing_title}}</h4></a></li>
        <li class="money profileCardItem">${{price}}</li>
        <li class="profileCardItem">Condition: {{condition}}</li>
        <li class="profileCardItem">Size: {{size}}</li>
        <li class="profileCardView" id="profileHistoryView">
        <button type="button" class="modSentOfferTrigger btn btn-primary" data-toggle="modal" data-target="#historyDetailsModal">
                View Meetup
              </button>
          </li>
    </ul>
</li>

<li class="profileCardLi">
    <p>Meetup With <a href="/profile/{{idOther}}" class="profileCardBoughtSold">{{nameOther}}</a></p>
    <ul class="profileCardImage">
        <a href="/listing/{{_id}}"><img src="{{img1}}" class="profileCardImg"></a>
    </ul>
    <ul class="profileCardInfo">
        <li><a href="/listing/{{_id}}"><h4>{{listing_title}}</h4></a></li>
        <li class="money profileCardItem">${{offerprice}}</li>
        <li class="profileCardItem">{{dateFormatted}}</li>
        <li class="profileCardItem">{{location}}</li>
        <li class="managerOfferView"><a href="#" class="modSentOfferTrigger btn btn-primary" data-toggle="modal" data-target="#ModalProfileActive">Meetup Details</a></li>
    </ul>
</li>

<div class="profileReceivedOffers oneDiv">
    <ul class="profileReceivedUl">
        <li class="profileReceivedLi profileViewMeetupLi">
            <ul class="profileReceivedCardLeft">
                <li class="profileReceivedImage">
                    <a href="/listing/{{listingId}}"><img src="{{img1}}" class="profileReceivedImg"></a>
                </li>
            </ul>
            <ul class="profileReceivedCardRight profileViewMeetupRight">
                <li><a href="/listing/{{_id}}"><h3>{{listing_title}}</h3></a></li>
                <li class="profileReceivedPrice">Final Price: <span class="money">${{price}}</span></li>
                <li class="profileReceivedDate">Date: {{date}}</li>
                <li class="profileReceivedLocation">Location: {{location}}</li>
            </ul>
            <div id="profileReceivedOffersMaps">
                {{> googleMap name="ticketmap" options=activeTicketOptions}}
            </div>
        </li>
    </ul>
</div>
