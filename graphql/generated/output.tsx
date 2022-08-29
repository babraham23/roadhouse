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

export type GeometryClass = {
    __typename?: 'GeometryClass';
    lat: Scalars['Float'];
    lng: Scalars['Float'];
};

export type Mutation = {
    __typename?: 'Mutation';
    createBasicUser: UserClass;
    createPlace: PlacesClass;
    createUser: UserClass;
    likePlace: UserClass;
    updateGeometryInPlace: GeometryClass;
};

export type MutationCreateBasicUserArgs = {
    deviceId: Scalars['String'];
};

export type MutationCreatePlaceArgs = {
    Address1: Scalars['String'];
    Address2?: InputMaybe<Scalars['String']>;
    city: Scalars['String'];
    country?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    keywords?: InputMaybe<Array<Scalars['String']>>;
    lat?: InputMaybe<Scalars['Float']>;
    lng?: InputMaybe<Scalars['Float']>;
    placeName: Scalars['String'];
    postcode: Scalars['String'];
};

export type MutationCreateUserArgs = {
    deviceId: Scalars['Float'];
    email: Scalars['String'];
    firstName: Scalars['String'];
    isCustomer: Scalars['Boolean'];
    lastName: Scalars['String'];
    password: Scalars['String'];
};

export type MutationLikePlaceArgs = {
    _id: Scalars['String'];
    likedPlace: Scalars['String'];
};

export type MutationUpdateGeometryInPlaceArgs = {
    _id: Scalars['String'];
    lat: Scalars['Float'];
    lng: Scalars['Float'];
};

export type PlacesClass = {
    __typename?: 'PlacesClass';
    Address1?: Maybe<Scalars['String']>;
    Address2?: Maybe<Scalars['String']>;
    _id: Scalars['String'];
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    formattedAddress?: Maybe<Scalars['String']>;
    geometry?: Maybe<GeometryClass>;
    keywords?: Maybe<Array<Scalars['String']>>;
    placeName?: Maybe<Scalars['String']>;
    postcode?: Maybe<Scalars['String']>;
};

export type Query = {
    __typename?: 'Query';
    allUsers: Array<UserClass>;
    getUser: UserClass;
};

export type UserClass = {
    __typename?: 'UserClass';
    _id: Scalars['String'];
    deviceId?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    isCustomer?: Maybe<Scalars['Boolean']>;
    lastName?: Maybe<Scalars['String']>;
    likedPlaces: Array<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
};

