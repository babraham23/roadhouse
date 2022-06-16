import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';
import SearchInput from '../inputs/searchInput';

const MapHeader = ({ icon }: any) => {
    const { colors, borderRadius }: any = useTheme();
    const navigation = useNavigation();
    return (
        <React.Fragment>
            <View style={[styles.container, { backgroundColor: colors.card }]}>
                <SearchInput placeholder={'Search..'} />
            </View>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: 100,
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

export default MapHeader;
