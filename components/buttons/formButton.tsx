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

const FormButton: React.FC<Props> = ({ onPress, title }) => {
    const { colors, borderRadius } = useTheme();
    return (
        <Animatable.View
            style={[
                styles.buttonContainer,
                { backgroundColor: colors.card, borderTopColor: colors.border, borderTopLeftRadius: borderRadius.card, borderTopRightRadius: borderRadius.card },
            ]}
            animation="fadeInUpBig"
        >
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

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        borderTopWidth: 1,
        height: 100,
        width: '100%',
        padding: 10,
        paddingTop: 20,
    },
    button: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
    },
});
