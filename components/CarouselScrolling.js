import React, { useState, useEffect, useRef } from "react";

import { Carousel, Avatar, Badge } from "antd";

import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";

const CarouselScrolling = (props) => {
  const carouselRef = useRef();
  const [next, setNext] = useState();
  const [slide, setSlide] = useState(0);
  console.log("slide", slide);
  // useEffect(() => {
  //   setNext(carouselRef.current.slick.slickNext());
  // }, []);

  function SampleNextArrow(props) {
    console.log("clicks next");
    console.log("props next-->", props);
    const { className, onClick } = props;
    console.log("carouselRef", props.jack);
    return (
      <div
        className={className}
        onClick={() => {
          carouselRef.current.next();
        }}
        // onClick={() => {
        //   console.log("carous data next", carouselRef.current.slick);
        //   return carouselRef.current.slick.slickNext();
        // }}
        // onClick={() => next}
      >
        <RightOutlined
          // onClick={onClick}
          style={{ fontSize: "24px", color: "#000000" }}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick, currentSlide, slideCount } = props;
    // console.log(
    //   "onClick->",
    //   onClick((e) => console.log("inside click", e))
    // );
    return (
      <div
        className={className}
        // onClick={() => {
        //   // console.log(onClick, "-->prev");
        //   setSettings(({ /*rtl,*/ ...remaining }) => ({
        //     ...remaining,
        //     /*rtl: true,*/
        //   }));
        // }}
        onClick={() => {
          //         const prevSlide =  --currentSlide
          //           const slidePosition  = prevSlide < 0 ? slideCount
          // // --currentSlide
          // setSlide(1);

          // carouselRef.current.goTo(1);
          carouselRef.current.prev();
        }}
        // onClick={() => {
        //   console.log("carous data prev", carouselRef.current.slick);
        //   return carouselRef.current.slick.slickPrev();
        // }}
      >
        <LeftOutlined style={{ fontSize: "24px", color: "#000000" }} />
      </div>
    );
  }

  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // when true it blocks the nextArrow prevArrov scroll
    speed: 9000,
    // autoplaySpeed: 9000,
    cssEase: "linear",
    waitForAnimate: false,

    // nextArrow: <SampleNextArrow onClick={() => carouselRef.current.next()} />,
    // prevArrow: <SamplePrevArrow onClick={() => carouselRef.current.prev()} />,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // rtl: false,
  });
  const [settings1, setSettings1] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    // speed:2000,
    autoplaySpeed: 6000,
    pauseOnHover: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // rtl: false,
  });
  //next
  return (
    <Carousel ref={carouselRef} arrows {...settings1}>
      <div>
        <span className="avatar-item">
          <Badge count={"$10k"}>
            <Avatar
              shape="square"
              // size={94}
              size={135}
              icon={
                <img
                  style={{ display: "block", width: "100%", height: "auto" }}
                  src="/jpeg1.jpeg"
                  alt="jpeg1"
                />
              }
            />
          </Badge>
        </span>
        <h3>1</h3>
      </div>
      <div>
        <span className="avatar-item">
          <Badge count={"$20k"}>
            <Avatar
              shape="square"
              size={135}
              icon={
                <img
                  style={{ display: "block", width: "100%", height: "auto" }}
                  src="/png1.png"
                  alt="png1"
                />
              }
            />
          </Badge>
        </span>
        <h3>2</h3>
      </div>
      <div>
        <span className="avatar-item">
          <Badge count={"$25k"}>
            <Avatar
              shape="square"
              size={135}
              icon={
                <img
                  style={{ display: "block", width: "100%", height: "auto" }}
                  src="/png2.png"
                  alt="png2"
                />
              }
            />
          </Badge>
        </span>
        <h3>3</h3>
      </div>
      <div>
        <span className="avatar-item">
          <Badge count={"$35k"}>
            <Avatar
              shape="square"
              size={135}
              icon={
                <img
                  style={{ display: "block", width: "100%", height: "auto" }}
                  src="/png3.png"
                  alt="png3"
                />
              }
            />
          </Badge>
        </span>
        <h3>4</h3>
      </div>

      <div>
        <span className="avatar-item">
          <Badge count={"$55k"}>
            <Avatar
              shape="square"
              size={135}
              icon={
                <img
                  style={{ display: "block", width: "100%", height: "auto" }}
                  src="/png4.png"
                  alt="png4"
                />
              }
            />
          </Badge>
        </span>

        <h3>5</h3>
      </div>
    </Carousel>
  );
};

export default CarouselScrolling;
