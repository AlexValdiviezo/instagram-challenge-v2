const {request, response} = require('express')

//import PostService from Model Post
const postService = require('../services/PostService')

const getAllPosts = async(request, response) => {
    const posts = await postService.getAll()
    return response.status(200).json({ posts })
}

const getOnePost = async(request, response) => {
    const post =  await postService.getById(request.params.id)
    return response.status(200).json({ post })
}

const createPost = async(request, response)=>{
    const {username, title, image} = request.body
    const post = await postService.createOne({username, title, image})
    return response.status(201).json({ post })
}

const addLike = async(request, response) => {
    const post = await postService.addLike(request.body.id)
    return response.status(202).json({ post })
}

const deletePostById = async(request, response) => {
    const post = await postService.deleteById(request.body.id)
    return response.status(202).json({ post })
}

module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    addLike,
    deletePostById
}