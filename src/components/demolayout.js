import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { Link } from "gatsby";
import Demo from "./demo";
const query = graphql`
  query {
    allContentfulDemo {
      nodes {
        id
        title
        description
        heading
        image {
          gatsbyImageData
        }
      }
    }
  }
`;

const DemoLayout = () => {
  const data = useStaticQuery(query);
  const demo = data.allContentfulDemo.nodes;
  console.log(demo);
  return (
    <article className="demodiv">
      <Demo demo={demo} />
    </article>
  );
};
export default DemoLayout;
