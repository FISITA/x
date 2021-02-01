/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSalutations = /* GraphQL */ `
  mutation CreateSalutations(
    $input: CreateSalutationsInput!
    $condition: ModelSalutationsConditionInput
  ) {
    createSalutations(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateSalutations = /* GraphQL */ `
  mutation UpdateSalutations(
    $input: UpdateSalutationsInput!
    $condition: ModelSalutationsConditionInput
  ) {
    updateSalutations(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteSalutations = /* GraphQL */ `
  mutation DeleteSalutations(
    $input: DeleteSalutationsInput!
    $condition: ModelSalutationsConditionInput
  ) {
    deleteSalutations(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
