import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";
import img from "../images/bcg/menuBcg.jpeg";

const Menu = () => (
  <Layout>
    <SEO title="Menu" keywords={["restaurant", "gatsby"]} />
    <PageHeader img={img}>
      <Banner title="menu" subtitle="a little about us" />
    </PageHeader>
  </Layout>
);

export default Menu;
