import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { SET_LOADING } from '../state/reducers/loadingReducer';
import { pub_search, restaurant_search, bakery_search } from '../api/endpoints';

type User = {
    userType?: string;
    location?: any;
};

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
};

const UserContext = createContext<Context>({
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
});

export const UserProvider: FC = ({ children }) => {
    const [location, setLocation]: any = useState(null);
    const [latitude, setLatitude]: any = useState('');
    const [longitude, setLongitude]: any = useState('');
    const [userType, setUserType]: any = useState('');
    const [errorMsg, setErrorMsg]: any = useState(null);
    let [places, setPlaces]: any = useState([]);
    const [place, setPlace]: any = useState('');
    const dispatch = useDispatch();

    const getUserLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        dispatch({ type: SET_LOADING, payload: true });
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
        dispatch({ type: SET_LOADING, payload: false });
    };

    const getPlaces = async (type: any) => {
        if (type === 'Bars') {
            getBars();
        } else if (type === 'Restaurants') {
            getRestaurants();
        } else setPlaces([]);
    };

    const getBars = async () => {
        let lat = 54.96963755347803;
        let lng = -1.619493032708466;
        try {
            const barResponse = await fetch(pub_search(lng, lat));
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
        let lat = 54.96963755347803;
        let lng = -1.619493032708466;
        try {
            const restaurantResponse = await fetch(restaurant_search(lng, lat));
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

    useEffect(() => {
        getUserLocation();
        getRestaurants();
    }, []);

    return (
        <UserContext.Provider
            value={{
                userType,
                setUserType,
                location,
                latitude,
                longitude,
                setLatitude,
                setLongitude,
                setLocation,
                getUserLocation,
                places,
                getPlaces,
                place,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): Context => useContext<Context>(UserContext);
