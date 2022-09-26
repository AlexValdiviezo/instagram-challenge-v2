const Post = require("../models/Post")

class PostService{

    constructor(){
        this.desc = "post service"
    }

    getAll = async() => {
        const posts = await Post.find({})
        return posts
    }

    paginatePost = async(page=1, limit=5) => {
        const posts = await Post.find({}, {
            skip: page*limit,
            page
        })
        const total = await Post.count({})
        return {
            total,
            page,
            itemsPerPage: posts.length,
            items: posts
        }
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
        const post = await Post.findByIdAndUpdate(id, {likes: post.likes}, {new: true})
        return post
    }

    deleteById = async(id) => {
        const post = await Post.findByIdAndDelete(id)
        return post
    }

    changeTitleService = async(id, newTitle) => {
        const post = await Post.findByIdAndUpdate(id, {title: newTitle}, {new: true})
        return post
    }
}

const postService = new PostService()

module.exports = postService