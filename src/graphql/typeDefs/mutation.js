import { gql } from 'apollo-server-express';

export const Mutation = gql`
    type Mutation {
        createUser(input: UserInput!): User,
        updateUser(_id: ID, input: UserInput!): User,
        deleteUser(_id: ID): User
    }
`;