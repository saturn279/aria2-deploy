import React from "react";
import countryimg from "../assets/icons/country.png";
import indusimg from "../assets/icons/industry.png";
import portimg from "../assets/icons/Portfolio.png";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import { MdOutlineInventory } from "react-icons/md";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Title from "./Title";

// const MyComponent = ({ richTextData }) => {
//   return (
//     <ul>
//       {richTextData.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// };

const Project = ({ projectpage = [] }) => {
  return (
    <>
      {projectpage.map((projectpage) => {
        const {
          id,
          image,
          heading,
          description,
          inventoryAndAssesment,
          designAndPlan,
          implementation,
          desiredOutcome,
          hpeSolution,
          businessChallenge,
          valueDelivered,
          country,
          industry,
          hpePortfolio,
          list,
        } = projectpage;
        const pathToImage = getImage(image);
        console.log(list);
        return (
          <main className="page">
            <div className="project-page">
              <section className="project-hero">
                <GatsbyImage
                  image={pathToImage}
                  className="project-hero-img"
                  alt={heading}
                ></GatsbyImage>
                <article>
                  <h2>{heading}</h2>
                  <p>{description.description}</p>
                  {/* <div className="project-card">
                    <div className="project-card-header">
                      <h4>Project Info</h4>
                    </div>
                    <div className="project-card-infoimg">
                      <img src={countryimg} className="project-card-img"></img>
                    </div>
                    <div className="project-card-info">
                      <h3>Country</h3>
                      <h5>{country}</h5>
                    </div>
                    <div className="project-card-infoimg">
                      <img src={indusimg} className="project-card-img"></img>
                    </div>
                    <div className="project-card-info">
                      <h3>Industry</h3>
                      <h5>{industry}</h5>
                    </div>
                    <div className="project-card-infoimg">
                      <img src={portimg} className="project-card-img"></img>
                    </div>
                    <div className="project-card-info">
                      <h3>HPE Portfolio</h3>
                      <h5>{hpePortfolio}</h5>
                    </div>
                  </div> */}
                  <h3>Country</h3>
                  <h5>{country}</h5>
                  <hr />
                  <h3>Industry</h3>
                  <h5>{industry}</h5>
                  <hr />
                  <h3>HPE Portfolio</h3>
                  <h5>{hpePortfolio}</h5>
                  <hr />
                </article>
              </section>
              <div>
                <h2>Desired Outcome</h2>
                {/* <p>{desiredOutcome.raw.data}</p> */}
                {/* <div>
                  {documentToReactComponents(desiredOutcome.raw, options)}
                </div> */}
                <ol className="my-list-item">
                  {desiredOutcome.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <h2>HPE Solution</h2>
                <ol className="my-list-item">
                  {hpeSolution.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <h2>Business Challenge</h2>
                <ol className="my-list-item">
                  {businessChallenge.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <h2>Value Delivered</h2>
                <ol className="my-list-item">
                  {valueDelivered.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <Title title="HPE APPROACH" />
                <div className="underline"></div>
                <h2> Design and Plan</h2>
                <ol className="my-list-item">
                  {designAndPlan.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
                <h2> Implementation</h2>
                <ol className="my-list-item">
                  {implementation.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </main>
        );
      })}
    </>
  );
};

export default Project;
