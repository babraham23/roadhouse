import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import * as Animatable from 'react-native-animatable';
import { Text } from '../../style/typography';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    onPress?: any;
    title?: string;
};

const CheckoutButton: React.FC<Props> = ({ onPress, title }) => {
    const { colors, borderRadius } = useTheme();
    return (
        <Animatable.View
            style={[
                styles.buttonContainer,
                { backgroundColor: colors.card, borderTopColor: colors.border, borderTopLeftRadius: borderRadius.card, borderTopRightRadius: borderRadius.card },
            ]}
            animation="fadeInUpBig"
        >
            <View style={styles.totalWrapper}>
                <Text fontSize={17}>Order Total</Text>
                <Text bold fontSize={17}>
                    £50.00
                </Text>
            </View>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                <LinearGradient colors={[`${colors.primary}ac`, colors.primary]} style={[styles.button, { borderRadius: borderRadius.button }]}>
                    <Text bold center fontSize={16} color={'white'}>
                        {title}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </Animatable.View>
    );
};

export default CheckoutButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderTopWidth: 1,
        height: 130,
        width: '100%',
        padding: 15,
        paddingTop: 10,
    },
    totalWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        marginTop: 10,
    },
});
