import React, { Component } from 'react';
// import tinify from 'tinify'

// tinify.key = "4P3Rx8J8Pl4coIGRwFO8RCnIaeGMRXAz";

keyPress = {
    nav: function(elem) {
        // Works for headerpre, headerpost, headersearch,
        $("." + elem).keypress(function(e) {
            var key = e.which;
            if (key == 13) {
                var search = $("." + elem).val();
                var options = {
                    search: search
                }
                // ListingSearch.search(search);
                Session.set("search", search)
                FlowRouter.go("/search?q="+search);
            }
        });
    },
    home: function(elem) {
    // Home Search Button
        $("." + elem).keypress(function(e) {
            var key = e.which;
            if (key == 13) {

                var search = $("." + elem).val();
                var options = {
                    search: search
                }

                Session.set("search", search)
                FlowRouter.go("/search?q="+search)
                ListingSearch.search(search);
            }
        });
    },
    // Restrict to int
    int: function(elem) {
        $("." + elem).keypress(function(key) {
            if (key.charCode < 48 || key.charCode > 57) return false;
        });
    },
    // Restrict to string
    string: function() {
        $("." + elem).keypress(function(key) {
            if (!key.charCode < 48 || !key.charCode > 57) return false;
        });
    }
}

refineCategories(event) {

  var categories = {
    'Apparel': ['Shirt', 'Hoodie', 'Sweater', 'Pants', 'Jacket', 'Socks', 'Hat', 'Backpack'],
    'Electronics': ['Phone', 'Tablet', 'Laptop', 'Game', 'Game Console'],
    'Shoes': ['Basketball', 'Boots', 'Running', 'Casual', 'Sandals', 'Training', 'Skateboarding'],
    'Other': ['Other']
  }

  var clickedValue = event.target.value;
  var checkedStatus = event.target.checked;
  var typesList = categories[clickedValue];

  _.each(typesList, function(type) {

    if (checkedStatus){
      $("." + type).remove();
    } else {
      var domString = "<li class=" + type + "><input type='checkbox' class='" + type + "' value='" + type + "'>" + type + "</li>"
      $(".typeChoose").after(domString);
    }

  });

}

formatTitle(name) {
  name.split(" ").map(x => {
    var str = "";
    for (var i = 1; i < x.length; i++) {
      str+=x[i].toLowerCase()
    }
    return x[0].toUpperCase() + str;
  })
}

deleteListing() {
  Meteor.call('removeListing', options);
  $("#listingDeleteModal").modal('toggle');

  FlowRouter.go("/");
}

cancelOffer() {
  Meteor.call('cancelOffer', options);
}

function validate() {
  var status = true;
  var keys = Object.keys(options);

  for (i = 0; i < keys.length; i++) {
    if (!options[keys[i]] || options[keys[i]] == "") {
      status = false;
      errorFields.push(keys[i]);
    }
  }

  if (!status) {
    sAlert.error("Review form");

    _.each(errorFields, function(f) {
      $("." + f).css("text-decoration", "underline");
    });
  }

  return status;
}

searchCard = () => (
    <li class="searchResultsCardLi">
        <ul class="searchResultsCardLeft">
            <li class="searchResultsCardImage">
                <a href={`/listing/${urlKey}`}>
                    <img src={img1} class="searchResultsCardImg" />
                </a>
            </li>
        </ul>
        <ul class="searchResultsCardRight">
            <li class="searchResultsCardTitle"><a href={`/listing/${urlKey}`}><h2 class="listingTitle">{listing_title}</h2></a></li>
            <li class="searchResultsCardName profile-link"><p><a href={`/profile/${creator_id}`}>{usernameTransform}</a></p></li>
            <li class="searchResultsCardPrice"><span class="money">${price}</span></li>
            <li class="searchResultsCardLocation"><span class="SearchArea"><b>Location:</b></span> {city}, <b>{state}</b></li>
        </ul>
    </li>
)

search = () => (
    <div class="largeSearch">
        <input type="text" id="search" class="search searchpage" value={search} placeholder="Name, Category" />
        <a href="/search" class="btn">Search</a>
    </div>

    <div class="searchResultsDiv oneDiv">
        <ul class="searchResultsOptions">
            <li class="searchResultsCount">{getListings.length} results for {search}</li>
            <select class="searchReduce">
                <option value="low-high" selected="true">Sort: Best Match<i class="fa fa-caret-down"></i></option>
                <option value="low-high">Price: Low - High</option>
                <option value="high-low">Price: High - Low</option>
                <option value="closest">Distance: Closest</option>
                <option value="furthest">Distance: Furthest</option>
                <option value="newlylisted">Newly Listed</option>
            </select>
        </ul>
        <div class="search-wrapper">
        <div class="searchResultsRefine">
            <p class="searchRefineTitle">Refine Search</p>
            <ul class="searchRefineCategories">
                <p class="searchRefineHeadings">Categories</p>
                <li><input class="apparelCheck" type="checkbox" mouseUp={this.refineCategories} value="Apparel" />Apparel</li>
                <li><input class="electronicsCheck" type="checkbox" mouseUp={this.refineCategories} value="Electronics" />Electronics</li>
                <li><input class="shoesCheck" type="checkbox" mouseUp={this.refineCategories} value="Shoes" />Shoes</li>
                <li><input class="otherCheck" type="checkbox" mouseUp={this.refineCategories} value="Other" />Other</li>
            </ul>

        </div>
        <div class="searchResultsCards">
            <ul class="searchResultsCardUl">
                {> searchcard}
            </ul>
        </div>
        </div>

    </div>
)

$(".search").focus();
keyPress.home("search");

// Build from all listings

// var tags = ["Air Jordan", "Aeropostale", "Nike", "Air Force One", "nike"];
// $("#search").autocomplete({
// 	delay: 200,
// 	source: tags
// });


if ( Meteor.isClient) {
	Template.searchpage.helpers({
		getListings: function() {
			var query = ListingSearch.getData({
				sort: {
					isoScore: -1
				}
			});

			return query
		},
		search: function() {
			return Session.get("search");
		},
		urlsearch: function(){
			return Session.get('query').q;
		}
	});
}
