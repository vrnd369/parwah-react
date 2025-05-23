import React from "react";
import Slider from "react-slick";
import "../styles/Hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props: any) => (
  <button
    className="slick-arrow slick-next"
    onClick={props.onClick}
    aria-label="Next"
  >
    <span>›</span>
  </button>
);

const PrevArrow = (props: any) => (
  <button
    className="slick-arrow slick-prev"
    onClick={props.onClick}
    aria-label="Previous"
  >
    <span>‹</span>
  </button>
);

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  };

  const slides = [
    "/images/slide1.png",
    "/images/slide2.png",
    "/images/slide3.png",
    "/images/slide4.png",
    "/images/slide5.png",
  ];

  return (
    <section id="home" className="hero-carousel-section">
      <Slider {...settings}>
        {slides.map((src, index) => (
          <div key={index} className="hero-slide">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="hero-slide-image"
            />
            {/* <div className="hero-slide-overlay">
              <h2>Welcome to Parwah Industries!</h2>
              <h3>Manufacturing Excellence</h3>
            </div> */}
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
