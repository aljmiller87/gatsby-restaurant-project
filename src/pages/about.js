import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const About = () => {
  return (
    <Layout>
      <SEO title="About" keywords={["restaurant", "about"]} />
      <h3>this is about</h3>
    </Layout>
  );
};

export default About;
