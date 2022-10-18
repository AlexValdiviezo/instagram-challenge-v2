const { makeExecutableSchema } = require('graphql-tools')
require('graphql-import-node')
const PostTypes = require('./PostTypes.graphql')

const typeDefs = makeExecutableSchema({
    typeDefs: [
        PostTypes
    ]
})

module.exports = typeDefs