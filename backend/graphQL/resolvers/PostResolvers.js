//import PostService from Model Post
const postService = require("../../services/PostService")

const resolvers = {
    Query: {
        getAllPosts: async () => {
            const posts = await postService.getAll()
            return posts
        },
        getOnePost: async (_, {id: uid}) => {
            const {id, title, image, username, likes} =  await postService.getById(uid)
            return {id, title, image, username, likes}
        },
    },
    Mutation: {
        createPost: async (_,{post: {title, image, username}}) => {
            const post = await postService.createOne({username, title, image})
            return post
        },
        addLike: async (_, {id}) => {
            const post = await postService.addLike(id)
            return post
        },
        deletePostById: async (_, {id}) => {
            const post = await postService.deleteById(id)
            return post
        },
        changeTitle: async (_,{id, newTitle} ) => {
            const post = await postService.changeTitleService(id, newTitle)
            return post
        }
    }
}

module.exports = resolvers