import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import HeroPoc from "../components/HeroPoc";
import ServicePortfolios from "../components/ServicePortfolios";
import Title from "../components/Title";
const poc = () => {
  return (
    <>
      {/* <Seo title="poc" /> */}
      <Layout>
        <HeroPoc />
        <Title title="Service Portfolios" />
        <div className="underline"></div>
        <ServicePortfolios />
      </Layout>
    </>
  );
};

export default poc;
