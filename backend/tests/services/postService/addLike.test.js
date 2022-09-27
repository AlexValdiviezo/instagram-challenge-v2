require('dotenv').config()
require('../../../settings/databaseConnection')

const postService = require('../../../services/PostService')

test('add like at post - post received must be a object instance', async() => {
    const postFinded = await postService.createOne({username:'usernameTest', title:'titleTest', image:'http://imagetest.com'})
    const post = await postService.addLike(postFinded.id)
    await postService.deleteById(postFinded.id)
    expect(post).toBeInstanceOf(Object)
})

test('add like at post - if id not is a valid mongo id should be return a error', async() => {
    const post = await postService.addLike('invalidId')
    expect(post.error).toBe(true)
})