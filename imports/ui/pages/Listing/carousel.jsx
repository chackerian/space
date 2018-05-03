import React, { Component } from 'react';
import { Listing } from '/imports/api/links/db.js';

export default class Carousel extends Component {

  componentDidMount() {
    $('.carousel').flickity({
      freeScroll: true,
      lazyLoad: true,
      wrapAround: true
    });
    var left = (475-$(".carousel-cell-image").width())/2
    $(".carousel-cell-image").css('left', left)

    // var height = (350 - $(".carousel-cell-image").height()) / 2
    // var pixheight = Math.abs(height)+"px";
    // $(".carousel-cell-image").css('top', pixheight)
  }

  render() {
    var listing = Listing.find({urlKey: FlowRouter.current().params.id}).fetch()[0];
    // var img = listing.images;
    // if (img == undefined) {
      img = ["https://img.letgo.com/images/c6/55/e4/5a/c655e45a8fb23585e392f1273d7d5511.jpeg?impolicy=img_900"]

    // }
    return (
      <div className="carousel carousel-main" data-flickity>
        <div className="carousel-cell"><img className="carousel-cell-image" data-flickity-lazyload={img[0]} /></div>
        <div className="carousel-cell"><img className="carousel-cell-image" data-flickity-lazyload={img[0]} /></div>
        <div className="carousel-cell"><img className="carousel-cell-image" data-flickity-lazyload={img[0]} /></div>
        <div className="carousel-cell"><img className="carousel-cell-image" data-flickity-lazyload={img[0]} /></div>
      </div>
    )
  }

}
