import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";
import img from "../images/bcg/aboutBcg.jpeg";

const About = () => (
  <Layout>
    <SEO title="about" keywords={["restaurant", "gatsby"]} />
    <PageHeader img={img}>
      <Banner title="about us" subtitle="a little about us" />
    </PageHeader>
  </Layout>
);

export default About;
