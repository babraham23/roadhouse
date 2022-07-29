import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import MapView from 'react-native-maps';

type Props = {
    children?: any;
    setUserLocation?: any;
    coords?: any;
    setCoords?: any;
    mapView?: any;
};

const regionModel = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
};

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 54.96958048441685;
const LONGITUDE = -1.6190185635742933;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapViewComponent = ({ children, setUserLocation, setCoords, coords, mapView }: Props) => {
    const [mapRegion, setmapRegion] = useState({
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
            {children}
        </MapView>
    );
};

export default MapViewComponent;

const styles = StyleSheet.create({});
