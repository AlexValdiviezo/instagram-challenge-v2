import gql from 'graphql-tag'
import apolloClient from '../apollo'

class BaseProvider{
    constructor(){
        this.gqlc = null
    }

    setGqlc(gqlc){
        this.gqlc = gqlc
    }
    async getAllPosts(){
        return this.gqlc.query({
            query: gql`
                query{
                    getAllPosts{
                        id
                        username
                        title
                        image
                        likes                        
                    }
                }
            `
        })
    }
    
}

const baseProvider = new BaseProvider()
baseProvider.setGqlc(apolloClient)
export default baseProvider