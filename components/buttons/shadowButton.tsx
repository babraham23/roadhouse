import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
import { Text } from '../../style/typography';

const ShadowButton = ({ onPress, title, style, secondary }: any) => {
    const { colors, borderRadius }: any = useTheme();
    return (
        <>
            {!secondary ? (
                <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, styles.shadow2, { shadowColor: '#ff0e4e' }]}>
                    <LinearGradient
                        // colors={[colors.secondary, '#da9a9b']}
                        colors={[colors.primary, '#ff0e4e']}
                        style={[styles.wrapper, { borderRadius: borderRadius.button }]}
                    >
                        <Text bold center style={styles.text} fontSize={16} color={'white'}>
                            {title}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, styles.shadow, { shadowColor: colors.primary }]}>
                    <LinearGradient colors={['#04df6c', '#014421']} style={[styles.wrapper, { borderRadius: borderRadius.button }]}>
                        <Text bold center style={styles.text} fontSize={16} color={'white'}>
                            {title}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    shadow: {
        width: '100%',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
    },
    shadow2: {
        width: '100%',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
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

export default ShadowButton;

{
    /* <LinearGradient colors={[colors.primary, '#014421']} style={[styles.wrapper, { shadowColor: colors.green }]}>
<RegTextBold color={'white'} >{title}</RegTextBold>
</LinearGradient> */
}
