const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
      test: {
        type: GraphQLString,
        resolve: () => 'test is done',
      },
    },
  }),
});

module.exports = schema;