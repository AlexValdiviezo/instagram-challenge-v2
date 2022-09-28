const postService = require('../../services/PostService')

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
        getPaginatedPosts: async(_, {page, limit}) => {
            const posts = await postService.paginatePost(page, limit)
            return posts
        }
    },
    Mutation: {
        createPost: async (_, {post: {title, image, username}}) => {
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
        }
    }
}

module.exports = resolvers