import { Meteor } from 'meteor/meteor';
import { Listing, Notification, Message, Feedback, Report, Saves } from './db.js';

Meteor.methods({
   sendEmail: function(to, from, subject, text) {
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  },
 updateUserCreation: function(options) {
   Meteor.users.update({
     _id: options.id
   }, {
     $set: {
       'profile.reviews_count': 0,
       'profile.amount_bought': 0,
       'profile.amount_sold': 0,
       'profile.meetups_count': 0,
       'profile.location': options.location,
       'profile.picturelrg': "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large",
       'profile.picturesm': "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=small"
     }
   })
 },
 addListing: function(options) {
  if (!Meteor.userId()) {
    throw new Meteor.Error("Not Authorized");
  }

  Listing.insert({
      // User Information
      creator_id: options.creator_id,
      creator_image: options.creator_image,
      creator_facebook_id: options.creator_facebook_id,
      creator_username: Meteor.user().profile.name,
      listing_title: options.listing_title,
      urlKey: options.urlKey,
      // Category
      category: options.category,
      type: options.type,
      brandReal: options.brand,
      // Payment
      price: options.price,
      payment: options.payment,
      trade: options.trade,
      size: options.size,
      // Information
      condition: options.condition,
      description: options.description,
      // Location
      lat: options.lat,
      lng: options.lng,
      city: options.city,
      state: options.state,
      locationString: options.locationString,
      // Images
      images: options.images,
      // Status
      createdAt: new Date(),
      status: "Pending",
      offers_received: options.offers_received,
      offerAccepted: false
    });
},
  /*
   * @summary Send Email
   * @locus Server
   *
   */
   sendFeedback: function(options) {
    Feedback.insert({
      listing_id: options.listingId,
      date: options.date,
      rater: options.rater,
      rater_id: options.rater_Id,
      rated: options.rated,
      friendly_rate: options.friendly_rate,
      efficiency_rate: options.efficiency_rate,
      negotiatiate_rate: options.negotiatiate_rate,
      comment_title: options.comment_title,
      comment: options.comment,
      // Diff
      payment_rate: options.payment_rate
    })
    // mark feedback seller flag

    Meteor.users.update({
      _id: options.rated_id
    }, {
      $inc: {
        'profile.reviewscount': 1,
        'profile.amountbought': 1
      },
      $set: {
        'profile.feedback_filed_seller': "Completed"
      },
      $push: {
        'profile.sell_friendlyratingArray': options.friendly_rate,
        'profile.sell_efficiencyratingArray': options.efficiency_rate,
        'profile.sell_negotiationratingArray': options.negotiatiate_rate,
        'profile.sell_describedratingArray': options.payment_rate,
      }
    });

    Meteor.users.update({
      _id: options.rated_id
    }, {
      $set: {
        'profile.sell_friendlyrating': sumFriendly,
        'profile.sell_efficiencyrating': sumEfficiency,
        'profile.sell_negotiationrating': sumNegotiate,
        'profile.sell_describedrating': sumDescribed,
        // Totals
        'profile.sell_totalrating': sumSeller,
        'profile.totalrating': sumSeller
      }
    })

  },
  /*
   * @summary Transfer Listing to history
   * @locus Server
   */
   cacheListing: function(options) {
    Listing.update({
      _id: options.listingId
    }, {
      $set: {
        status: "Completed",
        feedback_filed_seller: "Pending",
        feedback_filed_buyer: "Pending"
      }
    });

  },

  /*
   * @summary Remove a listing
   * @locus Server
   */
   removeListing: function(options) {
    if (Meteor.userId() == options.creator_id) {
      Listing.remove({
        _id: options.id
      });
    } else {
      throw new Meteor.Error("Not Authorized");
    }

  },
  /*
   * @summary Save A Listing
   * @locus Server
   */
   saveListing: function(optionsA) {
    Saves.insert({
      user: this.userId,
      listing_title: optionsA.listing_title,
      item_id: optionsA._id,
      price: optionsA.price,
      status: optionsA.status,
      city: optionsA.city,
      state: optionsA.state,
      img1: optionsA.img1,
      username: optionsA.username
    })
  },
  /*
   * @summary Unsave A Listing
   * @locus Server
   */
   unsaveListing: function(optionsA) {
    Saves.remove({
      _id: optionsA._id
    })
  },
  /*
   * @summary Edit listing
   * @locus Server
   */
   updateListing: function(options) {
    Listing.update({
      _id: options.id
    }, {
      $set: {
        listing_title: options.listing_title,
        brand: options.brand,
        quantity: options.quantity,
        price: options.price,
        payment: options.payment,
        trade: options.trade,
        size: options.size,
        condition: options.condition,
        description: options.description
      }
    });
  },
  // For: Report, Add offer, Accept Offer, Badge, new Follower, TB system
  // Destination is set in options previously
  /*
   * @summary Send Notification
   * @locus Server
   */
   pulseNotify: function(options) {
    Notification.insert({
      createdAt: new Date(),
      action: options.action,
      notifyType: options.notifyType,
      listing_title: options.listing_title,
      offer_price: options.offerprice,
      creator_id: options.creator_id,
      creator_name: options.creator_name,
      listingId: options.listingId,
      destination: options.destination,
      link: options.link,
      listing_creator_id: options.listing_creator_id
    });
  },
  /*
   * @summary Send feedback notification and Transfer
   * @locus Server
   */
  deleteAccount: function(option) {
    Meteor.users.remove({
      _id: option
    });
  },
  /*
   * @summary Add a report (Listing and User)
   * @locus Server
   */
   addReport: function(options) {
    Report.insert({
      targetUser: options.targetUser,
      riskLevel: options.riskLevel,
      reasonBox: {
        prohibited_box: options.reasonBox.prohibited_box,
        offensive_box: options.reasonBox.offensive_box,
        irrelevant_box: options.reasonBox.irrelevant_box,
        false_box: options.reasonBox.false_box,
        compliance_box: options.reasonBox.compliance_box
      },
      description: options.description
    });
  },
  // TASK - Assign a conversation id that is unique to A-B B-A correspondence
  /*
   * @summary Send a User
   * @locus Server
   */
   sendMessage: function(options) {
    Message.insert({
      message: options.message,
      sender: options.sender,
      receiver: options.receiver,
      conversation: options.conversation,
      timestamp: options.timestamp,
      createdAt: options.createdAt
    });
  }

});
