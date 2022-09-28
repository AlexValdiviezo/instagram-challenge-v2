require('dotenv').config()
require('../../../settings/databaseConnection')

const { isValidObjectId } = require('mongoose')
const postService = require('../../../services/PostService')

test('delete post by id - post deleted is object', async() => {
    const postCreated = await postService.createOne({username: 'username', title: 'title', image:'https://imgsrc.com'})
    const post = await postService.deleteById(postCreated.id)
    expect(post).toBeInstanceOf(Object)
})

test('delete post by id - if Id is not a mongo ID should be return a error', async() => {
    const post = await postService.deleteById('nonMongoId')
    expect(post.error).toBe(true)
})

test('delete post by id - title must be a string or undefined', async() => {
    const postCreated = await postService.createOne({username: 'username', title: 'title', image:'https://imgsrc.com'})
    const {title} = await postService.deleteById(postCreated.id)
    expect(typeof(title)).toBe('string')
})

test('delete post by id - image must be a string & valid url', async() => {
    const postCreated = await postService.createOne({username: 'username', title: 'title', image:'https://imgsrc.com'})
    const {image} = await postService.deleteById(postCreated.id)
    expect(typeof(image)).toBe('string')
    expect(image.includes('http://', 0) || image.includes('https://', 0)).toBe(true)
})

test('delete post by id - username must be a string & mustnt have spaces', async() => {
    const postCreated = await postService.createOne({username: 'username', title: 'title', image:'https://imgsrc.com'})
    const {username} = await postService.deleteById(postCreated.id)
    expect(typeof(username)).toBe('string')
    for(char of username){
        expect(char).not.toBe(' ')
    }
})