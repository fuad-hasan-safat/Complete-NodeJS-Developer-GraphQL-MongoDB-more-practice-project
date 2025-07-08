const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});

const resolversArray = loadFilesSync('**/*resolver.{js,ts}', {
  extensions: ['js', 'ts'],
  ignore: ['**/index.js', '**/index.ts'],
});

function startAppiliServer() {
  const app = express();

  const schema = makeExecutableSchema(
  {
    typeDefs: typesArray,
    resolvers: resolversArray,
  }
)
}


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen({ port: 4000 });
console.log('GraphQL Server Listening to port 4000');