import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GoogleButton } from '../../components/buttons/GoogleButton';
import { useAuth } from '../../hooks/useGoogleAuth';

const SignInScreen = () => {
    const { googleAuth } = useAuth();
    return (
        <View style={styles.container}>
            <GoogleButton text="Continue with Google" style={styles.button} onPress={async () => await googleAuth()} />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    button: { marginBottom: 10 },
});
