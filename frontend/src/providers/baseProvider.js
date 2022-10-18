import gql from 'graphql-tag'
import apolloClient from '../apollo'

class BaseProvider{
    constructor(){
        this.gqlc = null
    }

    setGqlc(gqlc){
        this.gqlc = gqlc
    }
    async getAllPosts(username = ''){
        const {data: {getAllPosts: posts}} = await this.gqlc.query({
            query: gql`
                query{
                    getAllPosts(username: ${JSON.stringify(username)}){
                        id
                        username
                        title
                        image
                        likes                        
                    }
                }
            `
        })
        return await posts
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
    async uploadPost({title, image, username}){
        return await this.gqlc.mutate({
            mutation: gql`
                mutation{
                    createPost(post: {
                        title: ${JSON.stringify(title)}
                        image: ${JSON.stringify(image)}
                        username: ${JSON.stringify(username)}
                    }) {
                        title
                        image
                        username
                        likes
                        id
                    }
                }
            `
        })
    }
    async getOnePost({id = String}){
        return await this.gqlc.query({
            query: gql`
                query{
                    getOnePost(id: ${JSON.stringify(id)}){
                        title
                        image
                        username
                    }
                }
            `
        })
    }
    async updatePost({id = String, title = String, image = String, username = String}){
        return await this.gqlc.mutate({
            mutation: gql`
                mutation{
                    updatePost(post: {
                        id: ${JSON.stringify(id)}
                        title: ${JSON.stringify(title)}
                        image: ${JSON.stringify(image)}
                        username: ${JSON.stringify(username)}
                    }){
                        id
                        title
                        image
                        username
                        likes
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