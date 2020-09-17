import React from "react";
//react-slick
import Slider from "react-slick";
//css
import "../../styles/Carousel.css";
//content
import { carousel_data } from "../../lib/Content";

function Carousel(props) {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    setState(carousel_data);
  },[]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const carousel_items = state.map((item, index) => {
    return (
      <div key={index}>
        <img src={item.image} className="img-fluid" alt="" />
      </div>
    );
  });

  return (
    <div className="banner">
      <Slider {...settings}>{carousel_items}</Slider>
    </div>
  );
}

export default Carousel;
