import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_LOCAL_URI,
    headers: {
        'Authorization': 'Bearer ' + import.meta.env.VITE_LOCAL_ACESS_TOKEN
    },
    cache: new InMemoryCache(),
})