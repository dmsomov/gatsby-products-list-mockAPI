import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  {
    allProducts {
      id
      title
      price
      description
      name
      image
    }
  }
`;

export const GET_PRODUCT = (id) => gql`
  {
    Product(id: ${id}) {
      id
      title
      price
      description
      name
      image
    }
  }
`;
