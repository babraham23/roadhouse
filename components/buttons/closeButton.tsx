import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

const CloseButton = ({ onPress, style }: any) => {
    const { colors }: any = useTheme();
    const navigation = useNavigation();
    return (
        <View style={[style, styles.container]}>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                <MaterialCommunityIcons name="window-close" size={18} color={colors.text} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});
export default CloseButton;
