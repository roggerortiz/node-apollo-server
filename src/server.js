import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground as GraphQLPlayground } from 'apollo-server-core';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

export const startServer = async () => {
    const app = express();
    const port = process.env.PORT || 4000;
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            GraphQLPlayground()
        ]
    });

    await server.start();
    server.applyMiddleware({ app, path: '/' });

    await new Promise(resolve => app.listen({ port }, resolve));
    console.log(`Server ready at http://localhost:${port}`);
};