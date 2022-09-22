const Post = require("../models/Post")

class PostService{

    constructor(){
        this.desc = "post service"
    }

    getAll = async() => {
        const posts = await Post.find({})
        return posts
    }

    getById = async(id) => {
        const post = await Post.findById(id)
        return post
    }

    createOne = async({username, title, image}) => {
        const post = new Post({
            username,
            title,
            image
        })
        await post.save()
        return post
    }

    addLike = async(id) => {
        let {likes} = await Post.findById(id)
        likes++
        const post = await Post.findByIdAndUpdate(id, {likes})
        post.likes = likes
        return post
    }

    deleteById = async(id) => {
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}

const postService = new PostService()

module.exports = postService