import gql from "graphql-tag";

export const ALL_CLASSES_QUERY = gql`
  query ALL_CLASSES_QUERY {
    class {
      id
      name
    }
  }
`;
