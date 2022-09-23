const express = require('express')
const {ApolloServer} = require('apollo-server-express')
const { gql } = require('apollo-server-core');

const typeDefs = gql`
    type Post{
        id: Int
        title: String
        image: String!
        username: String!
        likes: Int!
    }

    input PostInput{
        title: String
        image: String!
        username: String!
    }
    
    type Element{
        index: Int
        username: String
    }

    type Query{
        hello: Element
    }
    
    type Mutation{
        createPost(input:PostInput):Post
    }
`

const resolvers = {
    Query: {
        hello: () => { return {index: 1, username: 'carlos'} }
    },
    Mutation: {
        createPost: (_,{input: {title, image, username}}) => {
            return {
                id: 1,
                title,
                image,
                username,
                likes: 0
            }
        }
    }
}

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