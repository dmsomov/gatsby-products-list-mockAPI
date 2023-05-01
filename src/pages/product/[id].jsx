import React from "react";

import SEO from "../../components/seo";
import Layout from "../../components/layout";
import ProductInfo from "../../components/product-info";

export const Head = () => (
  <SEO title="Product" description="Product Description" />
);

const ProductPage = ({ params }) => {
  const id = params[`*`];

  return (
    <Layout title="Information">
      <ProductInfo productId={id} />
    </Layout>
  );
};

export default ProductPage;
