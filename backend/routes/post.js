const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const { check } = require('express-validator')
const { validationErrors } = require('../middlewares/validationResult')

//import controllers

const {
    getAllPosts,
    getOnePost,
    createPost,
    addLike,
    deletePost
} = require('../controllers/post')


//get all posts

router.get('/', getAllPosts)

//get one post

router.get('/:id', check('id').isMongoId(), validationErrors, getOnePost)

//create post

router.post('/', createPost)

//put like ++ postT

router.put('/likes', check('id').isMongoId(), validationErrors, addLike)

//delete post
router.delete('/', check('id').isMongoId(), deletePost)

module.exports = router