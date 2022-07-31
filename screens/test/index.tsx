import * as React from 'react';
import { View, StyleSheet, TextInput, ScrollView, Dimensions, Image } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY, getPlacesPhotos } from '../../api/endpoints';
import GoogleSearch from '../../components/inputs/googleSearch';
import { useUserContext } from '../../context/user.context';

const GOOGLE_PLACES_API_KEY = API_KEY; // never save your real api key in a snack!

// town_square
const { width } = Dimensions.get('window');

const TestScreen = () => {
    const { places } = useUserContext()
    // console.log(places)

    function getKeyByValue(object: any, value: any) {
        return Object.keys(object).find(key => object[key] === value);
      }
      
      
      const map = {"cunt" : "1", "fuck" : "2"};
      console.log(getKeyByValue(map,"2"));

    return (
        <ScrollView horizontal bounces={false} style={styles.container}>
            {/* <Image style={styles.image} source={{ uri: getPlacesPhotos('AeJbb3dFUp5tRuQUV5di8bAfFCFxT0k4NYTUh1BO85OrI5rvjQFfWBg1JLJeQxW5rBihQ5WtYPLY07qjJELGiPevPHQXHDVX38kvKcyxZNRIH2RzpneIK8_ilSwesJx4TWIaVDB2jDbjiP6SInfvfA-aZzMcxDlB_WqzYVGPuMWn8woSqkbs') }} />
            <Image style={styles.image} source={{ uri: getPlacesPhotos('AeJbb3ehga8WUWYhLzl6i1pqYrrSw0LxTKbXWwpvDnkCZ8sNjrG193r_RVtoY1EqBf2UELgaz-ZBVjSSzgEkITN5GmLCKOGNP7gnviWGRk8p20D_fr9Myt-I7nsfrdmEMEuKp1S63db2UwP-gQx_3sv9dyieAWZFxKhNWAV4n6sqhOaK-FDc') }} /> */}
            {places.map((place: any, index: number) => {
                // console.log('place', place.photos)
                return (
                    <Image key={index} style={styles.image} source={{ uri: getPlacesPhotos(place.photo_reference) }} />
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // padding: 10,
        // paddingTop: Constants.statusBarHeight + 10,
    },
    image: { 
        width, 
        height: 200, 
    }
});

export default TestScreen;
