import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import { Carousel, Avatar, Badge } from "antd";

const CarouselComponent = () => {
  let tickerSpeed = 2;

  // let flickity = null;
  let isPaused = false;

  const carouselRef = useRef();
  const listener = useRef();

  const [rerender, setRerender] = useState("");

  console.log("carousel ref-->", carouselRef);

  // flickity = carouselRef && carouselRef.current && carouselRef.current.flkty;
  const update = () => {
    let flickity =
      carouselRef && carouselRef.current && carouselRef.current.flkty;
    if (isPaused) return;
    if (flickity.slides) {
      flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
      flickity.selectedIndex = flickity.dragEndRestingSelect();
      flickity.updateSelectedSlide();
      flickity.settle(flickity.x);
    }
    window.requestAnimationFrame(update);
  };

  const pause = () => {
    isPaused = true;
  };

  const play = () => {
    if (isPaused) {
      isPaused = false;
      window.requestAnimationFrame(update);
    }
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (carouselRef.current && carouselRef.current.flkty) {
      update();
    }
  }, [carouselRef]);

  useEffect(() => {
    // Update the document title using the browser API

    listener.current.addEventListener("mouseenter", pause, false);
    listener.current.addEventListener("focusin", pause, false);
    listener.current.addEventListener("mouseleave", play, false);
    listener.current.addEventListener("focusout", play, false);
    // listener.current.on("dragStart", () => {
    //   isPaused = true;
    // });
    // return () => {
    //   listener.current.removeEventListener("mouseenter", pause, false);
    //   listener.current.removeEventListener("focusin", pause, false);
    //   listener.current.removeEventListener("mouseleave", play, false);
    //   listener.current.removeEventListener("focusout", play, false);
    // };
  }, []);

  console.log("carousel ref ast-->", carouselRef);

  const flickityOptions = {
    autoPlay: false,
    prevNextButtons: true,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    selectedAttraction: 0.015,
    friction: 0.25,
  };
  return (
    <>
      {console.log("carousel ref render-->", carouselRef)}
      <h1>
        {carouselRef && carouselRef.current && carouselRef.current.flkty.x}
      </h1>
      <h1>{rerender}</h1>
      <div ref={listener}>
        <Flickity
          ref={carouselRef}
          // flickityRef={(c) => (this.flkty = c)}
          className={"slideshow js-slideshow"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
          // flickityRef
        >
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
        </Flickity>
      </div>
      <button
        onClick={() => {
          setRerender(carouselRef.current.flkty.x);
        }}
      >
        Click this
      </button>
    </>
  );
};

const slider = () => {
  return (
    <div>
      <h1>React Flickity</h1>
      <CarouselComponent />
    </div>
  );
};

export default slider;
