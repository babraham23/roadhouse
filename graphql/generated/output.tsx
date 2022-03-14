import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthSessionClass = {
  __typename?: 'AuthSessionClass';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Float'];
  idToken: Scalars['String'];
  issuedAt: Scalars['Float'];
  refreshToken: Scalars['String'];
};

export type InventoryRequest = {
  __typename?: 'InventoryRequest';
  description: Scalars['String'];
  status: Scalars['Float'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createInventoryRequest: InventoryRequest;
  createUser: UserClass;
  createUserSession: AuthSessionClass;
  deleteUserSession: AuthSessionClass;
};


export type MutationCreateInventoryRequestArgs = {
  description: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateUserArgs = {
  displayName?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  givenName?: InputMaybe<Scalars['String']>;
  holidayAllowance?: InputMaybe<Scalars['Float']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  microsoftId: Scalars['String'];
  mobileNumber?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Float']>;
  roleSubCategory?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUserSessionArgs = {
  accessToken: Scalars['String'];
  expiresIn: Scalars['Float'];
  idToken: Scalars['String'];
  issuedAt: Scalars['Float'];
  refreshToken: Scalars['String'];
};


export type MutationDeleteUserSessionArgs = {
  accessToken: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allInventoryRequests: Array<InventoryRequest>;
  allUsers: Array<UserClass>;
};

export type UserClass = {
  __typename?: 'UserClass';
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  givenName?: Maybe<Scalars['String']>;
  holidayAllowance?: Maybe<Scalars['Float']>;
  jobTitle?: Maybe<Scalars['String']>;
  microsoftId: Scalars['String'];
  mobileNumber?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Float']>;
  roleSubCategory?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  teamId?: Maybe<Scalars['String']>;
};

export type CreateUserMutationVariables = Exact<{
  microsoftId: Scalars['String'];
  email: Scalars['String'];
  role?: InputMaybe<Scalars['Float']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  holidayAllowance?: InputMaybe<Scalars['Float']>;
  roleSubCategory?: InputMaybe<Scalars['String']>;
  mobileNumber?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['String']>;
  teamId?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserClass', givenName?: string | null | undefined, surname?: string | null | undefined, displayName?: string | null | undefined, jobTitle?: string | null | undefined, email: string, teamId?: string | null | undefined, roleSubCategory?: string | null | undefined, profilePicture?: string | null | undefined, mobileNumber?: string | null | undefined, holidayAllowance?: number | null | undefined, role?: number | null | undefined, microsoftId: string } };

export type CreateUserSessionMutationVariables = Exact<{
  refreshToken: Scalars['String'];
  issuedAt: Scalars['Float'];
  idToken: Scalars['String'];
  expiresIn: Scalars['Float'];
  accessToken: Scalars['String'];
}>;


export type CreateUserSessionMutation = { __typename?: 'Mutation', createUserSession: { __typename?: 'AuthSessionClass', accessToken: string, expiresIn: number, idToken: string, issuedAt: number, refreshToken: string } };

export type DeleteUserSessionMutationVariables = Exact<{
  accessToken: Scalars['String'];
}>;


export type DeleteUserSessionMutation = { __typename?: 'Mutation', deleteUserSession: { __typename?: 'AuthSessionClass', accessToken: string } };

export type AllInventoryRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllInventoryRequestsQuery = { __typename?: 'Query', allInventoryRequests: Array<{ __typename?: 'InventoryRequest', title: string, description: string, userId: string, status: number }> };


export const CreateUserDocument = gql`
    mutation CreateUser($microsoftId: String!, $email: String!, $role: Float, $jobTitle: String, $displayName: String, $holidayAllowance: Float, $roleSubCategory: String, $mobileNumber: String, $profilePicture: String, $teamId: String, $surname: String, $givenName: String) {
  createUser(
    microsoftId: $microsoftId
    email: $email
    role: $role
    jobTitle: $jobTitle
    displayName: $displayName
    holidayAllowance: $holidayAllowance
    roleSubCategory: $roleSubCategory
    mobileNumber: $mobileNumber
    profilePicture: $profilePicture
    teamId: $teamId
    surname: $surname
    givenName: $givenName
  ) {
    givenName
    surname
    displayName
    jobTitle
    email
    teamId
    roleSubCategory
    profilePicture
    mobileNumber
    holidayAllowance
    role
    microsoftId
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      microsoftId: // value for 'microsoftId'
 *      email: // value for 'email'
 *      role: // value for 'role'
 *      jobTitle: // value for 'jobTitle'
 *      displayName: // value for 'displayName'
 *      holidayAllowance: // value for 'holidayAllowance'
 *      roleSubCategory: // value for 'roleSubCategory'
 *      mobileNumber: // value for 'mobileNumber'
 *      profilePicture: // value for 'profilePicture'
 *      teamId: // value for 'teamId'
 *      surname: // value for 'surname'
 *      givenName: // value for 'givenName'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const CreateUserSessionDocument = gql`
    mutation CreateUserSession($refreshToken: String!, $issuedAt: Float!, $idToken: String!, $expiresIn: Float!, $accessToken: String!) {
  createUserSession(
    refreshToken: $refreshToken
    issuedAt: $issuedAt
    idToken: $idToken
    expiresIn: $expiresIn
    accessToken: $accessToken
  ) {
    accessToken
    expiresIn
    idToken
    issuedAt
    refreshToken
  }
}
    `;
export type CreateUserSessionMutationFn = Apollo.MutationFunction<CreateUserSessionMutation, CreateUserSessionMutationVariables>;

/**
 * __useCreateUserSessionMutation__
 *
 * To run a mutation, you first call `useCreateUserSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserSessionMutation, { data, loading, error }] = useCreateUserSessionMutation({
 *   variables: {
 *      refreshToken: // value for 'refreshToken'
 *      issuedAt: // value for 'issuedAt'
 *      idToken: // value for 'idToken'
 *      expiresIn: // value for 'expiresIn'
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useCreateUserSessionMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserSessionMutation, CreateUserSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserSessionMutation, CreateUserSessionMutationVariables>(CreateUserSessionDocument, options);
      }
export type CreateUserSessionMutationHookResult = ReturnType<typeof useCreateUserSessionMutation>;
export type CreateUserSessionMutationResult = Apollo.MutationResult<CreateUserSessionMutation>;
export type CreateUserSessionMutationOptions = Apollo.BaseMutationOptions<CreateUserSessionMutation, CreateUserSessionMutationVariables>;
export const DeleteUserSessionDocument = gql`
    mutation DeleteUserSession($accessToken: String!) {
  deleteUserSession(accessToken: $accessToken) {
    accessToken
  }
}
    `;
export type DeleteUserSessionMutationFn = Apollo.MutationFunction<DeleteUserSessionMutation, DeleteUserSessionMutationVariables>;

/**
 * __useDeleteUserSessionMutation__
 *
 * To run a mutation, you first call `useDeleteUserSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserSessionMutation, { data, loading, error }] = useDeleteUserSessionMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *   },
 * });
 */
export function useDeleteUserSessionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserSessionMutation, DeleteUserSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserSessionMutation, DeleteUserSessionMutationVariables>(DeleteUserSessionDocument, options);
      }
export type DeleteUserSessionMutationHookResult = ReturnType<typeof useDeleteUserSessionMutation>;
export type DeleteUserSessionMutationResult = Apollo.MutationResult<DeleteUserSessionMutation>;
export type DeleteUserSessionMutationOptions = Apollo.BaseMutationOptions<DeleteUserSessionMutation, DeleteUserSessionMutationVariables>;
export const AllInventoryRequestsDocument = gql`
    query AllInventoryRequests {
  allInventoryRequests {
    title
    description
    userId
    status
  }
}
    `;

/**
 * __useAllInventoryRequestsQuery__
 *
 * To run a query within a React component, call `useAllInventoryRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllInventoryRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllInventoryRequestsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllInventoryRequestsQuery(baseOptions?: Apollo.QueryHookOptions<AllInventoryRequestsQuery, AllInventoryRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllInventoryRequestsQuery, AllInventoryRequestsQueryVariables>(AllInventoryRequestsDocument, options);
      }
export function useAllInventoryRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllInventoryRequestsQuery, AllInventoryRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllInventoryRequestsQuery, AllInventoryRequestsQueryVariables>(AllInventoryRequestsDocument, options);
        }
export type AllInventoryRequestsQueryHookResult = ReturnType<typeof useAllInventoryRequestsQuery>;
export type AllInventoryRequestsLazyQueryHookResult = ReturnType<typeof useAllInventoryRequestsLazyQuery>;
export type AllInventoryRequestsQueryResult = Apollo.QueryResult<AllInventoryRequestsQuery, AllInventoryRequestsQueryVariables>;