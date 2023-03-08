import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "gatsby";
import HoverCard from "./hovercard";
const query = graphql`
  query {
    allContentfulPoc {
      nodes {
        id
        heading
        image {
          gatsbyImageData
        }
        title
      }
    }
  }
`;

const Poccard = () => {
  const data = useStaticQuery(query);
  const hovercard = data.allContentfulPoc.nodes;
  console.log(hovercard);
  return (
    <section className="main-div">
      <HoverCard hovercard={hovercard} />
    </section>
  );
};
export default Poccard;
