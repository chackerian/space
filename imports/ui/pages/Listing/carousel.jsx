import React, { Component } from 'react';
import { Listing } from '/imports/api/links/db.js';

export default class Carousel extends Component {

  componentDidMount() {
    $('.carousel').flickity({
      freeScroll: true,
      lazyLoad: true,
      wrapAround: true
    });
  }

  imageModal() {
  	<div className="modJoin">
  	    <div className="modImageDialog modal-dialog" role="document">
  	        <div className="modal-content">
  	        	<div className="modal-close">
  					<a className="close"><i className="material-icons">close</i></a>
  				</div>
  	        	<div className="modal-body">
  			        <img src="{img1}" />
  	        	</div>
  	        </div>
  	    </div>
  	</div>
  }

  render() {
    var listing = Listing.find({urlKey: FlowRouter.current().params.id}).fetch()[0];
    // var img = listing.images;
    // if (img == undefined) {
      img = ["https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ffreshkorean1.files.wordpress.com%2F2012%2F07%2Forange-ec98a4eba08ceca780-fresh-korean.jpg&f=1","https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ffreshkorean1.files.wordpress.com%2F2012%2F07%2Forange-ec98a4eba08ceca780-fresh-korean.jpg&f=1","https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ffreshkorean1.files.wordpress.com%2F2012%2F07%2Forange-ec98a4eba08ceca780-fresh-korean.jpg&f=1","https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ffreshkorean1.files.wordpress.com%2F2012%2F07%2Forange-ec98a4eba08ceca780-fresh-korean.jpg&f=1","https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ffreshkorean1.files.wordpress.com%2F2012%2F07%2Forange-ec98a4eba08ceca780-fresh-korean.jpg&f=1"]

    // }
    return (
      <div className="carousel carousel-main" data-flickity>
        <div className="carousel-cell"><span className="helper"></span><img className="carousel-cell-image" data-flickity-lazyload={img[0]} /></div>
        <div className="carousel-cell"><span className="helper"></span><img className="carousel-cell-image" data-flickity-lazyload={img[1]} /></div>
        <div className="carousel-cell"><span className="helper"></span><img className="carousel-cell-image" data-flickity-lazyload={img[2]} /></div>
        <div className="carousel-cell"><span className="helper"></span><img className="carousel-cell-image" data-flickity-lazyload={img[3]} /></div>
      </div>
    )
  }

}
