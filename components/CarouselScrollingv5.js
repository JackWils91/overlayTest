import React, { Component } from "react";
import { Carousel, Avatar, Badge } from "antd";
export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0,
    dots: false,
    infinite: true,
    //   speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    cssEase: "linear",

    afterChange: () =>
      this.setState((state) => ({ updateCount: state.updateCount + 1 })),
    beforeChange: (current, next) => this.setState({ slideIndex: next }),
  };

  speedUp() {
    this.setState({
      speed: 500,
    });
  }
  speedDown() {
    this.setState({
      speed: 6000,
    });
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      //   speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 6000,
      cssEase: "linear",

      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };
    return (
      <div>
        <h2>Slick Go To</h2>
        <p>Total updates: {this.state.updateCount} </p>
        <input
          onChange={(e) => {
            this.speedUp();
            this.slider.goTo(e.target.value);
            this.speedDown();
          }}
          value={this.state.slideIndex}
          type="range"
          min={0}
          max={3}
        />

        <Carousel ref={(slider) => (this.slider = slider)} {...this.state}>
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
      </div>
    );
  }
}
