import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import { createHttpLink } from "apollo-link-http";

const cache = new InMemoryCache({addTypename: false})

const apolloClient = new ApolloClient({
    link: createHttpLink({ uri: "/graphql" }),
    cache,
})

export default apolloClient