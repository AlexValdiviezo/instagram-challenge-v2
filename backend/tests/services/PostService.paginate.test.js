const { TextEncoder, TextDecoder } = require('util')
global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

require('dotenv').config()
require('../../settings/databaseConnection')

const { isValidObjectId } = require('mongoose')
const postService = require('../../services/PostService')


test.todo('comprobar si devuelve un objeto')

test.todo('comprobar si limitperpage es menor o igual al limite por parametro')

test.todo('comprobar que total sea un int')

test.todo('comprobar que total sea igual a la cantidad de registros')

test.todo('page debe retornar el valor del parametro')

test.todo('')
test.todo('')
test.todo('')
test.todo('')
test.todo('')
test.todo('')