/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSalutations = /* GraphQL */ `
  query GetSalutations($id: ID!) {
    getSalutations(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listSalutationss = /* GraphQL */ `
  query ListSalutationss(
    $filter: ModelSalutationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalutationss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
