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

async function startAppiliServer() {
  const app = express();

  const schema = makeExecutableSchema(
  {
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({
    schema
  });

  await server.start();
  server.applyMiddleware({
    app, path: '/graphql'
  })

  app.listen(3000, ()=>{
     console.log('Runninh graphql server....')
  });
}

startAppiliServer();
