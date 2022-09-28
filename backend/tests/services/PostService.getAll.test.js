require('dotenv').config()
require('../../settings/databaseConnection')

const { isValidObjectId } = require('mongoose')
const postService = require('../../services/PostService')

test('get all posts - posts is a Array', async() => {
    const posts = await postService.getAll()
    expect(posts).toBeInstanceOf(Array)
})

test('get all posts - posts is a array with objects', async()=>{
    const posts = await postService.getAll()
    for(e of posts){
        expect(e).toBeInstanceOf(Object)
    }
})

test('get all posts - id is a MongoID', async() =>{
    const posts = await postService.getAll()
    for({id} of posts){
        expect(isValidObjectId(id)).toBe(true);
    }
})

test('get all posts - title is a String', async() => {
    const posts = await postService.getAll()
    for({title} of posts){
        if(title) expect(typeof(title)).toBe('string')
    }
})

test('get all posts - username is a String', async() => {
    const posts = await postService.getAll()
    for({username} of posts){
        expect(typeof(username)).toBe('string')
    }
})

test('get all posts - username mustnt have many space', async() => {
    const posts = await postService.getAll()
    for({username} of posts){
        for(char of username){
            expect(char).not.toBe(' ')
        } 
    }
})

test('get all posts - image is a String', async() => {
    const posts = await postService.getAll()
    for({image} of posts){
        expect(typeof(image)).toBe('string')
    }
})

test('get all posts - image is a valid url', async() => {
    const posts = await postService.getAll()
    for({image} of posts){
        expect(image.includes('http://', 0) || image.includes('https://', 0)).toBe(true)
    }
})