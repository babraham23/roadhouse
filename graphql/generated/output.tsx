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

export type Mutation = {
  __typename?: 'Mutation';
  createBasicUser: UserClass;
  createPlace: PlacesClass;
  createUser: UserClass;
  likePlace: UserClass;
};


export type MutationCreateBasicUserArgs = {
  deviceId: Scalars['String'];
};


export type MutationCreatePlaceArgs = {
  description: Scalars['String'];
  formattedAddress: Scalars['String'];
  isClient: Scalars['Boolean'];
  keywords: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  placeName: Scalars['String'];
  priceLevel: Scalars['Float'];
  rating: Scalars['Float'];
  types: Scalars['String'];
  userRatingsTotal: Scalars['Float'];
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

export type PlacesClass = {
  __typename?: 'PlacesClass';
  description?: Maybe<Scalars['String']>;
  formattedAddress?: Maybe<Scalars['String']>;
  isClient?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  placeName?: Maybe<Scalars['String']>;
  priceLevel?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  types?: Maybe<Scalars['String']>;
  userRatingsTotal?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<UserClass>;
  getHamburgerPlaces: Array<PlacesClass>;
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
  keywords: Scalars['String'];
  placeName: Scalars['String'];
  types: Scalars['String'];
  userRatingsTotal: Scalars['Float'];
  rating: Scalars['Float'];
  priceLevel: Scalars['Float'];
  isClient: Scalars['Boolean'];
  lng: Scalars['Float'];
  lat: Scalars['Float'];
  description: Scalars['String'];
  formattedAddress: Scalars['String'];
}>;


export type CreatePlaceMutation = { __typename?: 'Mutation', createPlace: { __typename?: 'PlacesClass', formattedAddress?: string | null | undefined, description?: string | null | undefined, lat?: number | null | undefined, lng?: number | null | undefined, isClient?: boolean | null | undefined, priceLevel?: number | null | undefined, rating?: number | null | undefined, userRatingsTotal?: number | null | undefined, types?: string | null | undefined, placeName?: string | null | undefined, keywords?: string | null | undefined } };

export type CreateBasicUserMutationVariables = Exact<{
  deviceId: Scalars['String'];
}>;


export type CreateBasicUserMutation = { __typename?: 'Mutation', createBasicUser: { __typename?: 'UserClass', _id: string, deviceId?: string | null | undefined } };

export type GetHamburgerPlacesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHamburgerPlacesQuery = { __typename?: 'Query', getHamburgerPlaces: Array<{ __typename?: 'PlacesClass', formattedAddress?: string | null | undefined, description?: string | null | undefined, lat?: number | null | undefined, lng?: number | null | undefined, isClient?: boolean | null | undefined, priceLevel?: number | null | undefined, rating?: number | null | undefined, userRatingsTotal?: number | null | undefined, types?: string | null | undefined, placeName?: string | null | undefined, keywords?: string | null | undefined }> };

export type LikePlaceMutationVariables = Exact<{
  id: Scalars['String'];
  likedPlace: Scalars['String'];
}>;


export type LikePlaceMutation = { __typename?: 'Mutation', likePlace: { __typename?: 'UserClass', _id: string, likedPlaces: Array<string> } };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'UserClass', deviceId?: string | null | undefined, likedPlaces: Array<string> } };


