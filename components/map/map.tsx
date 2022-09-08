import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from '../../api/endpoints';
import { useUserContext } from '../../context/user.context';
import { useNavigation } from '@react-navigation/native';
import { MenuMarkerConverter } from '../../functions/helpers';
import { Images } from '../../style/images';
import { createIconSetFromFontello } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.1;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = API_KEY;

const Map = () => {
    const navigation: any = useNavigation();
    let mapView: any = useRef();
    const { longitude, latitude, places, place } = useUserContext();
    const [destination, setDestination] = useState({ latitude: 0, longitude: 0 });
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
            setDestination({ latitude: lat, longitude: lng });
            setDirectionActive(true);
            navigation.navigate('BusinessScreen', { item, distance, duration });
        }
    };

    return (
        <MapView showsPointsOfInterest={false} region={mapRegion} style={[StyleSheet.absoluteFill, { marginBottom: 20 }]} ref={(c) => (mapView = c)} showsUserLocation>
            {places.map((item: any, i: number) => {
                // CONDITIONAL CHECK TO CATER FOR CLIENT AND GOOGLE API
                let client = item.geometry.lat ? true : false;
                let latitude = item.geometry.lat ? item.geometry.lat : item.geometry.location.lat;
                let longitude = item.geometry.lng ? item.geometry.lng : item.geometry.location.lng;
                return (
                    <Marker
                        // onPress={() => onIconPress(longitude, latitude)}
                        onPress={() => onIconPress(item, client)}
                        key={`coordinate_${i}`}
                        coordinate={{ latitude, longitude }}
                    >
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
                    mode="WALKING"
                    origin={{ latitude, longitude }}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="#ff225c"
                    optimizeWaypoints={true}
                    onStart={(params) => {
                        console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                    }}
                    onReady={(result) => {
                        console.log(`Distance: ${result.distance} km`);
                        console.log(`Duration: ${result.duration} min.`);

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
                        // console.log('GOT AN ERROR');
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
