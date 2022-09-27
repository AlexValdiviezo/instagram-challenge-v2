require('dotenv').config()
require('../../../settings/databaseConnection')

const { isValidObjectId } = require('mongoose')
const postService = require('../../../services/PostService')

test('get post by id - get post as object', async() => {
    const finded = await postService.getAll()
    const post = await postService.getById(finded[0].id)
    expect(post).toBeInstanceOf(Object)
})

test('get post by id - If id not is a MongoID return error', async() => {
    const post = await postService.getById('nonMongoId')
    expect(post.error).toBe(true)
})

test('get post by id - id received is a Mongo id', async() => {
    const finded = await postService.getAll()
    const {id} = await postService.getById(finded[0].id)
    expect(isValidObjectId(id)).toBe(true)
})

test('get post by id - title received is String', async() => {
    const finded = await postService.getAll()
    const {title} = await postService.getById(finded[0].id)
    expect(typeof(title)).toBe('string')
})

test('get post by id - username received is a String without spaces', async() => {
    const finded = await postService.getAll()
    const {username} = await postService.getById(finded[0].id)
    expect(typeof(username)).toEqual('string')
    for(char of username){
        expect(char).not.toBe(' ')
    }
})

test('get post by id - image received is a String && url type', async() => {
    const finded = await postService.getAll()
    const {image} = await postService.getById(finded[0].id)
    expect(typeof(image)).toEqual('string')
    expect(image.includes('http://', 0) || image.includes('https://', 0)).toBe(true)
})