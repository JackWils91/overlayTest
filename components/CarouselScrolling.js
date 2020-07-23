import React, { useState, useEffect } from "react";

import { Carousel, Avatar, Badge } from "antd";

import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";

const CarouselScrolling = (props) => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={() => {
          // console.log(onClick, "-->next");
          setSettings(({ rtl, ...remaining }) => ({
            ...remaining,
            rtl: true,
          }));
        }}
      >
        <RightOutlined style={{ fontSize: "24px", color: "#000000" }} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={() => {
          // console.log(onClick, "-->prev");
          setSettings(({ rtl, ...remaining }) => ({
            ...remaining,
            rtl: false,
          }));
        }}
      >
        <LeftOutlined style={{ fontSize: "24px", color: "#000000" }} />
      </div>
    );
  }

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    // autoplaySpeed: 9000,
    cssEase: "linear",

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rtl: false,
  });
  return (
    <Carousel dots={false} arrows {...settings}>
      <div>
        <span className="avatar-item">
          <Badge count={"$10k"}>
            <Avatar
              shape="square"
              size={94}
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
              size={94}
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
              size={94}
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
              size={94}
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
              size={94}
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
