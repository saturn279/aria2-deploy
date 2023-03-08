import React from "react";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const HoverCard = ({ hovercard = [] }) => {
  return (
    <>
      {/* <Seo title="poc" /> */}
      {/* <div className="container"> */}
      {hovercard.map((hovercard) => {
        const { id, title, heading, image } = hovercard;
        const pathToImage = getImage(image);
        return (
          <div className="hovercard">
            <link
              href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
              rel="stylesheet"
            />
            <link rel="stylesheet" href="../assets/css/main.css" />
            <div className="imgbox" key={id}>
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="imag"
              ></GatsbyImage>
            </div>
            <div className="content">
              <h2>{heading}</h2>
              <div>
                <Link to={`/${title}`}>
                  <button className="expbutton">
                    Explore <i class="ri-arrow-right-line"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="column">Column 2</div>
        <div className="column">Column 3</div>
        <div className="column">Column 4</div> */}
      {/* </div> */}
    </>
  );
};

export default HoverCard;
