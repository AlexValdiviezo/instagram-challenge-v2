const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.postRoute = '/post'
        this.port = 4001
        this.dbConnect()
        this.middlewares()
        this.routes()
    }
    dbConnect(){
        //TODO: errors control
        require('../settings/databaseConnection')
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
    }
}

module.exports = Server