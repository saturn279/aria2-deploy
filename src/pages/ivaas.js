import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Title from "../components/Title";
import HeroIvaas from "../components/heroivaas";
import IvaasCard from "../components/ivaascard";
import Poccard from "../components/poccard";
import DemoLayout from "../components/demolayout";
const ivaas = () => {
  return (
    <>
      {/* <Seo title="poc" /> */}
      <Layout>
        <HeroIvaas />
        <Title title="Projects" />
        <div className="underline"></div>
        <IvaasCard />
        <Title title="POCs" />
        <div className="underline"></div>
        <Poccard />
        {/* <Title title="DEMOs" />
        <div className="underline"></div>
        <DemoLayout /> */}
      </Layout>
    </>
  );
};

export default ivaas;
