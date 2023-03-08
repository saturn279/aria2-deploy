import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/HewlettPackardEnterprise/",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/company/hewlett-packard-enterprise/",
  },
  {
    id: 3,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://z-p4.www.instagram.com/hpe/channel/",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/HPE?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  },
];

export default data;
