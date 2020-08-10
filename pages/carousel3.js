import React, { useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";

import { Carousel, Avatar, Badge } from "antd";

class CarouselComponent extends React.Component {
  // const options = {};

  // const flickityRef = useRef();

  // console.log(flickityRef);

  constructor(props) {
    super(props);
    this.flkty = React.createRef();
  }
  componentDidMount = () => {
    // You can register events in componentDidMount hook
    this.flkty.on("settle", () => {
      console.log(`current index is ${this.flkty.selectedIndex}`);
    });

    let tickerSpeed = 2;
    let isPaused = false;
    // const slideshowEl = document.querySelector(".js-slideshow");
    console.log("slideshow", this.flkty);

    const update = () => {
      if (isPaused) return;
      if (this.flkty.slides) {
        console.log("gets inside");
        this.flkty.x = (this.flkty.x - tickerSpeed) % this.flkty.slideableWidth;
        this.flkty.selectedIndex = this.flkty.dragEndRestingSelect();
        this.flkty.updateSelectedSlide();
        this.flkty.settle(this.flkty.x);
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

    this.flkty.x = 0;

    // this.flkty.current.addEventListener("mouseenter", pause, false);
    // this.flkty.current.addEventListener("focusin", pause, false);
    // this.flkty.current.addEventListener("mouseleave", play, false);
    // this.flkty.current.addEventListener("focusout", play, false);

    this.flkty.on("dragStart", () => {
      isPaused = true;
    });
  };

  // componentDidUpdate = () => {
  //   // You can register events in componentDidMount hook
  //   this.flkty.on("settle", () => {
  //     console.log(`current index is ${this.flkty.selectedIndex}`);
  //   });

  //   let tickerSpeed = 2;
  //   let isPaused = false;
  //   const update = () => {
  //     if (isPaused) return;
  //     if (this.flkty.slides) {
  //       console.log("gets inside");
  //       this.flkty.x = (this.flkty.x - tickerSpeed) % this.flkty.slideableWidth;
  //       this.flkty.selectedIndex = this.flkty.dragEndRestingSelect();
  //       this.flkty.updateSelectedSlide();
  //       this.flkty.settle(this.flkty.x);
  //     }
  //     window.requestAnimationFrame(update);
  //   };
  // };

  render() {
    const flickityOptions = {
      initialIndex: 2,
      autoPlay: true,

      prevNextButtons: true,
      pageDots: false,
      draggable: true,
      wrapAround: true,
      selectedAttraction: 0.015,
      friction: 0.25,
      // selectedAttraction: 0.01,
      // friction: 1,
      // selectedAttraction: 0,
      // friction: 0,
      // freeScroll: true,
      // freeScrollFriction: 0.0,
    };
    return (
      <Flickity
        flickityRef={(c) => (this.flkty = c)}
        className={"slideshow js-slideshow"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
        // flickityRef
      >
        {/* <img src="/jpeg1.jpeg" alt="jpeg1" />

      <img src="/png1.png" alt="png1" />

      <img src="/png2.png" alt="png2" /> */}
        {/* <div className="slideshow js-slideshow"> */}
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
        {/* </div> */}
      </Flickity>
    );
  }
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
