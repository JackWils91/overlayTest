import React, { useState, useEffect, useRef } from "react";

import { Carousel, Avatar, Badge } from "antd";

import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";

const CarouselScrollingv3 = (props) => {
  const carouselRef = useRef();
  const [next, setNext] = useState();
  const [slide, setSlide] = useState(0);

  console.log("slide being set before change", slide);

  function SampleNextArrow(props) {
    // console.log("clicks next");
    // console.log("props next-->", props);
    const { className, onClick } = props;
    // setSpeed(6000);
    return (
      <div className={className} onClick={onClick}>
        <RightOutlined
          // onClick={onClick}
          style={{ fontSize: "24px", color: "#000000" }}
        />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick, currentSlide, slideCount } = props;
    // setSpeed(6000);
    return (
      <div
        className={className}
        // carouselRef.current.goTo(1);
        onClick={onClick}
      >
        <LeftOutlined style={{ fontSize: "24px", color: "#000000" }} />
      </div>
    );
  }
  // const [count, setCount] = useState(0);
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

  const [speed, setSpeed] = useState(6000);
  const [direction, setDirection] = useState("");

  const initialState = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    // cssEase: "cubic-bezier(1, 0, 0.5, 0)",
    cssEase: "linear",
    speed: speed,
    // speed: 0,
    autoplaySpeed: 0,
    pauseOnHover: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // beforeChange: (current, next) => {
    //   // identify onclick, remove set speed to zero
    //   // setSpeed(0);
    //   console.log("before change", current, next);
    //   // setSlide({ current, next });
    // },
    // afterChange: (current, next) => {
    //   // identify onclick, add set speed back to previous
    //   // setSpeed(6000);
    //   console.log("after change", speed);
    // },
    // rtl: false,
  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log("what is the speed hitting in useEffect?", speed);

    if (direction === "next") {
      console.log("hits useEffect next", speed);
      carouselRef.current.next();
      setDirection("");
    }

    if (direction === "prev") {
      console.log("hits useEffect prev", speed);
      carouselRef.current.prev();
      setDirection("");
    }
  }, [speed]);

  const [settings1, setSettings1] = useState(initialState);
  const [move, setMove] = useState("");
  const arrows = ({ arrow, currentSlide }) => {
    // Update the document title using the browser API
    if (arrow === "next") {
      console.log("next useEffect");
      console.log("inside useEffect next", currentSlide, currentSlide + 1);
      carouselRef.current.next();
    }
    if (arrow === "prev") {
      console.log("prev useEffect");
      console.log("inside useEffect prev", currentSlide, currentSlide - 1);
      carouselRef.current.prev();
    }
    // carouselRef.current.goTo(4);
    console.log("gets inside useEffect when clicking next");
  };

  //next
  //reset state - init
  return (
    <Carousel ref={carouselRef} arrows {...initialState}>
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

export default CarouselScrollingv3;
