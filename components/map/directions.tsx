import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from '../../api/endpoints';

type Props = {
    coords?: any;
    userLocation?: any
    mapView?: any
};

const { width, height } = Dimensions.get('window');


const Directions = ({ coords, userLocation, mapView }: Props) => {
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
        <>
            {coords.coordinates.length >= 2 && (
                <MapViewDirections
                    mode="WALKING"
                    origin={userCurrentLocation.coordinates[0]}
                    waypoints={userCurrentLocation.coordinates.length > 2 ? coords.coordinates.slice(1, -1) : undefined}
                    destination={userCurrentLocation.coordinates[userCurrentLocation.coordinates.length - 1]}
                    apikey={API_KEY}
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
        </>
    );
};

export default Directions;

const styles = StyleSheet.create({});
