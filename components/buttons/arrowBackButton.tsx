import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ArrowBackButton = ({ onBackPress, style, border }: any) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={onBackPress ? onBackPress : () => navigation.goBack()}
            style={[style, styles.arrowWrapper, { backgroundColor: colors.background, borderColor: colors.border, borderWidth: border ? 0.5 : 0 }]}
        >
            <Ionicons name="arrow-back-sharp" size={24} color={colors.text} />
        </TouchableOpacity>
    );
};

export default ArrowBackButton;

const styles = StyleSheet.create({
    arrowWrapper: {
        zIndex: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
