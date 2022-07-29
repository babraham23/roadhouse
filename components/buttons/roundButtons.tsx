import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../hooks/useTheme';
import { Feather, FontAwesome } from '@expo/vector-icons';

export const SmallPillButton = ({ onPress, title, clear, style }: any) => {
    const { colors }: any = useTheme();
    return (
        <TouchableOpacity activeOpacity={0.8} style={[style]} onPress={onPress}>
            <LinearGradient colors={[`${colors.primary}70`, colors.primary]} style={styles.wrapper}>
                <Text style={[styles.text, { color: colors.card }]}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export const MapButton = ({ onPress, title, clear, style, map }: any) => {
    const { colors }: any = useTheme();
    return (
        <TouchableOpacity activeOpacity={0.8} style={[style]} onPress={onPress}>
            <LinearGradient colors={[`${colors.primary}70`, colors.primary]} style={styles.mapWrapper}>
                <Text style={[styles.text, { color: colors.card }]}>{title}</Text>
                <View style={{ marginLeft: 10 }}>{map ? <FontAwesome name="map-o" size={14} color={colors.card} /> : <Feather name="list" size={14} color={colors.card} />}</View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: 60,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginHorizontal: 10,
    },
    clearWrapper: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    mapWrapper: {
        flexDirection: 'row',
        width: 85,
        height: 30,
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
});
