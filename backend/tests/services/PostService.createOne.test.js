const mongoInMemory = require('../mongo-inmemory')
const postService = require('../../services/PostService')
const { isValidObjectId } = require('mongoose')

describe("Create Post", () => {

    beforeAll(async () => {
        await mongoInMemory.connect()
    });

    test('create one post - when the post was received must be an object', async() => {
        const post = await postService.createOne({username:'usernameTest', title:'titleTest', image:'https://imagetest.com'})
        expect(post).toBeInstanceOf(Object)
        expect(post.username).toBe('usernameTest')
        expect(isValidObjectId(post._id)).toBe(true)
    })

    test('create one post - if username is a string with spaces or void string, should be return a error', async() => {
        const postWithSpaces = await postService.createOne({username:'string with spaces', title:'titleTest', image:'https://imagetest.com'})
        const postWithVoidUsername = await postService.createOne({username:'', title:'titleTest', image:'https://imagetest.com'})

        expect(postWithSpaces.error).toBe(true)
        expect(postWithVoidUsername.error).toBe(true)
    })

    test('create one post - if username is not a string should be return a error', async() => {
        const post = await postService.createOne({username:false, title:'titleTest', image:'https://imagetest.com'})
        expect(post.error).toBe(true)
    })

    test('create one post - if title is undefined should its ok', async() => {
        const post = await postService.createOne({username:'username', image:'https://imagetest.com'})
        await postService.deleteById(post.id)
        expect(post.error).toBe(undefined)
        expect(post).toBeInstanceOf(Object)
    })

    test('create one post - if title is not a string should be return a error', async() => {
        const post = await postService.createOne({username:'username', title:123, image:'https://imagetest.com'})
        expect(post.error).toBe(true)
    })

    test('create one post - if image is not a valid url should be return a error', async() => {
        const post = await postService.createOne({username:'username', image:'invalidUrl'})
        expect(post.error).toBe(true)
    })

    test('create one post - if image is not a string should be return a error', async() => {
        const post = await postService.createOne({username:'username', image:123})
        expect(post.error).toBe(true)
    })

})