import React, { useState, useEffect } from "react";

import { Carousel } from "antd";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  );
};

export default CarouselScrolling;
