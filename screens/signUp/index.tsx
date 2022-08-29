import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';
import PlaceForm from '../../components/forms/placeForm';

const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <PlaceForm />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
});

export default SignUpScreen;