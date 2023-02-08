import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Images } from '../../style/images';

const Icons = ({ title }: any) => {
    let active = true;
    return (
        <View>
            {title == 'Bars' ? <Image source={active ? Images.BEER : Images.BEER_NOT} style={styles.icon} /> : null}
            {title == 'Restaurants' ? <Image source={active ? Images.RESTAURANT : Images.RESTAURANT_NOT} style={styles.icon} /> : null}
            {title == 'Markets' ? <Image source={active ? Images.MARKET : Images.MARKET_NOT} style={styles.icon} /> : null}
            {title == 'Liked' ? <Image source={active ? Images.HEART : Images.HEART_NOT} style={styles.icon} /> : null}
            {title == 'Hamburgers' ? <Image source={active ? Images.HAMBURGER : Images.HEART_NOT} style={styles.icon} /> : null}
            {title == 'Make Friends' ? <Image source={active ? Images.FRIENDS : Images.FRIENDS} style={styles.friendsIcon} /> : null}
        </View>
    );
};

export default Icons;

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    friendsIcon: {
        width: 40,
        height: 20,
        resizeMode: 'cover',
    }
});
