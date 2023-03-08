import React from "react";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Portfolio = ({ flipcard = [] }) => {
  return (
    <>
      {/* <Seo title="poc" /> */}
      {/* <div className="container"> */}
      {flipcard.map((flipcard) => {
        const { id, title, header, description, image } = flipcard;
        const pathToImage = getImage(image);
        return (
          <div className="card-main">
            <link
              href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
              rel="stylesheet"
            />
            <link rel="stylesheet" href="../assets/css/main.css" />
            <div className="front-card" key={id}>
              <GatsbyImage
                image={pathToImage}
                className="img"
                alt={title}
              ></GatsbyImage>
              <h2>{header}</h2>
            </div>
            <div className="back-card">
              <p className="back-light">{description.description}</p>
              <Link to={title}>
                <button className="expbutton">
                  Explore <i class="ri-arrow-right-line"></i>
                </button>
              </Link>
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

export default Portfolio;
