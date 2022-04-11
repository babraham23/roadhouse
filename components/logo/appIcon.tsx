import React from 'react';
import { View, Image, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const AppIcon = ({ label, onPress, style }: any) => {
    const { border, colors }: any = useTheme();
    const navigation = useNavigation();
    const scheme = useColorScheme();
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={[style, styles.container]}>
            {/* <Animatable.View animation="bounceIn"> */}
            {scheme === 'dark' ? (
                <Image source={require('../../assets/mcdonalds/mcd_logo.png')} style={styles.logo} />
            ) : (
                <Image source={require('../../assets/mcdonalds/mcd_logo.png')} style={styles.logo} />
            )}
            {/* </Animatable.View> */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // margin: 10
    },
    logo: {
        height: 50,
        width: 50,
        borderRadius: 13,
        // resizeMode: 'contain',
    },
});
export default AppIcon;
