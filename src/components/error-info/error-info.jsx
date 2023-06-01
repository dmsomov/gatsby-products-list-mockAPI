import React from "react";

import { Wrapper } from "./error-info.styles";

export const ErrorInfo = ({ errorMessage }) => {
  console.log('111111');
  return <Wrapper>Error: {errorMessage}</Wrapper>;
};
