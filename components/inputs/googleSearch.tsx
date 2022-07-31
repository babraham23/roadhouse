import { Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { API_KEY } from '../../api/endpoints';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GoogleSearch = ({ style }: any) => {
    return (
        <View style={[style, styles.container]}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                query={{
                    key: API_KEY,
                    language: 'en', // language of the results
                    components: 'country:uk',
                }}
                onPress={(data, details = null) => console.log(data)}
                onFail={(error) => console.error(error)}
                // GooglePlacesDetailsQuery={{ establishment }}
                currentLocation={true}
                filterReverseGeocodingByTypes={['establishment']}
                // requestUrl={{
                //   url:
                //     'https://cors-anywhere.herokuTestScreen.com/https://maps.googleapis.com/maps/api',
                //   useOnPlatform: 'web',
                // }} // this in only required for use on the web. See https://git.io/JflFv more for details.
            />
        </View>
    );
};

export default GoogleSearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: Platform.OS === 'android' ? 30 : 50,
    }
});
