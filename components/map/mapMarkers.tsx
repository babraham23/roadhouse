import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useUserContext } from '../../context/user.context';
import { Images } from '../../style/images';

const MapMarkers = ({ place }: any) => {
    // const { place } = useUserContext();
    return (
        <View>
            {place == 'Bars' ? <Image source={Images.BEER} style={styles.icon} /> : null}
            {place == 'Restaurants' ? <Image source={Images.RESTAURANT} style={styles.icon} /> : null}
            {place == 'Markets' ? <Image source={Images.MARKET} style={styles.icon} /> : null}
            {place == 'Liked' ? <Image source={Images.HEART} style={styles.icon} /> : null}
            {place == 'Hamburgers' ? <Image source={Images.HAMBURGER} style={styles.icon} /> : null}
        </View>
    );
};

export default MapMarkers;

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});
