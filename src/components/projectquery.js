import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "gatsby";
import Project from "./project";
const query = graphql`
  query {
    allContentfulPocpage {
      nodes {
        businessChallenge
        description {
          description
        }
        designAndPlan
        desiredOutcome
        heading
        hpePortfolio
        hpeSolution
        id
        image {
          gatsbyImageData
        }
        implementation
        industry
        inventoryAndAssessment
        list
        title
        valueDelivered
        country
      }
    }
  }
`;

const Projectquery = () => {
  const data = useStaticQuery(query);
  const projectpage = data.allContentfulPocpage.nodes;
  console.log(projectpage);
  return <Project projectpage={projectpage} />;
};
export default Projectquery;
