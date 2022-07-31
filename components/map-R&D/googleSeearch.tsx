import * as React from 'react';
import { View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '../../api/endpoints';
import GoogleSearch from '../../components/inputs/googleSearch';

const GOOGLE_PLACES_API_KEY = API_KEY; // never save your real api key in a snack!

// town_square

const TestScreen = () => {
    return (
        <ScrollView bounces={false} style={styles.container}>
            <GoogleSearch />
            <View style={{ width: '100%', height: 200, backgroundColor: 'lightblue' }} />
            <View style={{ width: '100%', height: 200, backgroundColor: 'green' }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // paddingTop: Constants.statusBarHeight + 10,
    },
});

export default TestScreen;