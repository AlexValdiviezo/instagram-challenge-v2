class Encoder{
    constructor(){
        this.textEncoder = require('util').TextEncoder
        this.textDecoder = require('util').TextDecoder
    }
    config(){
        global.TextEncoder = this.textEncoder
        global.TextDecoder = this.textDecoder
    }
}
const encoder = new Encoder()

module.exports = encoder