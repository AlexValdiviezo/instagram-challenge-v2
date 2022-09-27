require('dotenv').config()
require('../../settings/databaseConnection')

const postService = require('../../services/PostService')

test('get all posts', async() => {
    const posts = await postService.getAll()
    expect(posts).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: '632ca5a1ef0f2f3b06e01cf6',
                username: 'Fernando',
                title: 'titulo',
                image: 'https://media.revistagq.com/photos/613f011855410d2ed6954ee7/master/pass/2445034.jpg'
            })
        ])
    )
})

test.todo('paginate posts')

test.todo('get post by id')

test.todo('create one post')

test.todo('add like at post')

test.todo('delete post by Id')

test.todo('change title at post')