import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        getUsers: [User]
    }

    type User {
        _id: ID,
        firstName: String!
        lastName: String!,
        age: Int
    }

    type Mutation {
        createUser(input: UserInput!): User,
        updateUser(_id: ID, input: UserInput!): User,
        deleteUser(_id: ID): User
    }

    input UserInput {
        firstName: String!,
        lastName: String!,
        age: Int
    }
`;