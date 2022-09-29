require('../settings/textEncoder').config()

require('dotenv').config()
require('../../settings/databaseConnection')

const { isValidObjectId } = require('mongoose')
const postService = require('../../services/PostService')


test.todo('comprobar si devuelve un objeto')
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
  console.log(total, "esto deberia ser un numero")
  expect(typeof(total)).toBe(typeof(Number))
})


test.todo('comprobar que total sea igual a la cantidad de registros')

test.todo('page debe retornar el valor del parametro')

// test.todo('i')

// test.todo('')
// test.todo('')
// test.todo('')
// test.todo('')
// test.todo('')