import React, { memo } from "react";

import { Wrapper, Title } from "./layout.styles";

export const Layout = memo(({ children, title }) => {
  console.log('1111');
  return (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
)});
