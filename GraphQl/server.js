const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});

const resolversArray = loadFilesSync('**/*resolver.{js,ts}', {
  extensions: ['js', 'ts'],
  ignore: ['**/index.js', '**/index.ts'],
});

const schema = makeExecutableSchema(
    {
        typeDefs: typesArray,
        resolvers: resolversArray,
    }
)


const app = express();


app.use('/graphql', graphqlHTTP({
    schema: schema, 
    graphiql: true,
}));

app.listen({ port: 4000 });
console.log('GraphQL Server Listening to port 4000');