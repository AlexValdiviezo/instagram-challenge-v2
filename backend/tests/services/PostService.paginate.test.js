const mongoInMemory = require('../mongo-inmemory')
const postService = require('../../services/PostService')
const { isValidObjectId } = require('mongoose')

describe('paginate', () => {

  beforeAll(async () => {
    await mongoInMemory.connect()
    await postService.createOne({username:'usernameTest', title:'titleTest', image:'https://imageTest.com'})
  }); 

  test('paginate - is an object', async() => {
    const page = await postService.paginatePost()
    expect(page).toBeInstanceOf(Object)
  })
  
  test('paginate - item per page is less or equal than limit(parameter)', async() => {
    const {itemsPerPage} = await postService.paginatePost(1, 5)
    expect(itemsPerPage <= 5).toBe(true)
  })
  
  // test.todo('comprobar que total sea un int')
  test('paginate - total to be an int', async() => {
    const {total} = await postService.paginatePost()
    expect(isNaN(total)).toBe(false)
  })
  
  
  test('paginate - check if total is equal than documents', async () => {
    const {total} = await postService.paginatePost()
    expect(total === await postService.fetchTotalDocuments()).toBe(true)
  })
  
  
  test('paginate - param and page must be equal', async () => {
    const {page} = await postService.paginatePost(1,5)
    expect(page === 1).toBe(true)
  })

})