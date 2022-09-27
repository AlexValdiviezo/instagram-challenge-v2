require('dotenv').config()
require('../../../settings/databaseConnection')

const { isValidObjectId } = require('mongoose')
const postService = require('../../../services/PostService')

test('create one post - post received must be a object', async() => {
    const post = await postService.createOne({username:'usernameTest', title:'titleTest', image:'https://imagetest.com'})
    await postService.deleteById(post.id)
    expect(post).toBeInstanceOf(Object)
})

test('create one post - if username is a string with spaces or void string, should be return a error', async() => {
    const postWithSpaces = await postService.createOne({username:'string with spaces', title:'titleTest', image:'https://imagetest.com'})
    const postWithVoidUsername = await postService.createOne({username:'', title:'titleTest', image:'https://imagetest.com'})
    await postService.deleteById(postWithSpaces.id)
    await postService.deleteById(postWithVoidUsername.id)
    expect(postWithSpaces.error).toBe(true)
    expect(postWithVoidUsername.error).toBe(true)
})

test('create one post - if username not is a string should be return a error', async() => {
    const post = await postService.createOne({username:false, title:'titleTest', image:'https://imagetest.com'})
    await postService.deleteById(post.id)
    expect(post.error).toBe(true)
})

test('create one post - if title is undefined should its ok', async() => {
    const post = await postService.createOne({username:'username', image:'https://imagetest.com'})
    await postService.deleteById(post.id)
    expect(post.error).toBe(undefined)
    expect(post).toBeInstanceOf(Object)
})

test('create one post - if title not is a string should be return a error', async() => {
    const post = await postService.createOne({username:'username', title:123, image:'https://imagetest.com'})
    await postService.deleteById(post.id)
    expect(post.error).toBe(true)
})

test('create one post - if image not is a valid url should be return a error', async() => {
    const post = await postService.createOne({username:'username', image:'invalidUrl'})
    await postService.deleteById(post.id)
    expect(post.error).toBe(true)
})

test('create one post - if image not is a string should be return a error', async() => {
    const post = await postService.createOne({username:'username', image:123})
    expect(post.error).toBe(true)
})