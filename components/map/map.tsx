import { Dimensions, Image, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from '../../api/endpoints';
import { useNavigation } from '@react-navigation/native';
import { MenuMarkerConverter } from '../../functions/helpers';
import { Images } from '../../style/images';
import { usePlacesContext } from '../../context/place.context';
import { useUserContext } from '../../context/user.context';

const { width, height } = Dimensions.get('window');

const GOOGLE_MAPS_APIKEY = API_KEY;

// we need to set origin
let origin = { latitude: 54.968567, longitude: -1.62054 };

// we need to set destination
// let destination = { latitude: 54.97186025826307, longitude: -1.6168295272666193 } // down the street
let destination = { latitude: 54.994913, longitude: -1.663358 }; // blakelaw

// creata a function in user context that sets origin and destination

const Map: React.FC<any> = ({ style }) => {
    const navigation: any = useNavigation();
    let mapView: any = useRef();
    const { places, place, setLongitude, setLatitude, userTravelMode, setUserTravelMode } = usePlacesContext();
    const [directionActive, setDirectionActive] = useState(false);
    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState(0);
    const [mapRegion, setmapRegion] = React.useState({
        latitude: 54.96958048441685,
        longitude: -1.6190185635742933,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });

    const onIconPress = (item: any, client: boolean) => {
        if (client) {
            navigation.navigate('StorefrontScreen', { item, distance, duration });
        } else {
            let { lat, lng } = item.geometry.location;
            setLatitude(lat);
            setLongitude(lng);
            setDirectionActive(true);
            navigation.navigate('BusinessScreen', { item, distance, duration });
        }
    };

    const createEvent = (location) => {
        navigation.navigate('CreateEventScreen', { location });
    };

    return (
        <MapView
            showsPointsOfInterest={false}
            region={mapRegion}
            style={[style, StyleSheet.absoluteFill, { marginBottom: 20 }]}
            ref={(c) => (mapView = c)}
            showsUserLocation
            onLongPress={(e) => createEvent(e.nativeEvent.coordinate)}
        >
            {places.map((item: any, i: number) => {
                // console.log('passed item -->', JSON.stringify(item));
                let client = item.geometry.lat ? true : false;
                let latitude = item.geometry.lat ? item.geometry.lat : item.geometry.location.lat;
                let longitude = item.geometry.lng ? item.geometry.lng : item.geometry.location.lng;
                return (
                    <Marker onPress={() => onIconPress(item, client)} key={`coordinate_${i}`} coordinate={{ latitude, longitude }}>
                        {client && item.placeName === 'McDonalds' ? (
                            <Image source={Images.MCDEEZ} style={styles.icon2} />
                        ) : (
                            <Image source={MenuMarkerConverter(place)} style={styles.icon} />
                        )}
                    </Marker>
                );
            })}
            {directionActive && (
                <MapViewDirections
                    mode={userTravelMode} // use setTravelMode from user context
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="#ff225c"
                    optimizeWaypoints={true}
                    onStart={(params) => {
                        console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                    }}
                    onReady={(result) => {
                        // console.log('result -->', result)
                        console.log('distance -->', result.duration, 'for ', userTravelMode);
                        // console.log(`Distance: ${result.distance} km`);
                        // console.log(`Duration: ${result.duration} min.`);

                        mapView.fitToCoordinates(result.coordinates, {
                            edgePadding: {
                                right: width / 20,
                                bottom: height / 20,
                                left: width / 20,
                                top: height / 20,
                            },
                        });
                    }}
                    onError={(errorMessage) => {
                        console.log('GOT AN ERROR', errorMessage);
                    }}
                />
            )}
        </MapView>
    );
};

export default Map;

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 27,
        resizeMode: 'contain',
    },
    icon2: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        borderRadius: 4,
    },
});
