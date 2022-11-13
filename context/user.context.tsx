import React, { createContext, FC, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateBasicUserMutation, useGetPlacesByKeywordsQuery } from '../graphql/generated/output';
import { GetData, StoreData } from '../functions/asyncStorage';
import { generateID } from '../functions/helpers';
import * as Location from 'expo-location';

type Context = {
    userType?: any;
    setUserType?: any;
    userId?: any;
    setUserId?: any;
    userTravelMode?: any;
    setUserTravelMode?: any;
    userTravelMethod?: any;
    userLoaction?: any;
    setUser?: any;
    userLatitude?: any;
    userLongitude?: any;
    setUserLatitude?: any;
    setUserLongitude?: any;
};

const UserContext = createContext<Context>({
    userType: undefined,
    userId: undefined,
    userTravelMode: undefined,
    userLoaction: undefined,
    setUserLatitude: undefined,
    setUserLongitude: undefined,
});

//distance --> 13.7 for  DRIVING
//distance --> 59.61666666666667 for  WALKING
//distance --> 21.85 for  BICYCLING

export const UserProvider: FC = ({ children }) => {
    const [userType, setUserType]: any = useState('');
    const [createBasicUser] = useCreateBasicUserMutation();
    const [userId, setUserId]: any = useState('');
    const [userTravelMode, setUserTravelMode]: any = useState('DRIVING'); //"DRIVING", "BICYCLING", "WALKING", "TRANSIT".
    const [userLocation, setUserLocation]: any = useState(null);
    const [errorMsg, setErrorMsg]: any = useState(null);
    const [userLatitude, setUserLatitude]: any = useState(54.969588);
    const [userLongitude, setUserLongitude]: any = useState(-1.619521);

    -1.619521;
    const getUser = async () => {
        const deviceId = await GetData('@deviceId');
        console.log('deviceId -->', deviceId);
        if (!deviceId || deviceId === 'removed' || deviceId === undefined) {
            const deviceId = generateID();
            await StoreData('@deviceId', deviceId);
            const user = await createBasicUser({
                variables: {
                    deviceId: deviceId,
                },
            });
            if (user) console.log(user);
            else console.log('failure storing basic user');
        } else {
            const user = await createBasicUser({
                variables: {
                    deviceId: deviceId,
                },
            });
            if (user) {
                let userId = user.data?.createBasicUser._id;
                setUserId(userId);
            } else console.log('failure storing basic user');
        }
    };

    const getUserLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log('status -->', status);
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        // dispatch({ type: SET_LOADING, payload: true });
        let location = await Location.getCurrentPositionAsync({});
        console.log('location -->', location);
        // setUserLatitude(location.coords.latitude); // my location for dev
        // setUserLongitude(location.coords.longitude);  // my location for dev
        // dispatch({ type: SET_LOADING, payload: false });
    };

    useEffect(() => {
        getUser();
        // getUserLocation();
    }, []);

    return (
        <UserContext.Provider
            value={{
                userType,
                setUserType,
                userId,
                userTravelMode,
                setUserTravelMode,
                setUserLatitude,
                setUserLongitude,
                userLatitude,
                userLongitude,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): Context => useContext<Context>(UserContext);
