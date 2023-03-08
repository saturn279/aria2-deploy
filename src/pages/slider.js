import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a from "../assets/images/a.jpg";
import b from "../assets/images/b.jpg";
import c from "../assets/images/c.jpg";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { GatsbyImage } from "gatsby-plugin-image";

const data = [
  {
    title: "Card 1",
    image: { a },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card 2",
    image: { b },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card 3",
    image: { c },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card 4",
    image: { c },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Card 5",
    image: { c },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const HorizontalCardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // prevArrow: <img src=<FiChevronLeft /> alt="Previous" />,
    // nextArrow: <img src=<FiChevronRight /> alt="Next" />,
    // appendDots: (dots) => (
    //   <div style={{ textAlign: "center" }}>
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <button>
    //     <img src={data[i].image} alt={data[i].title} />
    //     <p>{data[i].title}</p>
    //   </button>
    // ),
  };

  return (
    <Slider {...settings}>
      {data.map((card, index) => (
        <div key={index} className="column">
          <h3>{card.title}</h3>
          <GatsbyImage
            image={card.image}
            alt={card.title}
            className="image"
          />{" "}
          <GatsbyImage />
          <p>{card.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default HorizontalCardSlider;
