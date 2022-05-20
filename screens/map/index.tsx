import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Map from '../../components/map';
import ModalHeader from '../../components/headers/modalHeader';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <ModalHeader />
            <Map />
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
