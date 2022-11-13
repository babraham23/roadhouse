import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Images } from '../../style/images';
import { restDD } from '../../screens/explore/dd';
import { useNavigation } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY, restaurant_search } from '../../api/endpoints';
import { usePlacesContext } from '../../context/place.context';

const Map = () => {
    const { latitude, longitude } = usePlacesContext();
    const [resturants, setRestuarants] = React.useState([]);
    const [x, setState]: any = React.useState('');
    const [origin, setOrigin] = React.useState({});
    const [start, setStart]: any = React.useState({});
    const [end, setEnd]: any = React.useState({});
    const navigation: any = useNavigation();

    const [mapRegion, setmapRegion] = React.useState({
        latitude: 54.96958048441685,
        longitude: -1.6190185635742933,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    let lat1 = 54.96954708524686;
    let lng1 = -1.6185816574923975;

    let lat2 = 54.97182431251328;
    let lng2 = -1.614705617306483;

    // const origin = { latitude: lat1, longitude: lng1 };
    const destination = { latitude: lat2, longitude: lng2 };

    const calculateDistance = () => {
        setStart({ latitude: lat1, longitude: lng1 });
        setEnd({ latitude: lat2, longitude: lng2 });
    };

    const getRestaurants = async () => {
        let lat = 54.96963755347803;
        let lng = -1.619493032708466;
        try {
            const response = await fetch(restaurant_search(lng, lat));
            const json = await response.json();
            // const filterContent = json.results.filter((item: any) => item.rating === 2)
            setRestuarants(json.results);
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    React.useEffect(() => {
        getRestaurants();
    }, [origin]);

    return (
        <View style={styles.container}>
            <MapView
                onUserLocationChange={(event) => console.log('event', event.nativeEvent.coordinate)}
                // customMapStyle={mapOverlay}
                style={styles.map}
                userLocationCalloutEnabled
                showsUserLocation={true}
                showsPointsOfInterest={false}
                region={mapRegion}
            >
                {resturants.map((item: any, i: number) => {
                    let latitude = item.geometry.location.lat;
                    let longitude = item.geometry.location.lng;
                    return (
                        <Marker
                            key={i}
                            onPress={() => calculateDistance()}
                            // onPress={() => navigation.navigate('BusinessScreen', { item })}
                            // coordinate={coordinate}
                            coordinate={{ latitude, longitude }}
                        >
                            <Image source={Images.MARKER} style={styles.icon} />
                        </Marker>
                    );
                })}
                <MapViewDirections mode={'WALKING'} strokeWidth={4} strokeColor="#ff225c" origin={start} destination={end} apikey={API_KEY} />
            </MapView>
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
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
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
