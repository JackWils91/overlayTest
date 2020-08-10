import React, { Component } from "react";

import { Carousel, Avatar, Badge } from "antd";

import { LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      cssEase: "linear",
      //   autoplaySpeed: 6000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      beforeChange: (current, next) => {
        // identify onclick, remove set speed to zero
        // setSpeed(0);
        console.log("before change", current, next);
        // setSlide({ current, next });
      },
      afterChange: (current, next) => {
        // identify onclick, add set speed back to previous
        // setSpeed(6000);
        console.log("after change", current, next);
      },
    };
  }
  next() {
    // this.setState({
    //   speed: 500,
    // });

    this.slider.next();

    // this.setState({
    //   speed: 6000,
    // });
  }
  previous() {
    // this.setState({
    //   speed: 500,
    // });

    this.slider.prev();
    // this.setState({
    //   speed: 6000,
    // });
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      cssEase: "linear",
      //   autoplaySpeed: 6000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    console.log("state-->", this.state);
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Carousel ref={(c) => (this.slider = c)} {...this.state}>
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
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Carousel>
        <div style={{ textAlign: "center" }}>
          <button
            className="button"
            onClick={() => {
              this.setState({
                speed: 200,
                autoplay: false,
              });
              this.previous();
            }}
          >
            Previous
          </button>
          <button
            className="button"
            onClick={() => {
              this.setState({
                speed: 200,
                autoplay: false,
              });
              this.next();
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
