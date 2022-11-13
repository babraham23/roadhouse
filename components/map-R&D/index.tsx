import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from '../../api/endpoints';
import { Images } from '../../style/images';
import { mcdDD } from '../../screens/explore/dd';
import { useNavigation } from '@react-navigation/native';
import { usePlacesContext } from '../../context/place.context';

const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.1;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = API_KEY;

const Map = () => {
    const navigation: any = useNavigation();
    let mapView: any = useRef();
    const { longitude, latitude, places } = usePlacesContext();
    const [destination, setDestination] = useState({ latitude: 0, longitude: 0 });
    const [directionActive, setDirectionActive] = useState(false);
    const [mapRegion, setmapRegion] = React.useState({
        latitude: 54.96958048441685,
        longitude: -1.6190185635742933,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    });

    const onIconPress = (item: any) => {
        // longitude: number, latitude: number
        // setDestination({ latitude, longitude });
        // setDirectionActive(true);
        navigation.navigate('BusinessScreen', { item });
    };

    return (
        <MapView showsPointsOfInterest={false} region={mapRegion} style={[StyleSheet.absoluteFill, { marginBottom: 20 }]} ref={(c) => (mapView = c)} showsUserLocation>
            {places.map((item: any, i: number) => {
                let latitude = item.geometry.location.lat;
                let longitude = item.geometry.location.lng;
                return (
                    <Marker
                        // onPress={() => onIconPress(longitude, latitude)}
                        onPress={() => onIconPress(item)}
                        key={`coordinate_${i}`}
                        coordinate={{ latitude, longitude }}
                    >
                        <Image source={Images.MARKER} style={styles.icon} />
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
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
});
