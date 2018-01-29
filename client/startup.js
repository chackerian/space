import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

if (Meteor.isClient) {

	Meteor.startup(function() {

      // GoogleMaps.load({
      //    v: '3',
      //    key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
      //    libraries: 'geometry,places'
      //  });

      // sAlert
      sAlert.config({
         effect: 'slide',
         beep: true
      });

     /*
      * @summary Save Location
      * @locus Client
      *
      */
      const setLocate = function() {
      	var userId = Meteor.userId();
      	var response = Session.get("response");
      	var locator = Session.get("locator");

      	var options = {
      		userId: userId,
      		response: response,
      		locator: locator
      	}

      	Meteor.setTimeout(function() {
      		Meteor.call('saveLocation', options);
      	}, 2000);
      }

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
