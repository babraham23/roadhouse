import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from '../../api/endpoints';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 54.96958048441685;
const LONGITUDE = -1.6190185635742933;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = API_KEY;

/**
 * Split_
 * Mapview
 * Marker
 * MapViewDirections
 */

let locationModel = {
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    latitude: 0,
    longitude: 0,
    speed: 0,
    timestamp: 0,
};

const Map = () => {
    let mapView: any = useRef();
    const [userLocation, setUserLocation] = useState(locationModel);
    const [coords, setCoords]: any = useState({
        coordinates: [
            // {
            //     latitude: 37.3317876,
            //     longitude: -122.0054812,
            // },
            // {
            //     latitude: 37.771707,
            //     longitude: -122.4053769,
            // },
        ],
    });
    const [mapRegion, setmapRegion] = React.useState({
        latitude: 54.96958048441685,
        longitude: -1.6190185635742933,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const onMapPress = (e: any) => {
        setCoords({
            coordinates: [...coords.coordinates, e.nativeEvent.coordinate],
        });
    };

    const setDirection = () => {};

    // console.log('state userlocation --.', userLocation)

    let userCurrentLocation = {
        coordinates: [
            {
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
            },
            {
                latitude: 54.97333100701173,
                longitude: -1.6150698456255437,
            },
        ],
    };

    return (
        <MapView
            initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}
            showsPointsOfInterest={false}
            region={mapRegion}
            style={StyleSheet.absoluteFill}
            ref={(c) => (mapView = c)}
            onPress={(e) => onMapPress(e)}
            showsUserLocation
            userLocationCalloutEnabled
            onUserLocationChange={(event: any) => setUserLocation(event.nativeEvent.coordinate)}
        >
            {coords.coordinates.map((item: any, i: number) => {
                return <Marker onPress={() => setDirection()} key={`coordinate_${i}`} coordinate={item} />;
            })}
            {coords.coordinates.length >= 2 && (
                <MapViewDirections
                    mode="WALKING"
                    origin={userCurrentLocation.coordinates[0]}
                    waypoints={userCurrentLocation.coordinates.length > 2 ? coords.coordinates.slice(1, -1) : undefined}
                    destination={userCurrentLocation.coordinates[userCurrentLocation.coordinates.length - 1]}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
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

const styles = StyleSheet.create({});
