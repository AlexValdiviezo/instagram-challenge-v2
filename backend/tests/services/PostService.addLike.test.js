require('../settings/textEncoder').config()

require('dotenv').config()
require('../../settings/databaseConnection')

const { isValidObjectId } = require('mongoose')
const postService = require('../../services/PostService')

test('add like at post - post received must be a object instance & its ok', async() => {
    const {id} = await postService.createOne({username:'usernameTest', title:'titleTest', image:'http://imagetest.com'})
    const post = await postService.addLike(id)
    await postService.deleteById(id)
    expect(post.error).toBe(undefined)
    expect(post).toBeInstanceOf(Object)
})

test('add like at post - if id is not a valid mongo id should be return a error', async() => {
    const post = await postService.addLike('invalidId')
    expect(post.error).toBe(true)
})

test('add like at post - likes received should be an increase with the call', async() => {
    const {id, likes} = await postService.createOne({username:'usernameTest', title:'titleTest', image:'http://imagetest.com'})
    const testLikes = likes + 1
    const post = await postService.addLike(id)
    expect(post.likes).toBe(testLikes)
})

test('add like at post - username received must be a String without spaces', async() => {
    const postcreated = await postService.createOne({username:'usernameTest', title:'titleTest', image:'http://imagetest.com'})
    const {username} = await postService.addLike(postcreated.id)
    await postService.deleteById(postcreated.id)
    expect(typeof(username)).toBe('string')
    expect(username.includes(' ')).toBe(false)
})

test('add like at post - id received must be a valid MongoId', async() => {
    const postcreated = await postService.createOne({username:'usernameTest', title:'titleTest', image:'http://imagetest.com'})
    const {id} = await postService.addLike(postcreated.id)
    await postService.deleteById(postcreated.id)
    expect(isValidObjectId(id)).toBe(true)
})

test('add like at post - if title is not undefined should be return a string type', async()=>{
    const postcreated = await postService.createOne({username:'usernameTest', title:'titleTest', image:'http://imagetest.com'})
    const {title} = await postService.addLike(postcreated.id)
    await postService.deleteById(postcreated.id)
    if(title!=undefined) expect(typeof(title)).toBe('string')
    else expect(title).toBe(undefined)
})

test('add like at post - image received must be a valid url', async() => {
    const postcreated = await postService.createOne({username:'usernameTest', title:'titleTest', image:'http://imagetest.com'})
    const {image} = await postService.addLike(postcreated.id)
    await postService.deleteById(postcreated.id)
    expect(typeof(image)).toBe('string')
    expect(image.includes('http://', 0) || image.includes('https://', 0)).toBe(true)
})