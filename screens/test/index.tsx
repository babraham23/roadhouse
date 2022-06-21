import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';

export default function App() {
    const [location, setLocation] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            if (Platform.OS === 'android' && !Device.isDevice) {
                setErrorMsg('Oops, this will not work on Snack in an Android Emulator. Try it on your device!');
                return;
            }
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            setLoading(true);
            let location = await Location.getCurrentPositionAsync({});
            console.log('location -->', location);
            setLocation(location);
            setLoading(false);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <React.Fragment>
            {loading ? (
                <View style={{ width: '100%', height: '100%', backgroundColor: 'red' }} />
            ) : (
                <View style={styles.container}>
                    <Text style={styles.paragraph}>{text}</Text>
                </View>
            )}
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
});
