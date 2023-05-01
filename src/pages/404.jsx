import * as React from "react";

import SEO from "../components/seo";
import { ErrorInfo } from "../components/error-info/error-info";

export const Head = () => <SEO title="Not Found"/>;

const NotFoundPage = () => <ErrorInfo errorMessage="Page not found!" />;

export default NotFoundPage;
