import React, { useState, useEffect, useRef } from "react";

import { Carousel, Avatar, Badge } from "antd";

import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";

const CarouselScrollingv2 = (props) => {
  const carouselRef = useRef();

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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  //next
  //reset state - init
  return (
    <Carousel ref={carouselRef} arrows {...settings}>
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

export default CarouselScrollingv2;
