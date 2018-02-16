// import React, { Component } from 'react';
//
// keyPress = {
//     nav: function(elem) {
//         // Works for headerpre, headerpost, headersearch,
//         $("." + elem).keypress(function(e) {
//             var key = e.which;
//             if (key == 13) {
//                 var search = $("." + elem).val();
//                 var options = {
//                     search: search
//                 }
//                 // ListingSearch.search(search);
//                 Session.set("search", search)
//                 FlowRouter.go("/search?q="+search);
//             }
//         });
//     },
//     home: function(elem) {
//     // Home Search Button
//         $("." + elem).keypress(function(e) {
//             var key = e.which;
//             if (key == 13) {
//
//                 var search = $("." + elem).val();
//                 var options = {
//                     search: search
//                 }
//
//                 Session.set("search", search)
//                 FlowRouter.go("/search?q="+search)
//                 ListingSearch.search(search);
//             }
//         });
//     },
//     // Restrict to int
//     int: function(elem) {
//         $("." + elem).keypress(function(key) {
//             if (key.charCode < 48 || key.charCode > 57) return false;
//         });
//     },
//     // Restrict to string
//     string: function() {
//         $("." + elem).keypress(function(key) {
//             if (!key.charCode < 48 || !key.charCode > 57) return false;
//         });
//     }
// }
//
// formatTitle(name) {
//   name.split(" ").map(x => {
//     var str = "";
//     for (var i = 1; i < x.length; i++) {
//       str+=x[i].toLowerCase()
//     }
//     return x[0].toUpperCase() + str;
//   })
// }
//
// deleteListing() {
//   Meteor.call('removeListing', options);
//   $("#listingDeleteModal").modal('toggle');
//
//   FlowRouter.go("/");
// }
//
// cancelOffer() {
//   Meteor.call('cancelOffer', options);
// }
//
// function validate() {
//   var status = true;
//   var keys = Object.keys(options);
//
//   for (i = 0; i < keys.length; i++) {
//     if (!options[keys[i]] || options[keys[i]] == "") {
//       status = false;
//       errorFields.push(keys[i]);
//     }
//   }
//
//   if (!status) {
//     sAlert.error("Review form");
//
//     _.each(errorFields, function(f) {
//       $("." + f).css("text-decoration", "underline");
//     });
//   }
//
//   return status;
// }
//
