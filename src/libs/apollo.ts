import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nnr37v0gwf01yw9a4tcy1g/master',
    cache: new InMemoryCache(),
})