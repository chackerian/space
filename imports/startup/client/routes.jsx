import { Listing } from '/imports/api/links/db.js';
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
import Settings from '../../ui/pages/Profile/settings.jsx';

import Help from '../../ui/pages/Help/help.jsx';
import FAQ from '../../ui/pages/Help/faq.jsx';
import Contact from '../../ui/pages/Help/contact.jsx';
import Safety from '../../ui/pages/Help/safety.jsx';
import AboutTerms from '../../ui/pages/Help/terms.jsx';
import Prohibited from '../../ui/pages/Help/prohibited.jsx';

import SearchPage from '../../ui/pages/Search/searchpage.jsx';
import Chat from '../../ui/pages/Chat/chat.jsx';

//////////////////////////////////////////////

HomeContainer = withTracker(({ urlKey }) => {
  const list = Listing.find().fetch();
  console.log("new size")
  return {
    list
  };
})(Home);

ProfileContainer = withTracker(({ urlKey }) => {
  const prof = Meteor.users.find().fetch()
  return {
    prof
  };
})(Profile);

ListingContainer = withTracker(({ urlKey }) => {
  const lister = Listing.find().fetch()
  return {
    lister
  };
})(ListingItem);

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
    mount(MainLayout, {
      content: <ListingContainer />
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
    mount(MainLayout, {
      content: <ProfileContainer />
    })
  }
});

// UserProfileSettings
profile.route('/:id/settings', {
  name: 'settings',
  action(params) {
    mount(MainLayout, {
      content: <Settings />
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
      content: <AboutTerms />
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
