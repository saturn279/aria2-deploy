// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
// import Marquee from "react-marquee-slider";
// const MyComponent = () => {
//   const query = graphql`
//     query {
//       allContentfulMarquee {
//         nodes {
//           id
//           image {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   `;
//   const data = useStaticQuery(query);
//   const images = data.allContentfulMarquee.nodes;

//   return (
//     <div className="marquee-slider">
//       <Marquee loop={true} velocity={10}>
//         {images.map((image, index) => (
//           <GatsbyImage
//             key={index}
//             image={image.gatsbyImageData}
//             alt={image.title}
//             className="img"
//           />
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default MyComponent;

import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/images/one.png";
import img2 from "../assets/images/two.png";
import img3 from "../assets/images/three.png";
import img4 from "../assets/images/four.png";
import img6 from "../assets/images/six.png";
import img7 from "../assets/images/seven.png";
import img8 from "../assets/images/eight.png";
import img9 from "../assets/images/nine.png";
import img10 from "../assets/images/ten.png";

function Marq() {
  const images = [img1, img2, img3, img4, img6, img7, img8, img9, img10];

  return (
    <div>
      <Marquee
        direction="right"
        margin-top="2rem"
        speed={100}
        delay={2}
        pauseOnHover
      >
        {images.map((image, index) => (
          <img
            height="50px"
            width="80px"
            className="image_wrapper"
            src={image}
            alt={`Image ${index}`}
            key={index}
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Marq;
