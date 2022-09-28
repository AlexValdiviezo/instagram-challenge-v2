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

    type PaginatePost{
        total: Int
        page: Int
        itemsPerPage: Int
        items: [Post]
    }

    type Query{
        getAllPosts: [Post]
        getOnePost(id: ID!): Post
        getPaginatedPosts(page:Int, limit:Int): PaginatePost
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