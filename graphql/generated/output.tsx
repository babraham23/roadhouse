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
  createProduct: ProductClass;
  createProductCategory: ProductCategoryClass;
  createScrollbarConfig: ScrollbarConfigClass;
  createUser: UserClass;
  likePlace: UserClass;
  updateGeometryInPlace: GeometryClass;
  updateKeywordsInPlace: PlacesClass;
  updateScrollbarConfig: ScrollbarConfigClass;
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
  formattedAddress: Scalars['String'];
  icon: Scalars['String'];
  isClient: Scalars['Boolean'];
  keywords?: InputMaybe<Array<Scalars['String']>>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  postcode: Scalars['String'];
  rating: Scalars['Float'];
  types?: InputMaybe<Array<Scalars['String']>>;
  user_ratings_total: Scalars['Float'];
};


export type MutationCreateProductArgs = {
  price: Scalars['Float'];
  productCategoryId: Scalars['String'];
  productDescription?: InputMaybe<Scalars['String']>;
  productIndex?: InputMaybe<Scalars['Float']>;
  productName: Scalars['String'];
};


export type MutationCreateProductCategoryArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  categoryName?: InputMaybe<Scalars['String']>;
  color1?: InputMaybe<Scalars['String']>;
  color2?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Float']>;
};


export type MutationCreateScrollbarConfigArgs = {
  image: Scalars['String'];
  index: Scalars['Float'];
  title: Scalars['String'];
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


export type MutationUpdateKeywordsInPlaceArgs = {
  _id: Scalars['String'];
  keywords?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationUpdateScrollbarConfigArgs = {
  _id: Scalars['String'];
  image: Scalars['String'];
  index: Scalars['Float'];
  title: Scalars['String'];
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
  icon?: Maybe<Scalars['String']>;
  isClient?: Maybe<Scalars['Boolean']>;
  keywords?: Maybe<Array<Scalars['String']>>;
  name?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  types?: Maybe<Array<Scalars['String']>>;
  user_ratings_total?: Maybe<Scalars['Float']>;
};

export type ProductCategoryClass = {
  __typename?: 'ProductCategoryClass';
  _id: Scalars['String'];
  aspectRatio?: Maybe<Scalars['Float']>;
  categoryIndex?: Maybe<Scalars['Float']>;
  categoryName?: Maybe<Scalars['String']>;
  color1?: Maybe<Scalars['String']>;
  color2?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  products?: Maybe<Array<ProductClass>>;
};

export type ProductClass = {
  __typename?: 'ProductClass';
  price?: Maybe<Scalars['Float']>;
  productCategoryId?: Maybe<Scalars['String']>;
  productDescription?: Maybe<Scalars['String']>;
  productIndex?: Maybe<Scalars['Float']>;
  productName?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<UserClass>;
  findPlaceByName: PlacesClass;
  getAllProductCategorys: Array<ProductCategoryClass>;
  getPlacesByKeywords: Array<PlacesClass>;
  getProductCategoryWithProducts: Array<ProductClass>;
  getScrollbarConfig: Array<ScrollbarConfigClass>;
  getUser: UserClass;
};


export type QueryFindPlaceByNameArgs = {
  name: Scalars['String'];
};


export type QueryGetPlacesByKeywordsArgs = {
  keywords?: InputMaybe<Scalars['String']>;
};


export type QueryGetProductCategoryWithProductsArgs = {
  categoryId?: InputMaybe<Scalars['String']>;
};

export type ScrollbarConfigClass = {
  __typename?: 'ScrollbarConfigClass';
  _id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
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
  userRatingsTotal: Scalars['Float'];
  rating: Scalars['Float'];
  icon: Scalars['String'];
  formattedAddress: Scalars['String'];
  city: Scalars['String'];
  postcode: Scalars['String'];
  address1: Scalars['String'];
  isClient: Scalars['Boolean'];
  name: Scalars['String'];
  types?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  lng?: InputMaybe<Scalars['Float']>;
  lat?: InputMaybe<Scalars['Float']>;
  country?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
}>;


export type CreatePlaceMutation = { __typename?: 'Mutation', createPlace: { __typename?: 'PlacesClass', _id: string, name?: string | null | undefined, description?: string | null | undefined, isClient?: boolean | null | undefined, keywords?: Array<string> | null | undefined, Address1?: string | null | undefined, Address2?: string | null | undefined, postcode?: string | null | undefined, city?: string | null | undefined, country?: string | null | undefined, formattedAddress?: string | null | undefined, icon?: string | null | undefined, rating?: number | null | undefined, types?: Array<string> | null | undefined, user_ratings_total?: number | null | undefined, geometry?: { __typename?: 'GeometryClass', lat: number, lng: number } | null | undefined } };

export type UpdateGeometryInPlaceMutationVariables = Exact<{
  id: Scalars['String'];
  lng: Scalars['Float'];
  lat: Scalars['Float'];
}>;


export type UpdateGeometryInPlaceMutation = { __typename?: 'Mutation', updateGeometryInPlace: { __typename?: 'GeometryClass', lat: number, lng: number } };

export type CreateBasicUserMutationVariables = Exact<{
  deviceId: Scalars['String'];
}>;


export type CreateBasicUserMutation = { __typename?: 'Mutation', createBasicUser: { __typename?: 'UserClass', _id: string, deviceId?: string | null | undefined } };

export type GetPlacesByKeywordsQueryVariables = Exact<{
  keywords?: InputMaybe<Scalars['String']>;
}>;


export type GetPlacesByKeywordsQuery = { __typename?: 'Query', getPlacesByKeywords: Array<{ __typename?: 'PlacesClass', _id: string, name?: string | null | undefined, description?: string | null | undefined, Address1?: string | null | undefined, Address2?: string | null | undefined, postcode?: string | null | undefined, city?: string | null | undefined, country?: string | null | undefined, formattedAddress?: string | null | undefined, keywords?: Array<string> | null | undefined, geometry?: { __typename?: 'GeometryClass', lat: number, lng: number } | null | undefined }> };

export type GetScrollbarConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetScrollbarConfigQuery = { __typename?: 'Query', getScrollbarConfig: Array<{ __typename?: 'ScrollbarConfigClass', _id: string, index?: number | null | undefined, title?: string | null | undefined, image?: string | null | undefined }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'UserClass', deviceId?: string | null | undefined, likedPlaces: Array<string> } };


export const CreatePlaceDocument = gql`
    mutation CreatePlace($userRatingsTotal: Float!, $rating: Float!, $icon: String!, $formattedAddress: String!, $city: String!, $postcode: String!, $address1: String!, $isClient: Boolean!, $name: String!, $types: [String!], $lng: Float, $lat: Float, $country: String, $address2: String, $keywords: [String!], $description: String) {
  createPlace(
    user_ratings_total: $userRatingsTotal
    rating: $rating
    icon: $icon
    formattedAddress: $formattedAddress
    city: $city
    postcode: $postcode
    Address1: $address1
    isClient: $isClient
    name: $name
    types: $types
    lng: $lng
    lat: $lat
    country: $country
    Address2: $address2
    keywords: $keywords
    description: $description
  ) {
    _id
    name
    description
    isClient
    keywords
    Address1
    Address2
    postcode
    city
    country
    geometry {
      lat
      lng
    }
    formattedAddress
    icon
    rating
    types
    user_ratings_total
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
 *      userRatingsTotal: // value for 'userRatingsTotal'
 *      rating: // value for 'rating'
 *      icon: // value for 'icon'
 *      formattedAddress: // value for 'formattedAddress'
 *      city: // value for 'city'
 *      postcode: // value for 'postcode'
 *      address1: // value for 'address1'
 *      isClient: // value for 'isClient'
 *      name: // value for 'name'
 *      types: // value for 'types'
 *      lng: // value for 'lng'
 *      lat: // value for 'lat'
 *      country: // value for 'country'
 *      address2: // value for 'address2'
 *      keywords: // value for 'keywords'
 *      description: // value for 'description'
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
        const options = {...defaultOptions, ...baseOptions}
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBasicUserMutation, CreateBasicUserMutationVariables>(CreateBasicUserDocument, options);
      }
export type CreateBasicUserMutationHookResult = ReturnType<typeof useCreateBasicUserMutation>;
export type CreateBasicUserMutationResult = Apollo.MutationResult<CreateBasicUserMutation>;
export type CreateBasicUserMutationOptions = Apollo.BaseMutationOptions<CreateBasicUserMutation, CreateBasicUserMutationVariables>;
export const GetPlacesByKeywordsDocument = gql`
    query GetPlacesByKeywords($keywords: String) {
  getPlacesByKeywords(keywords: $keywords) {
    _id
    name
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

/**
 * __useGetPlacesByKeywordsQuery__
 *
 * To run a query within a React component, call `useGetPlacesByKeywordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlacesByKeywordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlacesByKeywordsQuery({
 *   variables: {
 *      keywords: // value for 'keywords'
 *   },
 * });
 */
export function useGetPlacesByKeywordsQuery(baseOptions?: Apollo.QueryHookOptions<GetPlacesByKeywordsQuery, GetPlacesByKeywordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlacesByKeywordsQuery, GetPlacesByKeywordsQueryVariables>(GetPlacesByKeywordsDocument, options);
      }
export function useGetPlacesByKeywordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlacesByKeywordsQuery, GetPlacesByKeywordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlacesByKeywordsQuery, GetPlacesByKeywordsQueryVariables>(GetPlacesByKeywordsDocument, options);
        }
export type GetPlacesByKeywordsQueryHookResult = ReturnType<typeof useGetPlacesByKeywordsQuery>;
export type GetPlacesByKeywordsLazyQueryHookResult = ReturnType<typeof useGetPlacesByKeywordsLazyQuery>;
export type GetPlacesByKeywordsQueryResult = Apollo.QueryResult<GetPlacesByKeywordsQuery, GetPlacesByKeywordsQueryVariables>;
export const GetScrollbarConfigDocument = gql`
    query GetScrollbarConfig {
  getScrollbarConfig {
    _id
    index
    title
    image
  }
}
    `;

/**
 * __useGetScrollbarConfigQuery__
 *
 * To run a query within a React component, call `useGetScrollbarConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScrollbarConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScrollbarConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetScrollbarConfigQuery(baseOptions?: Apollo.QueryHookOptions<GetScrollbarConfigQuery, GetScrollbarConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetScrollbarConfigQuery, GetScrollbarConfigQueryVariables>(GetScrollbarConfigDocument, options);
      }
export function useGetScrollbarConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetScrollbarConfigQuery, GetScrollbarConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetScrollbarConfigQuery, GetScrollbarConfigQueryVariables>(GetScrollbarConfigDocument, options);
        }
export type GetScrollbarConfigQueryHookResult = ReturnType<typeof useGetScrollbarConfigQuery>;
export type GetScrollbarConfigLazyQueryHookResult = ReturnType<typeof useGetScrollbarConfigLazyQuery>;
export type GetScrollbarConfigQueryResult = Apollo.QueryResult<GetScrollbarConfigQuery, GetScrollbarConfigQueryVariables>;
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