import React, { Component } from 'react';
import HelpNav from './nav.jsx';

export default class AboutHelp extends Component {

  render() {
    return(
      <div className="faqdiv oneDiv">
        <HelpNav />
        <h2>How Does It Work?</h2>
        Create a listing, wait for messages from other users, organize a meetup.

      </div>
    )
  }
}
