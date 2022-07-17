import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from '../../api/endpoints';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 54.97182431251328;
const LONGITUDE = -1.614705617306483;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = API_KEY;

class Example extends Component {
    mapView: any;
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {
            coordinates: [
                {
                    latitude: 37.3317876,
                    longitude: -122.0054812,
                },
                {
                    latitude: 37.771707,
                    longitude: -122.4053769,
                },
            ],
        };
        this.mapView = null;
    }

    onMapPress = (e: any) => {
        this.setState({
            coordinates: [...this.state.coordinates, e.nativeEvent.coordinate],
        });
    };

    render() {
        return (
            <View style={{ height: '50%' }}>
                <MapView
                    initialRegion={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                    style={StyleSheet.absoluteFill}
                    ref={(c: any) => (this.mapView = c)}
                    onPress={this.onMapPress}
                >
                    {this.state.coordinates.map((coordinate: any, index: any) => (
                        <Marker key={`coordinate_${index}`} coordinate={coordinate} />
                    ))}
                    {this.state.coordinates.length >= 2 && (
                        <MapViewDirections
                            origin={this.state.coordinates[0]}
                            waypoints={this.state.coordinates.length > 2 ? this.state.coordinates.slice(1, -1) : undefined}
                            destination={this.state.coordinates[this.state.coordinates.length - 1]}
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

                                this.mapView.fitToCoordinates(result.coordinates, {
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
            </View>
        );
    }
}

export default Example;
