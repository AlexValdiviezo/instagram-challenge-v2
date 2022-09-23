const { getAllPosts, getOnePost, createPost, addLike, deletePostById } = require("./controllers/post")

const resolvers = {
    Query: {
        getAllPosts,
        getOnePost
    },
    Mutation: {
        createPost,
        addLike,
        deletePostById
    }
}

module.exports = resolvers