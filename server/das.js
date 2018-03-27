import { Listing, Notification, Message, Feedback, Report, Saves } from '/imports/api/links/db.js';

if (Meteor.isServer) {

  SearchSource.defineSource('listing', function(searchText, options) {
   var options = {sort: {isoScore: -1}, limit: 20};

   if(searchText) {

     var search = searchText.trim().split(/[ \-\:]+/).map(word => {
       return "(?=.*" + word + ")";
     }).join('') + ".+";

     var regExp = new RegExp(search, "i");

     var selector = {listing_title: regExp};

     return Listing.find(selector, options).fetch();

   } else {
    return Listing.find({}, options).fetch();
  }

});

  Slingshot.fileRestrictions("myFileUploads", {
        allowedFileTypes: ["image/png", "image/jpeg", "image/gif", "image/jpg"],
        maxSize: 10 * 1024 * 1024 // 10 MB
  });

    try {
      Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
        bucket: "spacetrades",
        region: "us-west-2",
        acl: "public-read",
        authorize: function () {
            // Deny uploads if user is not logged in.
            if (!this.userId) {
              var message = "Please login before posting files";
              throw new Meteor.Error("Login Required", message);
            }
            return true;
        },
        key: function (file) {
            return this.userId + "/" + file.name;
        }
      });

    }
    catch(e) {
      console.log(e);
    }

}
