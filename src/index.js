import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './database';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

dotenv.config();

connectDB();

const startApolloServer = async (typeDefs, resolvers) => {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();

    const app = express();
    server.applyMiddleware({ app });

    app.set('port', process.env.PORT || 4000);
    app.listen(app.get('port'), () => {
        console.log(`Now browse to http://localhost:${app.get('port')}${server.graphqlPath}`)
    });
};

startApolloServer(typeDefs, resolvers);