
// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };