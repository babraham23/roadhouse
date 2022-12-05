import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { SET_LOADING } from '../state/reducers/loadingReducer';
import { pub_search, restaurant_search } from '../api/endpoints';
import { marketDD } from '../screens/explore/dd';
import { useCreateBasicUserMutation, useGetPlacesByKeywordsQuery, useGetUserQuery } from '../graphql/generated/output';
import { GetData, StoreData } from '../functions/asyncStorage';
import { generateID } from '../functions/helpers';
import { useUserContext } from './user.context';

type Context = {
    userType?: any;
    setUserType?: any;
    location?: any;
    latitude?: any;
    longitude?: any;
    setLatitude?: any;
    setLongitude?: any;
    setLocation?: any;
    getUserLocation?: any;
    places?: any;
    getPlaces?: any;
    place?: any;
    setPlace?: any;
    userId?: any;
    setUserId?: any;
    userTravelMode?: any;
    setUserTravelMode?: any;
    userEvent?: any;
    setUserEvenet?: any;
};

const PlacesContext = createContext<Context>({
    userType: undefined,
    setUserType: null,
    location: undefined,
    latitude: undefined,
    longitude: undefined,
    setLatitude: undefined,
    setLongitude: undefined,
    setLocation: undefined,
    getUserLocation: undefined,
    getPlaces: undefined,
    userId: undefined,
    setUserId: undefined,
    userTravelMode: undefined,
    setUserTravelMode: undefined,
});

export const PlacesProvider: FC = ({ children }) => {
    const [location, setLocation]: any = useState(null);
    const [latitude, setLatitude]: any = useState('');
    const [longitude, setLongitude]: any = useState('');
    const [userType, setUserType]: any = useState('');
    let [places, setPlaces]: any = useState([]);
    const [place, setPlace]: any = useState('');
    const dispatch = useDispatch();
    const [createBasicUser] = useCreateBasicUserMutation();
    const [userId, setUserId]: any = useState('');
    const getPlacesCall = useGetPlacesByKeywordsQuery();
    const [userTravelMode, setUserTravelMode]: any = useState('DRIVING'); //"DRIVING", "BICYCLING", "WALKING", "TRANSIT".
    const [userEvent, setUserEvenet] = useState('');

    const getUserLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log('status -->', status);
        if (status !== 'granted') {
            alert('Permission to access location was denied');
            return;
        }
        // dispatch({ type: SET_LOADING, payload: true });
        let location = await Location.getCurrentPositionAsync({});
        console.log('location -->', location);
        // setUserLatitude(location.coords.latitude); // my location for dev
        // setUserLongitude(location.coords.longitude);  // my location for dev
        // dispatch({ type: SET_LOADING, payload: false });
    };

    const getPlaces = async (type: any) => {
        if (type === 'Bars') {
            getBars();
        } else if (type === 'Restaurants') {
            getRestaurants();
        } else if (type === 'Markets') {
            getMarket();
        } else {
            getPlacesByKeyword(type);
        }
    };

    const getBars = async () => {
        let lat = 54.969;
        let lng = -1.619;
        try {
            const barResponse = await fetch(pub_search(lat, lng));
            // console.log('success getting the bars-->', barResponse);
            const bars = await barResponse.json();
            if (bars.status === 'REQUEST_DENIED') alert('Request denied');
            else {
                setPlaces(bars.results);
                setPlace('Bars');
            }
        } catch (error) {
            console.error('error 532 -->', error);
        }
    };

    const getRestaurants = async () => {
        let lat = 54.969637;
        let lng = -1.619493;
        try {
            const restaurantResponse = await fetch(restaurant_search(lat, lng));
            // console.log('success getting restaurants in myy location -->', restaurantResponse);
            const restaurant = await restaurantResponse.json();
            if (restaurant.status === 'REQUEST_DENIED') alert('Request denied');
            else {
                setPlaces(restaurant.results);
                setPlace('Restaurants');
            }
        } catch (error) {
            console.error('error e62 -->', error);
        }
    };

    const getMarket = () => {
        setPlace('Markets');
        setPlaces(marketDD);
    };

    const getPlacesByKeyword = async (keyword: string) => {
        let {
            data: { getPlacesByKeywords },
        } = await getPlacesCall.refetch({
            keywords: keyword,
        });
        setPlaces(getPlacesByKeywords);
        setPlace(keyword);
    };

    const createEvent = () => {};

    useEffect(() => {
        getRestaurants();
    }, []);

    // console.log('placs context-->', JSON.stringify(places[0]));

    return (
        <PlacesContext.Provider
            value={{
                userType,
                setUserType,
                location,
                latitude,
                longitude,
                setLatitude,
                setLongitude,
                setLocation,
                places,
                getPlaces,
                place,
                userId,
                userTravelMode,
                setUserTravelMode,
            }}
        >
            {children}
        </PlacesContext.Provider>
    );
};

export const usePlacesContext = (): Context => useContext<Context>(PlacesContext);
