const mongoInMemory = require('../mongo-inmemory')
const postService = require('../../services/PostService')
const { isValidObjectId } = require('mongoose')

describe('get all posts', () => {

    beforeAll(async () => {
        await mongoInMemory.connect()
        await postService.createOne({username:'usernameTest', title:'titleTest', image:'https://imageTest.com'})
    });

    test('get all posts - posts is a Array', async() => {
        const posts = await postService.getAll()
        expect(posts).toBeInstanceOf(Array)
    })
    
    test('get all posts - posts is a array with objects', async()=>{
        const posts = await postService.getAll()
        for(let e of posts){
            expect(e).toBeInstanceOf(Object)
        }
    })
    
    test('get all posts - id is a MongoID', async() =>{
        const posts = await postService.getAll()
        for(let {id} of posts){
            expect(isValidObjectId(id)).toBe(true);
        }
    })
    
    test('get all posts - title is a String', async() => {
        const posts = await postService.getAll()
        for(let {title} of posts){
            if(title) expect(typeof(title)).toBe('string')
        }
    })
    
    test('get all posts - username is a String', async() => {
        const posts = await postService.getAll()
        for(let {username} of posts){
            expect(typeof(username)).toBe('string')
        }
    })
    
    test('get all posts - username mustnt have many space', async() => {
        const posts = await postService.getAll()
        for(let {username} of posts){
            for(let char of username){
                expect(char).not.toBe(' ')
            } 
        }
    })
    
    test('get all posts - image is a String', async() => {
        const posts = await postService.getAll()
        for(let {image} of posts){
            expect(typeof(image)).toBe('string')
        }
    })
    
    test('get all posts - image is a valid url', async() => {
        const posts = await postService.getAll()
        for(let {image} of posts){
            expect(image.includes('http://', 0) || image.includes('https://', 0)).toBe(true)
        }
    })

})

