import React, { memo, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "gatsby";

import Loading from "../loading";
import ErrorInfo from "../error-info";
import { GET_PRODUCT } from "../../api";
import {
  Wrapper,
  Title,
  Price,
  Description,
  Image,
} from "./product-info.styles";

export const ProductInfo = memo(({ productId }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT(productId));
  const { title, image, price, description, name } = useMemo(
    () => data?.Product || {},
    [data]
  );

  if (loading) return <Loading />;
  if (error) return <ErrorInfo errorMessage={error.message} />;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image src={image} alt={name} loading="lazy" />
      <Price>Price: {price}</Price>
      <Description>{description}</Description>
      <Link to="/">Back to home</Link>
    </Wrapper>
  );
});
