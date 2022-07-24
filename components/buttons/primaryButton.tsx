import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';

const PrimaryButton = ({ onPress, title, style }: any) => {
    const { colors, borderRadius } = useTheme();
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, { shadowColor: colors.primary }]}>
            <LinearGradient colors={[`${colors.primary}ac`, colors.primary]} style={[styles.wrapper, { borderRadius: borderRadius.button }]}>
                <Text bold center style={styles.text} fontSize={16} color={'white'}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        // marginTop: 30,
    },
    text: {
    },
});

export default PrimaryButton;
