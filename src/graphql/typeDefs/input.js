import { gql } from 'apollo-server-express';

export const Input = gql`
    input UserInput {
        firstName: String!,
        lastName: String!,
        age: Int
    }
`;