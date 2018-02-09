import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

if (Meteor.isClient) {

	Meteor.startup(function() {

     /*
      * @summary Initial locator
      * @locus Client
      *
      */
      const locate = function() {

      	function ipLocate(whenDone) {
      		var api = "http://ipinfo.io?callback=?";
      		$.getJSON(api, {
      			format: "jsonp"
      		})
      		.done(function(response) {
      			var result = ""

      			for (var prop in response) {
      				result += prop + ": " + response[prop] + "<br>";
      			}

      			var selectedResponse = {
      				city: response.city,
      				region: response.region,
      				country: response.country,
      				ip: response.ip,
      				latLng: response.loc
      			}

      			whenDone(selectedResponse);

      			return selectedResponse
      		});
      	}

      	function ipDone(selectedResponse) {
      		response = selectedResponse;
      	}

      	ipLocate(ipDone);
      }

	});
}
