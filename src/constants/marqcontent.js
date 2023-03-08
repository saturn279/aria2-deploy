import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Marquee from "react-fast-marquee";
import { Link } from "gatsby";

const MarqContent = ({ marquee = [] }) => {
  return (
    <Link>
      {marquee.map((marquee) => {
        const { id, image } = marquee;
        const pathToImage = getImage(image);
        return (
          <div>
            <Marquee
              direction="right"
              margin-top="2rem"
              speed={100}
              delay={2}
              pauseOnHover
            >
              <GatsbyImage
                image={pathToImage}
                height="50px"
                width="80px"
                className="image_wrapper"
                key={id}
              ></GatsbyImage>
            </Marquee>
          </div>
        );
      })}
    </Link>
  );
};

export default MarqContent;