export const CreatePlaceDocument = gql`
    mutation CreatePlace($keywords: String!, $placeName: String!, $types: String!, $userRatingsTotal: Float!, $rating: Float!, $priceLevel: Float!, $isClient: Boolean!, $lng: Float!, $lat: Float!, $description: String!, $formattedAddress: String!) {
  createPlace(
    keywords: $keywords
    placeName: $placeName
    types: $types
    userRatingsTotal: $userRatingsTotal
    rating: $rating
    priceLevel: $priceLevel
    isClient: $isClient
    lng: $lng
    lat: $lat
    description: $description
    formattedAddress: $formattedAddress
  ) {
    formattedAddress
    description
    lat
    lng
    isClient
    priceLevel
    rating
    userRatingsTotal
    types
    placeName
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
 *      keywords: // value for 'keywords'
 *      placeName: // value for 'placeName'
 *      types: // value for 'types'
 *      userRatingsTotal: // value for 'userRatingsTotal'
 *      rating: // value for 'rating'
 *      priceLevel: // value for 'priceLevel'
 *      isClient: // value for 'isClient'
 *      lng: // value for 'lng'
 *      lat: // value for 'lat'
 *      description: // value for 'description'
 *      formattedAddress: // value for 'formattedAddress'
 *   },
 * });
 */
export function useCreatePlaceMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaceMutation, CreatePlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlaceMutation, CreatePlaceMutationVariables>(CreatePlaceDocument, options);
      }
export type CreatePlaceMutationHookResult = ReturnType<typeof useCreatePlaceMutation>;
export type CreatePlaceMutationResult = Apollo.MutationResult<CreatePlaceMutation>;
export type CreatePlaceMutationOptions = Apollo.BaseMutationOptions<CreatePlaceMutation, CreatePlaceMutationVariables>;
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBasicUserMutation, CreateBasicUserMutationVariables>(CreateBasicUserDocument, options);
      }
export type CreateBasicUserMutationHookResult = ReturnType<typeof useCreateBasicUserMutation>;
export type CreateBasicUserMutationResult = Apollo.MutationResult<CreateBasicUserMutation>;
export type CreateBasicUserMutationOptions = Apollo.BaseMutationOptions<CreateBasicUserMutation, CreateBasicUserMutationVariables>;
export const GetHamburgerPlacesDocument = gql`
    query GetHamburgerPlaces {
  getHamburgerPlaces {
    formattedAddress
    description
    lat
    lng
    isClient
    priceLevel
    rating
    userRatingsTotal
    types
    placeName
    keywords
  }
}
    `;

/**
 * __useGetHamburgerPlacesQuery__
 *
 * To run a query within a React component, call `useGetHamburgerPlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHamburgerPlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHamburgerPlacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHamburgerPlacesQuery(baseOptions?: Apollo.QueryHookOptions<GetHamburgerPlacesQuery, GetHamburgerPlacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHamburgerPlacesQuery, GetHamburgerPlacesQueryVariables>(GetHamburgerPlacesDocument, options);
      }
export function useGetHamburgerPlacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHamburgerPlacesQuery, GetHamburgerPlacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHamburgerPlacesQuery, GetHamburgerPlacesQueryVariables>(GetHamburgerPlacesDocument, options);
        }
export type GetHamburgerPlacesQueryHookResult = ReturnType<typeof useGetHamburgerPlacesQuery>;
export type GetHamburgerPlacesLazyQueryHookResult = ReturnType<typeof useGetHamburgerPlacesLazyQuery>;
export type GetHamburgerPlacesQueryResult = Apollo.QueryResult<GetHamburgerPlacesQuery, GetHamburgerPlacesQueryVariables>;
export const LikePlaceDocument = gql`
    mutation LikePlace($id: String!, $likedPlace: String!) {
  likePlace(_id: $id, likedPlace: $likedPlace) {
    _id
    likedPlaces
  }
}
    `;
export type LikePlaceMutationFn = Apollo.MutationFunction<LikePlaceMutation, LikePlaceMutationVariables>;

/**
 * __useLikePlaceMutation__
 *
 * To run a mutation, you first call `useLikePlaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePlaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePlaceMutation, { data, loading, error }] = useLikePlaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      likedPlace: // value for 'likedPlace'
 *   },
 * });
 */
export function useLikePlaceMutation(baseOptions?: Apollo.MutationHookOptions<LikePlaceMutation, LikePlaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikePlaceMutation, LikePlaceMutationVariables>(LikePlaceDocument, options);
      }
export type LikePlaceMutationHookResult = ReturnType<typeof useLikePlaceMutation>;
export type LikePlaceMutationResult = Apollo.MutationResult<LikePlaceMutation>;
export type LikePlaceMutationOptions = Apollo.BaseMutationOptions<LikePlaceMutation, LikePlaceMutationVariables>;
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;