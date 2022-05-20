import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';
import SearchInput from '../inputs/searchInput';

const ExploreHeader = ({ icon }: any) => {
    const { colors, borderRadius }: any = useTheme();
    const navigation = useNavigation();
    return (
        <View style={[styles.container]}>
            <SearchInput placeholder={'Search..'} />
            <TouchableOpacity
                onPress={() => navigation.navigate('MapScreen')}
                activeOpacity={0.6}
                style={[
                    styles.scannerWrapper,
                    { backgroundColor: colors.primary, borderBottomLeftRadius: borderRadius.input, borderBottomRightRadius: borderRadius.input, shadowColor: colors.primary },
                ]}
            >
                <FontAwesome name="map-o" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: 80,
        zIndex: 99,
    },
    blur: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        borderRadius: 15,
    },
    scannerWrapper: {
        position: 'absolute',
        top: 90,
        right: 35,
        // height: 30,
        // width: 150,
        paddingHorizontal: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
    },
});

export default ExploreHeader;
