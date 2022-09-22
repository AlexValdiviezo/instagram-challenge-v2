const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const { check } = require('express-validator')

const { validationResult } = require('express-validator');

const myValidationResult = validationResult.withDefaults({
  formatter: error => {
    return {
      msg: error.msg,
      location: error.location
    };
  },
});

//get all posts
router.get('/', async(req, res) => {
    const posts = await Post.find({})
    res.status(200).json({
        msg: 'all posts working',
        posts
    })
})

//get one post
router.get('/:id', check('id').not().isEmpty(), async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.status(200).json({
        msg: 'post working',
        post
    })
})

//create post
router.post('/',async(req, res)=>{
    const {username, title, image} = req.body
    const post = new Post({
        username,
        title,
        image
    })
    await post.save()
    return res.status(201).json({
        msg: 'post created',
        post
    })
})

//put like ++ postT
router.put('/likes', check('id').isMongoId(), (req, res, next) => {

    const errors = myValidationResult(req).array()

    //errors es un vector tipado como objeto (?)

    if(errors.length>0) return res.status(400).json({ errors })
    
    next()

},async(req, res) => {

    const {id} = req.body
    let {likes} = await Post.findById(id)
    likes++
    const post = await Post.findByIdAndUpdate(id, {likes: likes})
    post.likes = likes
    return res.status(202).json({
        msg: 'like updated',
        post
    })

})

//delete post
router.delete('/', check('id').isMongoId(), async(req, res) => {
    const {id} = req.body
    const post = await Post.findByIdAndDelete(id)
    return res.status(202).json({
        msg: 'post deleted',
        post
    })
})

module.exports = router