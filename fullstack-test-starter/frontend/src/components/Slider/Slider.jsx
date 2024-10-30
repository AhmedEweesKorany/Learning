import React, { Component } from "react";
import Slider from "react-slick";

class ProjectSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Custom next arrow
  SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          marginRight: "-20px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          background: "gray",
          height: "40px",
          width: "40px",
        }}
        onClick={onClick}
      />
    );
  };

  // Custom prev arrow
  SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          marginLeft: "-20px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          background: "gray",
          height: "40px",
          width: "40px",
        }}
        onClick={onClick}
      />
    );
  };

  render() {
    const { gallery } = this.props;

    const settings = {
      dots: true,
      nextArrow: <this.SampleNextArrow />,
      prevArrow: <this.SamplePrevArrow />,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="slider-container" data-testid='product-gallery'>
        <Slider {...settings}>
          {gallery?.map((img, i) => {
            return (
              <div key={i} className="slider-item">
                <div>
                  <img
                    src={img}
                    alt=""
                    className="w-[80%] h-[300px] object-contain ml-20 rounded-2xl max-h-full"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ProjectSlider;
