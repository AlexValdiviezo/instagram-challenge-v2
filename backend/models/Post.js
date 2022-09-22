const mongoose = require('mongoose');

const Post = mongoose.model('post', {
    username: {type:String, unique:false, index:true}, 
    title: String,
    image: String,
    likes: {type:Number, unique:false, index:false, default:0}
})

module.exports = Post