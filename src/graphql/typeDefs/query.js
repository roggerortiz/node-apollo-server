import { gql } from 'apollo-server-express';

export const Query = gql`
    type Query {
        getUsers: [User],
        getUser (id: ID!): User
    }
`;