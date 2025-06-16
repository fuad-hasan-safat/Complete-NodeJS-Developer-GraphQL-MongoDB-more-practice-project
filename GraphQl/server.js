const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});

const schema = makeExecutableSchema(
    {
        typeDefs: typesArray,
        resolvers: {
            Query: {
                products: async (parent, args, context, info) => {
                    console.log('Fetching products');
                    const product = await Promise.resolve( parent.products);
                    return product;
                },
                orders: async (parent, args, context, info) => {
                    console.log('Fetching orders');
                    const orders = await Promise.resolve( parent.orders);
                    return orders;
                },
            }

        },
    }
)

const root = {
    products: require('./products/products.model'),

    orders: require('./orders/orders.model'),
}

const app = express();


app.use('/graphql', graphqlHTTP({
    schema: schema, 
    rootValue: root, 
    graphiql: true,
}));

app.listen({ port: 4000 });
console.log('GraphQL Server Listening to port 4000');