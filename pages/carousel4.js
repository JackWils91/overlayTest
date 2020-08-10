import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import { Carousel, Avatar, Badge } from "antd";

function CarouselComponent() {
  //
  //   Variables
  //
  //////////////////////////////////////////////////////////////////////

  // Play with this value to change the speed
  let tickerSpeed = 2;

  let flickity = null;
  let isPaused = false;
  const slideshowEl = useRef();
  const animationRef = useRef();

  //
  //   Functions
  //
  //////////////////////////////////////////////////////////////////////

  const update = () => {
    if (isPaused) return;
    if (flickity && flickity.slides) {
      flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
      flickity.selectedIndex = flickity.dragEndRestingSelect();
      flickity.updateSelectedSlide();
      flickity.settle(flickity.x);
    }
    if (animationRef && animationRef.current) {
      animationRef.current.requestAnimationFrame(update);
    }
  };

  const pause = () => {
    isPaused = true;
  };

  const play = () => {
    if (isPaused) {
      isPaused = false;
      if (animationRef && animationRef.current) {
        animationRef.current.requestAnimationFrame(update);
      }
    }
  };

  //
  //   Create Flickity
  //
  //////////////////////////////////////////////////////////////////////

  flickity = new Flickity(slideshowEl, {
    autoPlay: false,
    prevNextButtons: true,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    selectedAttraction: 0.015,
    friction: 0.25,
  });
  flickity.x = 0;

  //
  //   Add Event Listeners
  //
  //////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const myFunction = () => console.log("do something");

    if (slideshowEl && slideshowEl.current) {
      // Passing the same reference
      // slideshowEl.current.addEventListener(myFunction)
      slideshowEl.current.addEventListener("mouseenter", pause, false);
      slideshowEl.current.addEventListener("focusin", pause, false);
      slideshowEl.current.addEventListener("mouseleave", play, false);
      slideshowEl.current.addEventListener("focusout", play, false);
    }

    return () => {
      // Passing the same reference
      // slideshowEl.current.removeEventListener(myFunction)
      slideshowEl.current.addEventListener("mouseenter", pause, false);
      slideshowEl.current.addEventListener("focusin", pause, false);
      slideshowEl.current.addEventListener("mouseleave", play, false);
      slideshowEl.current.addEventListener("focusout", play, false);
    };
  });

  // flickity.on("dragStart", () => {
  //   isPaused = true;
  // });

  //
  //   Start Ticker
  //
  //////////////////////////////////////////////////////////////////////

  update();
  return (
    <flickity>
      <div ref={slideshowEl} className="slideshow js-slideshow">
        <div className="slide">One</div>
        <div className="slide">Two</div>
        <div className="slide">Three</div>
        <div className="slide">Four</div>
        <div className="slide">Five</div>
        <div className="slide">Six</div>
        <div className="slide">Seven</div>
        <div className="slide">Eight</div>
        <div className="slide">Nine</div>
        <div className="slide">Ten</div>
      </div>
    </flickity>
  );
}
const slider = () => {
  return (
    <div>
      <h1>React Flickity</h1>
      <CarouselComponent />
    </div>
  );
};

export default slider;
