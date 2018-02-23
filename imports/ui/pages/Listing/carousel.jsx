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

  render() {
    var listing = Listing.find({urlKey: FlowRouter.current().params.id}).fetch()[0];
    var img = listing.images;
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
