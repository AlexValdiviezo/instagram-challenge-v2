const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const resolvers = require('../graphQL/resolvers/PostResolvers')
const typeDefs = require('../graphQL/types/PostTypes')
const cors = require('cors')

class Server{
    constructor(path){
        this.app = express()
        this.apolloServer = new ApolloServer({typeDefs, resolvers})
        this.postRoute = path + '/post'
        this.dbConnect()
        this.apolloServerStart()
        this.middlewares()
        this.routes()
    }

    dbConnect(){
        //TODO: errors control
        require('../settings/databaseConnection')
    }

    apolloServerStart = async()=>{
        await this.apolloServer.start();
        this.apolloServer.applyMiddleware({app: this.app})
    }

    middlewares(){
        this.app.use(express.urlencoded({
            extended: false
        }));
        this.app.use(express.json())
        //this.app.use(cors())
    }

    routes(){
        this.app.use(this.postRoute, require('../routes/post'))
    }

    listen(port){
        this.app.listen(port, ()=>{
            console.log(`server listen at port ${port}`)
        })
        //host:port/graphql => ApolloServer
        //host:port/post => Express 
    }
}

module.exports = Server