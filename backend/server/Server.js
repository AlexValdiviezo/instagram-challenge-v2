const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const resolvers = require('../graphQL/resolvers/PostResolvers')
const typeDefs = require('../graphQL/types/PostTypes')


class Server{
    constructor(){
        this.app = express()
        this.apolloServer = new ApolloServer({typeDefs, resolvers})
        this.postRoute = '/post'
        this.port = 4001
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
    }

    routes(){
        this.app.use(this.postRoute, require('../routes/post'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`server listen at port ${this.port}`)
        })
        //host:port/graphql => ApolloServer
        //host:port/post => Express 
    }
}

module.exports = Server