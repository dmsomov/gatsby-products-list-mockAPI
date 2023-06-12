import React from "react";
import ContentLoader from "react-content-loader";

import { Wrapper } from "./loading.styles";

export const Loading = () => {
  console.log("222222");
  console.log("333333");

  return (
    <Wrapper>
      <ContentLoader
        viewBox="0 0 400 160"
        height={160}
        width={400}
        backgroundColor="transparent"
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
      <ContentLoader
        viewBox="0 0 400 160"
        height={160}
        width={400}
        backgroundColor="transparent"
      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>
    </Wrapper>
  );
};
