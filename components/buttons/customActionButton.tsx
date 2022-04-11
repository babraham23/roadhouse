import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { Text } from '../../style/typography';

type Props = {
    height?: number;
    // borderRadius?: number
    primaryColor?: string;
    contrastColor?: string;
    onPress: any;
    title: string;
    style?: any;
};

const CustomActionButton = ({ onPress, title, style, primaryColor, contrastColor, height }: Props) => {
    const { colors, borderRadius }: any = useTheme();
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, styles.shadow]}>
            <LinearGradient colors={[`${colors.primary}`, `${colors.primary}`]} style={[styles.wrapper, { borderRadius: borderRadius.button }]}>
                <Text bold center style={styles.text} fontSize={16} color={'white'}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    shadow: {
        width: '100%',
        // shadowOffset: {
        // 	width: 0,
        // 	height: 10,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.0,
        // elevation: 24,
    },
    wrapper: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        // marginTop: 30,
    },
    text: {
        // alignItems: 'center',
        // justifyContent: 'center'
    },
});

export default CustomActionButton;
