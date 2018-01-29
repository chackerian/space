import { Meteor } from 'meteor/meteor';
import { Listing, Notification, Message, Offer, Feedback, Report, Saves } from '../db.js';

if (Meteor.isServer) {
  //
	Meteor.publish('listingShow', function() {
		return Listing.find({ status: "Pending" }, { limit: 100 });
		this.ready();
	});

	// Meteor.publish('notificationShow', function(id) {
	// 	if (this.userId) {
	// 		return Notification.find({
	// 			destination: this.userId
	// 		}, {
	// 			sort: {
	// 				createdAt: -1
	// 			}
	// 		})
	// 	}
	// 	this.ready();
	// });
  //
  //
	// Meteor.publish('offerShow', function() {
	// 	return Offer.find({}, { limit: 100 });
	// 	this.ready();
	// });
  //
	Meteor.publish('userShow', function() {
		return Meteor.users.find({}, { limit: 100 });
		this.ready();
	});

}
