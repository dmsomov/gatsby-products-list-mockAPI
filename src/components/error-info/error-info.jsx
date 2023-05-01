import React from "react";

import { Wrapper } from "./error-info.styles";

export const ErrorInfo = ({ errorMessage }) => (
  <Wrapper>Error: {errorMessage}</Wrapper>
);
