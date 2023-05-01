/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-product-listing`,
    description: `Develop a product listing page using Gatsby.js and fetch product data from a mock API.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-apollo",
      options: {
        uri: "http://localhost:5000/graphql",
      },
    },
  ],
};
