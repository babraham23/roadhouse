import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FAB from '../../components/buttons/FAB';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <FAB style={styles.button} />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        padding: 20,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});
