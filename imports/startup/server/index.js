import './fixtures.js';
import './register-api.js';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { Listing, Notification, Message, Offer, Feedback, Report, Saves } from '/imports/api/links/db.js';

if (Meteor.isServer) {

	ServiceConfiguration.configurations.upsert(
		{ service: 'facebook' },
		{
			$set: {
				loginStyle: "popup",
				appId: "403772073107923",
				secret: "4663665d518fef59dbf6643280281a85"
			}
		}
	);

}
