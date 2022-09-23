const postService = require('../../../services/PostService')

const getAllPosts = async () => {
    const posts = await postService.getAll()
    return posts
}

const getOnePost = async (_, {id: uid}) => {
    const {id, title, image, username, likes} =  await postService.getById(uid)
    return {id, title, image, username, likes}
}

const createPost = async (_, {post: {title, image, username}}) => {
    const post = await postService.createOne({username, title, image})
    return post
}

const addLike = async (_, {id}) => {
    const post = await postService.addLike(id)
    return post
}

const deletePostById = async (_, {id}) => {
    const post = await postService.deleteById(id)
    return post
}

module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    addLike,
    deletePostById
}