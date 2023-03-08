import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "gatsby";
import Card from "./card";
const query = graphql`
  query {
    allContentfulCard {
      nodes {
        description
        button
        title
        id
        heading
        image {
          gatsbyImageData
        }
      }
    }
  }
`;

const IvaasCard = () => {
  const data = useStaticQuery(query);
  const card = data.allContentfulCard.nodes;
  console.log(card);
  return (
    <section className="cardcontainer">
      <Card card={card} />
    </section>
  );
};
export default IvaasCard;
