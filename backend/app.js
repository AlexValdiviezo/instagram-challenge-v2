require('dotenv').config()

const Server = require('./server/Server')

const server = new Server(process.env.API_REST)

server.listen(process.env.PORT)