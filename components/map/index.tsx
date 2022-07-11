import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useUserContext } from '../../context/user.context';
import { mapOverlay } from './overlay' 

const Map = () => {
    const { latitude, longitude } = useUserContext();
    const [x, setState]: any = React.useState('');
    console.log(latitude, longitude);

    const [mapRegion, setmapRegion] = React.useState({
        latitude: 54.96958048441685,
        longitude: -1.6190185635742933,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    return (
        <View style={styles.container}>
            <MapView customMapStyle={mapOverlay} style={styles.map} showsUserLocation={true} showsPointsOfInterest={false} region={mapRegion} />
                {/* <Marker draggable coordinate={x} onDragEnd={(e) => setState({ x: e.nativeEvent.coordinate })} />
            </MapView> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Map;

//   function getRegionForCoordinates(points: any[]) {
//     // points should be an array of { latitude: X, longitude: Y }
//     let minX: number, maxX: number, minY: number, maxY: number;

//     // init first point
//     ((point) => {
//       minX = point.latitude;
//       maxX = point.latitude;
//       minY = point.longitude;
//       maxY = point.longitude;
//     })(points[0]);

//     // calculate rect
//     points.map((point: { latitude: number; longitude: number; }) => {
//       minX = Math.min(minX, point.latitude);
//       maxX = Math.max(maxX, point.latitude);
//       minY = Math.min(minY, point.longitude);
//       maxY = Math.max(maxY, point.longitude);
//     });

//     const midX = (minX + maxX) / 2;
//     const midY = (minY + maxY) / 2;
//     const deltaX = (maxX - minX);
//     const deltaY = (maxY - minY);

//     return {
//       latitude: midX,
//       longitude: midY,
//       latitudeDelta: deltaX,
//       longitudeDelta: deltaY
//     };
//   }
