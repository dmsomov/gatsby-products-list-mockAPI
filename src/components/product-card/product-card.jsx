import React, { memo } from "react";

import { Wrapper, Link, Title, Price, Image } from "./product-card.styles";

export const ProductCard = memo(
  ({ product: { image, name, title, price, id } }) => (
    <Wrapper>
      <Image src={image} alt={name}/>
      <Title title={title}>{title}</Title>
      <Price title={`Price: ${price}`}>Price: {price}</Price>
      <Link to={`/product/${id}`} title={`Learn more about ${title}`}>
        Learn more about {title}
      </Link>
    </Wrapper>
  )
);
