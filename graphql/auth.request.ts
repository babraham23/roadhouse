import { client } from '../client';
import { gql } from 'graphql-tag';

const createAuthSessionMutation = gql`
    mutation createAuthSession($accessToken: String!, $expiresIn: Int!) {
        createAuthSession(accessToken: $accessToken, expiresIn: $expiresIn) {
            accessToken
            expiresIn
        }
    }
`;
export const postAuthSession = async (accessToken: string, expiresIn: number) => {
    const variables = {
        accessToken,
        expiresIn,
    };
    const { data } = await client.mutate({
        mutation: createAuthSessionMutation,
        variables,
    });
    return data;
};

const removeAuthSessionMutation = gql`
    mutation removeAuthSession($accessToken: String!, $userId: String!) {
        removeAuthSession(accessToken: $accessToken, userId: $userId) {
            accessToken
            userId
        }
    }
`;
export const removeAuthSession = async (accessToken: string, userId: string) => {
    const variables = {
        accessToken,
        userId,
    };
    const { data } = await client.mutate({
        mutation: removeAuthSessionMutation,
        variables,
    });
    return data;
};
