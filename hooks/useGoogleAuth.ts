import { StyleSheet, View } from 'react-native';
import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();

const useGoogleAuth = () => {
    const [userInfo, setUserInfo] = React.useState<any>(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        // responseType: "id_token",
        expoClientId: '526403850992-68fkf5rs5henv8kb84ar32eh6esien55.apps.googleusercontent.com',
        // iosClientId: '526403850992-68fkf5rs5henv8kb84ar32eh6esien55.apps.googleusercontent.com',
        // androidClientId: '526403850992-68fkf5rs5henv8kb84ar32eh6esien55.apps.googleusercontent.com',
        // webClientId: '526403850992-68fkf5rs5henv8kb84ar32eh6esien55.apps.googleusercontent.com',
    });

    const getUserInfo = async (token: any) => {
        axios
            .get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`)
            .then((res: any) => {
                console.log('res -->', res.data);
                setUserInfo(res.data);
            })
            .catch((err: any) => {
                console.log('err -->', err);
            });
    };

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            getUserInfo(authentication?.accessToken);
        }
    }, [response]);

    return [userInfo, promptAsync];
};

export default useGoogleAuth;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 50,
    },
    back: {
        marginBottom: 30,
    },
    button: { marginBottom: 10 },
    inputWrapper: {
        marginVertical: 20,
    },
    heading: {
        paddingTop: 10,
    },
    input: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    signInButton: {
        marginTop: 30,
    },
});
