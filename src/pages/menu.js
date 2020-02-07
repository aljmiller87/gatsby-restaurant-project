import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const Menu = () => {
  return (
    <Layout>
      <SEO title="Menu" keywords={["restaurant", "Menu"]} />
      <h3>this is Menu</h3>
    </Layout>
  );
};

export default Menu;
