import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from "../utils";
import img from "../images/bcg/contactBcg.jpeg";

const Contact = () => (
  <Layout>
    <SEO title="contact" keywords={["restaurant", "gatsby"]} />
    <PageHeader img={img}>
      <Banner title="contact us" subtitle="a little about us" />
    </PageHeader>
  </Layout>
);

export default Contact;
