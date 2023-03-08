import React from "react";
import { Link } from "gatsby";
import Title from "./Title";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Slider from "react-slick";

const Demo = ({ demo = [] }) => {
  const Arrow = ({ onClick, icon }) => (
    <div className="slick-arrow" onClick={onClick}>
      {icon}
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      <FiChevronLeft />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      <FiChevronRight />
    </button>
  );

  return (
    <>
      <Slider {...settings}>
        {demo.map((demo) => {
          const { id, title, heading, description, image } = demo;
          const pathToImage = getImage(image);
          return (
            <div className="democolumn">
              <h3>{heading}</h3>
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="demoimage"
              />{" "}
              <GatsbyImage />
              <p>{description}</p>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      height: 100%;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      height: 15rem;
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-7);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      .container {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .container {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .container {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`;
export default Demo;
