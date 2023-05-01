import React, { memo } from "react";

import { Wrapper, Title } from "./layout.styles";

export const Layout = memo(({ children, title }) => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
));
