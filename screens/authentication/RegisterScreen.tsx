import { StyleSheet, View } from 'react-native';
import React from 'react';
import SignInButton from '../../components/buttons/SignInButton';
import * as WebBrowser from 'expo-web-browser';
import PrimaryButton from '../../components/buttons/primaryButton';
import OrDivider from '../../components/layout/orDivider';
import { Text } from '../../style/typography';
import Input from '../../components/inputs/textInput';
import PasswordInput from '../../components/inputs/passwordInput';
import { useTheme } from '../../hooks/useTheme';
import DontHaveAnAccount from '../../components/layout/dontHaveAnAccount';
import { useNavigation } from '@react-navigation/native';
import ArrowBackButton from '../../components/buttons/arrowBackButton';
import { RegisterModel } from '../../_models/register.model';
import useAuth from '../../hooks/useAuth';

WebBrowser.maybeCompleteAuthSession();

const SignInScreen = () => {
    const { colors } = useTheme();
    const [{ firstName, lastName, email, password }, setState] = React.useState(new RegisterModel());
    const { googleAuth, nativeRegister } = useAuth();
    const navigation = useNavigation();

    return (
        <>
            <View>
                <ArrowBackButton style={styles.back} />
                <View style={styles.container}>
                    <Text bold fontSize={30}>
                        Create Account
                    </Text>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.heading}>First Name</Text>
                        <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, email: value }))} style={styles.input} />
                        <Text style={styles.heading}>Last Name</Text>
                        <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, email: value }))} style={styles.input} />
                        <Text style={styles.heading}>Email</Text>
                        <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, email: value }))} style={styles.input} />
                        <Text style={styles.heading}>Password</Text>
                        <PasswordInput onChangeText={(value: string) => setState((prevState) => ({ ...prevState, password: value }))} style={styles.input} />
                        <PrimaryButton title="Sign In" onPress={() => nativeRegister({ email, password, firstName, lastName })} style={styles.signInButton} />
                    </View>
                    <OrDivider />
                    <SignInButton text="Continue with Google" style={styles.button} google onPress={() => googleAuth()} />
                </View>
            </View>
            <DontHaveAnAccount haveAnAccount style={styles.noAccount} />
        </>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 100,
    },
    back: {
        position: 'absolute',
        top: 50,
        left: 20,
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
