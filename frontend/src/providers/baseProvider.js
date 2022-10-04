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
        return await this.gqlc.query({
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
    async deletePost(id){
        return await this.gqlc.mutate({
            mutation: gql`
                mutation{
                    deletePostById(id: ${JSON.stringify(id)}){
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
    async addLike(id){
        return await this.gqlc.mutate({
            mutation: gql`
                mutation{
                    addLike(id: ${JSON.stringify(id)}){
                        id
                    }
                }
            `
        })
    }
}

const baseProvider = new BaseProvider()
baseProvider.setGqlc(apolloClient)
export default baseProvider