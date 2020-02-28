const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const movieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    }
  })
})

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: movieType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {

      }
    }
  }
})

module.exports = new GraphQLSchema({
  query
})