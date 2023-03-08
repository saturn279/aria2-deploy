import React, { useState, useEffect } from "react";
import Title from "./Title";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { FaQuoteRight } from "react-icons/fa";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Leaders = ({ customers = [] }) => {
  const [index, setIndex] = React.useState(0);
  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > customers.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = customers.length - 1;
      }
      return index;
    });
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > customers.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <Wrapper className="sectionleader">
      <Title title="Hear From Our Leaders" />
      <div className="underline"></div>
      <div className="section-center">
        {customers.map((customer, customerIndex) => {
          const { image, name, designation } = customer;
          const pathToImage = getImage(image);
          //   const customerImg = getImage(image.localFiles[0]);

          let position = "nextSlide";
          if (customerIndex === index) {
            position = "activeSlide";
          }
          if (
            customerIndex === index - 1 ||
            (index === 0 && customerIndex === customers.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={customerIndex}>
              <GatsbyImage
                image={pathToImage}
                className="img"
                alt={name}
              ></GatsbyImage>
              <div className="leadername">{name}</div>
              <p className="title">{designation}</p>
              <p className="text">
                "In the above example, the align-right class is applied to the
                paragraph element containing the text that needs to be aligned
                to the right side. The text-align: right; rule in the CSS code
                aligns the text to the right side of the containing element, in
                this case, the paragraph."
              </p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-grey-10);
  .section-center {
    margin-top: 2rem;
    width: 95vw;
    height: 450px;
    max-width: 1100px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
    /* background: red; */
    .img {
      border-radius: 10%;
      /* margin-bottom: 3rem; */
      max-width: 200px;
      max-height: 190px;
      display: block;
      /* margin-right: 3rem; */
      margin: 0 auto;
      box-sizing: border-box;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.8);
    }
    .p {
      max-width: fit-content;
    }
    h4 {
      text-transform: uppercase;
      color: var(--clr-primary-5);
      margin-bottom: 0.25rem;
    }
    .title {
      text-transform: capitalize;
      margin-bottom: 0.75rem;
    }
    .text {
      max-width: 80vw;
      height: 6vh;
      /* margin: 0 auto; */
      line-height: 1.25;
      color: var(--clr-grey-5);
      font-family: "MetricHpe";
      margin-left: 3rem;
      margin-top: 1.5rem;
    }
    .icon {
      font-size: 2rem;
      /* margin-top: 0rem; */
      /* padding-bottom: 1rem; */
      color: var(--clr-primary-5);
    }
    .prev,
    .next {
      position: absolute;
      top: 200px;
      transform: translateY(-50%);
      background: var(--clr-grey-5);
      color: var(--clr-white);
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }
    .prev:hover,
    .next:hover {
      background: var(--clr-primary-5);
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
    @media (min-width: 800px) {
      .prev,
      .next {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }
    article {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 86vw;
      height: 111vh;
      opacity: 0;
      transition: var(--transition);
    }
    article.activeSlide {
      opacity: 1;
      transform: translateX(0);
      object-fit: cover;
    }
    article.lastSlide {
      transform: translateX(-100%);
    }
    article.nextSlide {
      transform: translateX(100%);
    }
  }
`;
export default Leaders;
