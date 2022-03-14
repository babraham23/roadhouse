import { onError } from '@apollo/client/link/error';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) graphQLErrors.map(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: errorLink.concat(createHttpLink({ uri: `http://localhost:9000/graphql` })),
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
        },
    },
});
