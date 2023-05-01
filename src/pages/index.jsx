import React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import ProductsList from "../components/products-list";

export const Head = () => <SEO title="Home Page"/>;

const IndexPage = () => (
  <Layout title="Laptops">
    <ProductsList />
  </Layout>
);

export default IndexPage;
