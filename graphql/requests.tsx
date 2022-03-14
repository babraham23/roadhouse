import { client } from '../client';
import { gql } from 'graphql-tag';

const findAllUsersReq = gql`
    query {
        findAllUsers {
            id
            givenName
            surname
        }
    }
`;

const createUsersMutation = gql`
    mutation createUser(
        $givenName: String!
        $surname: String!
        $displayName: String!
        $jobTitle: String!
        $email: String!
        $teamId: String!
        $profilePicture: String!
        $holidayAllowance: Int!
        $role: Int!
    ) {
        createUser(
            givenName: $givenName
            surname: $surname
            displayName: $displayName
            jobTitle: $jobTitle
            email: $email
            teamId: $teamId
            profilePicture: $profilePicture
            holidayAllowance: $holidayAllowance
            role: $role
        ) {
            id
            givenName
            surname
        }
    }
`;

export const getUsers = async () => {
    const { data } = await client.query({ query: findAllUsersReq });
    return data;
};

export const postUser = async (
    givenName: string,
    surname: string,
    displayName: string,
    jobTitle: string,
    email: string,
    teamId: string,
    profilePicture: string,
    holidayAllowance: number,
    role: number
) => {
    const variables = {
        givenName,
        surname,
        displayName,
        jobTitle,
        email,
        teamId,
        profilePicture,
        holidayAllowance,
        role,
    };
    const { data } = await client.mutate({ mutation: createUsersMutation, variables });
    return data;
};
