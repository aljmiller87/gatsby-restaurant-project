import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { HomeHeader, Banner, BannerButton } from "../utils";
import img from "../images/bcg/homeBcg.jpeg";

const IndexPage = () => (
  <Layout>
    <SEO title="home" keywords={["restaurant", "gatsby"]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - Santa Monica, CA">
        <BannerButton style={{ margin: "2rem auto" }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
  </Layout>
);

export default IndexPage;
