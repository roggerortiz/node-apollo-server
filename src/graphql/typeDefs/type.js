import { gql } from 'apollo-server-express';

export const Type = gql`
    type User {
        _id: ID,
        firstName: String!
        lastName: String!,
        age: Int
    }
`;