import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { SET_LOADING } from '../state/reducers/loadingReducer';

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
});

export const UserProvider: FC = ({ children }) => {
    const [location, setLocation]: any = useState(null);
    const [latitude, setLatitude]: any = useState('');
    const [longitude, setLongitude]: any = useState('');
    const [userType, setUserType]: any = useState('');
    const [errorMsg, setErrorMsg]: any = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
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
        })();
    }, []);

    return <UserContext.Provider value={{ userType, setUserType, location, latitude, longitude, setLatitude, setLongitude, setLocation }}>{children}</UserContext.Provider>;
};

export const useUserContext = (): Context => useContext<Context>(UserContext);
