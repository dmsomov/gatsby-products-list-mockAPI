import React, { memo, useMemo } from "react";
import { useQuery } from "@apollo/client";

import Loading from "../loading";
import ErrorInfo from "../error-info";
import ProductCard from "../product-card";
import { GET_PRODUCTS } from "../../api";
import { Wrapper } from "./products-list.styles";

export const ProductsList = memo(() => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const allProducts = useMemo(() => data?.allProducts || [], [data]);

  if (loading) return <Loading />;
  if (error) return <ErrorInfo errorMessage={error.message} />;
  if (allProducts.length === 0) return <ErrorInfo errorMessage="No data" />;

  return (
    <Wrapper>
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Wrapper>
  );
});
