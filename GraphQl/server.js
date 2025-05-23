const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
// const schema = require('./schema');


const schema = buildSchema(
    `
    type Query {
        products: [Product]
    }

    type Product {
        id: ID!
        price: Float!
        review: [Review]
        description: String!
    }

    type Review {
        rating: Int!
        text: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
    `
)
// Create an express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const root = {
    products: [
        {
            id: 'redshoe',
            price: 100,
            description: 'Good',
            review: [{ rating: 5, text: 'Good' }]
        },
        {
            id: 'blueshoe',
            price: 200,
            description: 'Good',
            review: [{ rating: 4, text: 'Good' }]
        },
        {
            id: 'greenshoe',
            price: 300,
            description: 'Good',
            review: [{ rating: 3, text: 'Good' }]
        },
        {
            id: 'whiteshoe',
            price: 400,
            description: 'Good',
            review: [{ rating: 2, text: 'Good' }]
        },
        {
            id: 'blackshoe',
            price: 500,
            description: 'Good',
            review: [{ rating: 1, text: 'Good' }]
        },
    ],

    orders: [
        {
            date: '2020-01-01',
            subtotal: 100,
            items: [
                {
                    product: {
                        id: 'redshoe',
                        price: 100,
                        description: 'Good',
                        // review: [{ rating: 5, text: 'Good' }]
                    },
                    quantity: 1
                }
            ]
        }
    ]
}

const app = express();


app.use('/graphql', graphqlHTTP({
    schema: schema, // GraphQL schema
    rootValue: root, // root value
    graphiql: true,
}));

app.listen({ port: 4000 });
console.log('GraphQL Server Listening to port 4000');