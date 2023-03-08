import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "gatsby";
import Portfolio from "./portfolio";
const query = graphql`
  query {
    allContentfulPortfolio {
      nodes {
        id
        title
        description {
          description
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        header
      }
    }
  }
`;

const ServicePortfolio = () => {
  const data = useStaticQuery(query);
  const flipcard = data.allContentfulPortfolio.nodes;
  console.log(flipcard);
  return (
    <section className="card-main-container">
      <Portfolio flipcard={flipcard} />
    </section>
  );
};
export default ServicePortfolio;
