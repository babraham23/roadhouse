import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GoogleButton } from '../../components/buttons/GoogleButton';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

const SignInScreen = () => {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '526403850992-68fkf5rs5henv8kb84ar32eh6esien55.apps.googleusercontent.com',
        iosClientId: '526403850992-68fkf5rs5henv8kb84ar32eh6esien55.apps.googleusercontent.com',
        androidClientId: '526403850992-68fkf5rs5henv8kb84ar32eh6esien55.apps.googleusercontent.com',
        webClientId: '526403850992-68fkf5rs5henv8kb84ar32eh6esien55.apps.googleusercontent.com',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            console.log('authentication -->', JSON.stringify(authentication))
        }
        console.log('response -->', JSON.stringify(response));
    }, [response]);

    return (
        <View style={styles.container}>
            <GoogleButton text="Continue with Google" style={styles.button} onPress={() => promptAsync()} />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 10,
    },
    button: { marginBottom: 10 },
});
