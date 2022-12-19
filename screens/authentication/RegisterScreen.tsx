import { StyleSheet, View } from 'react-native';
import React from 'react';
import SignInButton from '../../components/buttons/SignInButton';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import PrimaryButton from '../../components/buttons/primaryButton';
import OrDivider from '../../components/layout/orDivider';
import { Text } from '../../style/typography';
import Input from '../../components/inputs/textInput';
import { RegisterModel } from '../../_models/register.model';
import ArrowBackButton from '../../components/buttons/arrowBackButton';
import PasswordInput from '../../components/inputs/passwordInput';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

WebBrowser.maybeCompleteAuthSession();

const SignInScreen = () => {
    const [{ username, email, password }, setState] = React.useState(new RegisterModel());

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

    return (
        <View style={styles.container}>
            <ArrowBackButton style={styles.back} />
            <Text bold fontSize={23}>
                Create your account
            </Text>

            <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Username</Text>
                <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, username: value }))} style={styles.input} />
                <Text style={styles.heading}>Email</Text>
                <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, email: value }))} style={styles.input} />
                <Text style={styles.heading}>Password</Text>
                <PasswordInput onChangeText={(value: string) => setState((prevState) => ({ ...prevState, placeName: value }))} style={styles.input} />
            </View>

            <OrDivider />
            <SignInButton text="Sign In with Email" style={styles.button} onPress={() => {}} />
            <SignInButton text="Continue with Google" style={styles.button} google onPress={() => promptAsync()} />
        </View>
    );
};

export default SignInScreen;

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
});
