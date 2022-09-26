const { gql } = require('apollo-server-core');

const typeDefs = gql`
    type Post{
        id: ID!
        title: String
        image: String!
        username: String!
        likes: Int!
    }

    input PostInput{
        title: String
        image: String!
        username: String!
    }

    type Query{
        getAllPosts: [Post]
        getOnePost(id: ID!): Post
    }


    type Mutation{
        createPost(post: PostInput): Post
        addLike(id: ID!): Post
        deletePostById(id: ID!): Post
        changeTitle(
        id: ID!
        ): Post
    }
`

module.exports = typeDefs