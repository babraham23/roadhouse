import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

const BasketCloseButton = ({ onPress, style }: any) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <View style={[style, styles.container]}>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <Ionicons name="arrow-back-sharp" size={18} color={colors.primary} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});
export default BasketCloseButton;
