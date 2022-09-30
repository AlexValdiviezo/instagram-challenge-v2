const mongoInMemory = require('../mongo-inmemory')
const postService = require('../../services/PostService')
const { isValidObjectId } = require('mongoose')

describe('delete post by id', () =>{

    beforeAll(async () => {
        await mongoInMemory.connect()
    });

    test('post deleted is an object', async() => {
        const postCreated = await postService.createOne({username: 'username', title: 'title', image:'https://imgsrc.com'})
        const post = await postService.deleteById(postCreated.id)
        expect(post).toBeInstanceOf(Object)
    })
    
    test('if Id is not a mongo ID should be return a error', async() => {
        const post = await postService.deleteById('nonMongoId')
        expect(post.error).toBe(true)
    })
    
    test('title must be a string or undefined', async() => {
        const postCreated = await postService.createOne({username: 'username', title: 'title', image:'https://imgsrc.com'})
        const {title} = await postService.deleteById(postCreated.id)
        expect(typeof(title)).toBe('string')
    })
    
    test('image must be a string & valid url', async() => {
        const postCreated = await postService.createOne({username: 'username', title: 'title', image:'https://imgsrc.com'})
        const {image} = await postService.deleteById(postCreated.id)
        expect(typeof(image)).toBe('string')
        expect(image.includes('http://', 0) || image.includes('https://', 0)).toBe(true)
    })
    
    test('username must be a string & mustnt have spaces', async() => {
        const postCreated = await postService.createOne({username: 'username', title: 'title', image:'https://imgsrc.com'})
        const {username} = await postService.deleteById(postCreated.id)
        expect(typeof(username)).toBe('string')
        for(let char of username){
            expect(char).not.toBe(' ')
        }
    })

})