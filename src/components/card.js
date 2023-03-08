import React from "react";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const Card = ({ card = [] }) => {
  return (
    <>
      {/* <Seo title="poc" /> */}
      {/* <div className="container"> */}
      {card.map((card) => {
        const { id, title, heading, description, button, image } = card;
        const pathToImage = getImage(image);
        return (
          <div className="column">
            <GatsbyImage
              image={pathToImage}
              className="image"
              alt={title}
            ></GatsbyImage>
            <h2>{description}</h2>
            {/* <p>{description}</p> */}
            <div className="cardbut">
              <Link key={id} to={`/${title}`} className="buttoncard">
                {button}
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

export default Card;
