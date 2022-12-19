import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';
import { useTheme } from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';

const DontHaveAnAccount = ({ style }) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.goBack();
        navigation.navigate('SignUpScreen');
    };

    return (
        <View style={[style, styles.container]}>
            <Text bold >Dont have an account? </Text>
            <TouchableOpacity onPress={() => handleNavigation()}>
                <Text bold color={colors.primary} textDecorationLine="underline">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default DontHaveAnAccount;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
