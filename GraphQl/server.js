const express = require('express'); 
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./schema');

// Create an express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.post('/graphql', createHandler({ 
    schema, // GraphQL schema
 }));

app.listen({ port: 4000 });
console.log('GraphQL Server Listening to port 4000');