export type CreatePlaceMutationVariables = Exact<{
    city: Scalars['String'];
    postcode: Scalars['String'];
    address1: Scalars['String'];
    placeName: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    address2?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    lat?: InputMaybe<Scalars['Float']>;
    lng?: InputMaybe<Scalars['Float']>;
    keywords?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type CreatePlaceMutation = {
    __typename?: 'Mutation';
    createPlace: {
        __typename?: 'PlacesClass';
        _id: string;
        placeName?: string | null | undefined;
        description?: string | null | undefined;
        Address1?: string | null | undefined;
        Address2?: string | null | undefined;
        postcode?: string | null | undefined;
        city?: string | null | undefined;
        country?: string | null | undefined;
        formattedAddress?: string | null | undefined;
        keywords?: Array<string> | null | undefined;
        geometry?: { __typename?: 'GeometryClass'; lat: number; lng: number } | null | undefined;
    };
};

export type UpdateGeometryInPlaceMutationVariables = Exact<{
    id: Scalars['String'];
    lng: Scalars['Float'];
    lat: Scalars['Float'];
}>;

export type UpdateGeometryInPlaceMutation = { __typename?: 'Mutation'; updateGeometryInPlace: { __typename?: 'GeometryClass'; lat: number; lng: number } };

export type CreateBasicUserMutationVariables = Exact<{
    deviceId: Scalars['String'];
}>;

export type CreateBasicUserMutation = { __typename?: 'Mutation'; createBasicUser: { __typename?: 'UserClass'; _id: string; deviceId?: string | null | undefined } };

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = { __typename?: 'Query'; getUser: { __typename?: 'UserClass'; deviceId?: string | null | undefined; likedPlaces: Array<string> } };

export const CreatePlaceDocument = gql`
    mutation CreatePlace(
        $city: String!
        $postcode: String!
        $address1: String!
        $placeName: String!
        $description: String
        $address2: String
        $country: String
        $lat: Float
        $lng: Float
        $keywords: [String!]
    ) {
        createPlace(
            city: $city
            postcode: $postcode
            Address1: $address1
            placeName: $placeName
            description: $description
            Address2: $address2
            country: $country
            lat: $lat
            lng: $lng
            keywords: $keywords
        ) {
            _id
            placeName
            description
            Address1
            Address2
            postcode
            city
            country
            formattedAddress
            geometry {
                lat
                lng
            }
            keywords
        }
    }
`;
export type CreatePlaceMutationFn = Apollo.MutationFunction<CreatePlaceMutation, CreatePlaceMutationVariables>;

/**
 * __useCreatePlaceMutation__
 *
 * To run a mutation, you first call `useCreatePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaceMutation, { data, loading, error }] = useCreatePlaceMutation({
 *   variables: {
 *      city: // value for 'city'
 *      postcode: // value for 'postcode'
 *      address1: // value for 'address1'
 *      placeName: // value for 'placeName'
 *      description: // value for 'description'
 *      address2: // value for 'address2'
 *      country: // value for 'country'
 *      lat: // value for 'lat'
 *      lng: // value for 'lng'
 *      keywords: // value for 'keywords'
 *   },
 * });
 */
export function useCreatePlaceMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaceMutation, CreatePlaceMutationVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreatePlaceMutation, CreatePlaceMutationVariables>(CreatePlaceDocument, options);
}
export type CreatePlaceMutationHookResult = ReturnType<typeof useCreatePlaceMutation>;
export type CreatePlaceMutationResult = Apollo.MutationResult<CreatePlaceMutation>;
export type CreatePlaceMutationOptions = Apollo.BaseMutationOptions<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const UpdateGeometryInPlaceDocument = gql`
    mutation UpdateGeometryInPlace($id: String!, $lng: Float!, $lat: Float!) {
        updateGeometryInPlace(_id: $id, lng: $lng, lat: $lat) {
            lat
            lng
        }
    }
`;
export type UpdateGeometryInPlaceMutationFn = Apollo.MutationFunction<UpdateGeometryInPlaceMutation, UpdateGeometryInPlaceMutationVariables>;

/**
 * __useUpdateGeometryInPlaceMutation__
 *
 * To run a mutation, you first call `useUpdateGeometryInPlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGeometryInPlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGeometryInPlaceMutation, { data, loading, error }] = useUpdateGeometryInPlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      lng: // value for 'lng'
 *      lat: // value for 'lat'
 *   },
 * });
 */
export function useUpdateGeometryInPlaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGeometryInPlaceMutation, UpdateGeometryInPlaceMutationVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<UpdateGeometryInPlaceMutation, UpdateGeometryInPlaceMutationVariables>(UpdateGeometryInPlaceDocument, options);
}
export type UpdateGeometryInPlaceMutationHookResult = ReturnType<typeof useUpdateGeometryInPlaceMutation>;
export type UpdateGeometryInPlaceMutationResult = Apollo.MutationResult<UpdateGeometryInPlaceMutation>;
export type UpdateGeometryInPlaceMutationOptions = Apollo.BaseMutationOptions<UpdateGeometryInPlaceMutation, UpdateGeometryInPlaceMutationVariables>;
export const CreateBasicUserDocument = gql`
    mutation CreateBasicUser($deviceId: String!) {
        createBasicUser(deviceId: $deviceId) {
            _id
            deviceId
        }
    }
`;
export type CreateBasicUserMutationFn = Apollo.MutationFunction<CreateBasicUserMutation, CreateBasicUserMutationVariables>;

/**
 * __useCreateBasicUserMutation__
 *
 * To run a mutation, you first call `useCreateBasicUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBasicUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBasicUserMutation, { data, loading, error }] = useCreateBasicUserMutation({
 *   variables: {
 *      deviceId: // value for 'deviceId'
 *   },
 * });
 */
export function useCreateBasicUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateBasicUserMutation, CreateBasicUserMutationVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useMutation<CreateBasicUserMutation, CreateBasicUserMutationVariables>(CreateBasicUserDocument, options);
}
export type CreateBasicUserMutationHookResult = ReturnType<typeof useCreateBasicUserMutation>;
export type CreateBasicUserMutationResult = Apollo.MutationResult<CreateBasicUserMutation>;
export type CreateBasicUserMutationOptions = Apollo.BaseMutationOptions<CreateBasicUserMutation, CreateBasicUserMutationVariables>;
export const GetUserDocument = gql`
    query GetUser {
        getUser {
            deviceId
            likedPlaces
        }
    }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
