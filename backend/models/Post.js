const mongoose = require('mongoose');

const Post = mongoose.model('post', {
    username: {type:String, unique:false, index:true, required:true}, 
    title: {type:String, unique:false, required:false},
    image: {type:String, unique:false, required:true},
    likes: {type:Number, unique:false, index:false, default:0}
})

module.exports = Post