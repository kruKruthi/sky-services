
import express from 'express';
// import { expressMiddleware } from 'apollo-server/express';
import connectToDB from '../config/database.js';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from '../schema/type-defs.js';
import { resolvers } from '../schema/resolvers.js';
// import HeaderModel from '../models/headers.js';

const app = express();
app.use(express.json());

const apolloServer = new ApolloServer({ typeDefs, resolvers });
// Connect to MongoDB and Starting the Apollo Server
connectToDB()
  .then(() => {
    console.log('Connected to batabase');
    apolloServer.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

// Starting the Apollo Server
// apolloServer.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });


// Middleware for /graphql endpoint
// app.use('/graphql', express.json(), expressMiddleware(apolloServer));

// app.get('/sky-headers', async (req, res) => {
//   const headerContent = await HeaderMenu.find({});
//   res.json(headerContent);
// });

