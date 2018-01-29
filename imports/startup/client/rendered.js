import { ReactiveVar } from 'meteor/reactive-var'

if (Meteor.isClient) {

  function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log(lat, lng)
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  Slingshot.fileRestrictions("myFileUploads", {
      allowedFileTypes: ["image/png", "image/jpeg", "image/gif", "image/jpg"],
      maxSize: 10 * 1024 * 1024 // 10 MB
  });

  var options = {
    keepHistory: 1000 * 60 * 5,
    localSearch: true
  };

  var fields = ['listing_title', 'description'];

  ListingSearch = new SearchSource('listing', fields, options);

}
