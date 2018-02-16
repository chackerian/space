import { Offer, Listing } from '/imports/api/links/db.js';
import { Meteor } from 'meteor/meteor';
import React from 'react';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { withTracker } from 'meteor/react-meteor-data';

import { mount } from 'react-mounter';
import { render } from 'react-dom';

//////////////////////////////////////////////

import MainLayout from '../../ui/layouts/body/layouts.jsx';

import Home from '../../ui/pages/Home/home.jsx';
import ListingItem from '../../ui/pages/Listing/Listing.jsx';

import Profile from '../../ui/pages/Profile/profile.jsx';

// Help Center
import Help from '../../ui/pages/Help/help.jsx';
import FAQ from '../../ui/pages/Help/faq.jsx';
import Contact from '../../ui/pages/Help/contact.jsx';
import Safety from '../../ui/pages/Help/safety.jsx';
import Terms from '../../ui/pages/Help/terms.jsx';
import Prohibited from '../../ui/pages/Help/prohibited.jsx';

import SearchPage from '../../ui/pages/Search/search.jsx';

import Chat from '../../ui/pages/Chat/Chat.jsx';

//////////////////////////////////////////////

ListPageContainer = withTracker(({  }) => {
  const list = Listing.findOne();
  return {
    list
  };
})(ListingItem);

HomeContainer = withTracker(({ urlKey }) => {
  const list = Listing.find().fetch();
  return {
    list
  };
})(Home);

ProfileContainer = withTracker(({ urlKey }) => {
  const list = Meteor.users.find().fetch();
  return {
    list
  };
})(Profile);

///////////////////////////////////////////////

FlowRouter.route('/', {
  name: 'home',
  action() {
    mount(MainLayout, {
      content: <HomeContainer />
    })
  }
});

FlowRouter.route('/search', {
  name: 'search',
  action() {
    mount(MainLayout, {
      content: <SearchPage />
    })
    Session.set('search', FlowRouter.getQueryParam("q"))
  }
});

FlowRouter.route('/add', {
  name: 'add',
  action() {
    mount(MainLayout, {
      content: <Home />
    })
  }
});

var chat = FlowRouter.group({
  prefix: "/chat",
  name: "chat"
});

chat.route('/', {
  name: 'chats',
  action(params) {
    mount(MainLayout, {
      content: <Home />
    })
  }
})

chat.route('/:id', {
  name: 'chatter',
  action(params) {
    mount(MainLayout, {
      content: <Home />
    })
  }
})

var listing = FlowRouter.group({
  prefix: "/listing",
  name: "listing"
})

listing.route('/:id', {
  name: 'item',
  action(params) {
    var listing = Listing.find({urlKey: params.id}).fetch()
    mount(MainLayout, {
      content: <ListPageContainer />
    })
  }
 });

var profile = FlowRouter.group({
  prefix: "/profile",
  name: "profile"
});

profile.route('/:id', {
  name: 'profiles',
  action(params) {
    const id_user = params.id
    mount(MainLayout, {
      content: <ProfileContainer id={id_user} />
    })
  }
});

// UserProfileSettings
profile.route('/:id/settings', {
  name: 'settings',
  action(params) {
    mount(MainLayout, {
      content: <Home />
    })
  }
});

// ProfileActive
profile.route('/:id/active', {
  name: 'adsfd',
  action() {
    mount(MainLayout, {
      content: <Home />
    })
 }
});

profile.route('/:id/saved', {
  name: 'adfsd',
  action() {
    mount(MainLayout, {
      content: <Home />
    })
  }
});

profile.route('/:id/listings', {
  name: 'listingds',
  action() {
    mount(MainLayout, {
      content: <Home />
    })
  }
});

var help = FlowRouter.group({
  prefix: "/help",
  name: "help"
})

help.route('/', {
  action() {
    mount(MainLayout, {
      content: <Help />
    })
  }
});

help.route('/faq', {
  name: 'faq',
  action() {
    mount(MainLayout, {
      content: <FAQ />
    })
  }
});

help.route('/safety', {
  name: 'safety',
  action() {
    mount(MainLayout, {
      content: <Safety />
    })
  }
});

help.route('/prohibited', {
  name: 'prohibited',
  action() {
    mount(MainLayout, {
      content: <Prohibited />
    })
  }
});

help.route('/terms', {
  name: 'terms',
  action() {
    mount(MainLayout, {
      content: <Privacy />
    })
  }
});


help.route('/contact', {
  name: 'contact',
  action() {
    mount(MainLayout, {
      content: <Contact />
    })
  }
});
