import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

const BackButton = ({ onPress, style }: any) => {
    const { colors }: any = useTheme();
    const navigation = useNavigation();
    return (
        <View style={[style, styles.container]}>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                <Ionicons size={23} name={'arrow-back-sharp'} color={colors.text} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    label: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Bold',
        alignSelf: 'center',
    },
});
export default BackButton;
