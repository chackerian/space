import './register-api.js';
import { ServiceConfiguration } from 'meteor/service-configuration';
import { Listing, Notification, Message, Feedback, Report, Saves } from '/imports/api/links/db.js';

if (Meteor.isServer) {

	ServiceConfiguration.configurations.upsert(
		{ service: 'facebook' },
		{
			$set: {
				loginStyle: "popup",
				appId: "1927827950722684",
				secret: "dbbb1dc68ca40f7dac91d412845b1fa3"
			}
		}
	);

}
