import React, { useState, useEffect, useRef } from "react";

import { Carousel, Avatar, Badge } from "antd";

import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";

const CarouselScrolling = (props) => {
  const carouselRef = useRef();
  const [next, setNext] = useState();
  const [slide, setSlide] = useState(0);

  console.log("slide being set before change", slide);

  function SampleNextArrow(props) {
    // console.log("clicks next");
    // console.log("props next-->", props);
    const { className, onClick } = props;

    return (
      <div
        className={className}
        onClick={() => {
          // setSettings1(({ speed, ...prevData }) => prevData);
          console.log("onclick current slide", props.currentSlide);
          // setMove({ arrow: "next", currentSlide: props.currentSlide });
          arrows({ arrow: "prev", currentSlide: props.currentSlide });
          // carouselRef.current.prev();
          // setSettings1(initialState);
        }}
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

    return (
      <div
        className={className}
        // carouselRef.current.goTo(1);
        onClick={() => {
          // setSettings1(({ speed, ...prevData }) => prevData);
          console.log("onclick current slide", props.currentSlide);
          // setMove({ arrow: "prev", currentSlide: props.currentSlide });
          arrows({ arrow: "prev", currentSlide: props.currentSlide });
        }}
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

  const initialState = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    speed: 6000,
    autoplaySpeed: 6000,
    pauseOnHover: true,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setSlide({ current, next }),
    // afterChange: current => this.setState({ activeSlide2: current })
    // rtl: false,
  };
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
