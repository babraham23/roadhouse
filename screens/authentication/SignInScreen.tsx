import { StyleSheet, View } from 'react-native';
import React from 'react';
import SignInButton from '../../components/buttons/SignInButton';
import * as WebBrowser from 'expo-web-browser';
import PrimaryButton from '../../components/buttons/primaryButton';
import OrDivider from '../../components/layout/orDivider';
import { Text } from '../../style/typography';
import Input from '../../components/inputs/textInput';
import PasswordInput from '../../components/inputs/passwordInput';
import { LoginModel } from '../../_models/signIn.model';
import { useTheme } from '../../hooks/useTheme';
import DontHaveAnAccount from '../../components/layout/dontHaveAnAccount';
import CloseButton from '../../components/buttons/closeButton';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth';

WebBrowser.maybeCompleteAuthSession();

const SignInScreen = () => {
    const { colors } = useTheme();
    const [{ email, password }, setState] = React.useState(new LoginModel());
    const { googleAuth, nativeLogin } = useAuth();
    const navigation = useNavigation();

    return (
        <>
            <View>
                <CloseButton style={styles.close} size={25} onPress={() => navigation.goBack()} />
                <View style={styles.container}>
                    <Text bold fontSize={30}>
                        Login
                    </Text>
                    <Text bold fontSize={17} color={colors.dark_grey}>
                        Please sign in to continue
                    </Text>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.heading}>Email</Text>
                        <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, email: value }))} style={styles.input} />
                        <Text style={styles.heading}>Password</Text>
                        <PasswordInput forgotPassword onChangeText={(value: string) => setState((prevState) => ({ ...prevState, password: value }))} style={styles.input} />
                        <PrimaryButton title="Sign In" onPress={() => nativeLogin({ email, password })} style={styles.signInButton} />
                    </View>
                    <OrDivider />
                    <SignInButton text="Continue with Google" style={styles.button} google onPress={() => googleAuth()} />
                </View>
            </View>
            <DontHaveAnAccount style={styles.noAccount} />
        </>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 30,
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
    noAccount: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
    },
    close: {
        position: 'absolute',
        top: 15,
        right: 30,
    },
});
