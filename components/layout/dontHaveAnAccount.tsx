import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';
import { useTheme } from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';

const DontHaveAnAccount = ({ style, haveAnAccount }: any) => {
    const { colors } = useTheme();
    const navigation = useNavigation();

    const handleNavigation = () => {
        // make sure android is handled correctly
        if (haveAnAccount) {
            navigation.goBack();
            navigation.navigate('SignInScreen');
        } else {
            navigation.goBack();
            navigation.navigate('RegisterScreen');
        }
    };

    return (
        <View style={[style, styles.container]}>
            {haveAnAccount ? (
                <>
                    <Text bold>Already have an account? </Text>
                    <TouchableOpacity onPress={() => handleNavigation()}>
                        <Text bold color={colors.primary} textDecorationLine="underline">
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </>
            ) : (
                <>
                    <Text bold>Dont have an account? </Text>
                    <TouchableOpacity onPress={() => handleNavigation()}>
                        <Text bold color={colors.primary} textDecorationLine="underline">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

export default DontHaveAnAccount;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
