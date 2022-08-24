import React, { useState, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, TouchableOpacity } from 'react-native';
import { useScroller } from './/scrollContextProvider';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Text } from '../../style/typography';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    title?: string;
    hideBack?: boolean;
    onBackPress?: any;
}

const FadeHeader = ({ title, hideBack, onBackPress }: Props) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const { titleShowing } = useScroller();

    const [titleFade] = useState(new Animated.Value(0));

    useEffect(() => {
        titleShowing === false &&
            Animated.timing(titleFade, {
                toValue: 0,
                duration: 350,
                useNativeDriver: true,
                easing: Easing.sin,
            }).start();
        titleShowing === true &&
            Animated.timing(titleFade, {
                toValue: 1,
                duration: 350,
                useNativeDriver: true,
                easing: Easing.sin,
            }).start();
    }, [titleShowing]);

    return (
        <>
            {hideBack ? null : (
                <TouchableOpacity onPress={onBackPress ? onBackPress : () => navigation.goBack()} style={[styles.backWrapper, { backgroundColor: colors.card }]}>
                    <Ionicons name="arrow-back-sharp" size={24} color={colors.text} />
                </TouchableOpacity>
            )}

            <Animated.View
                style={{
                    opacity: titleFade,
                    ...styles.headerTitle,
                    borderBottomColor: colors.border,
                    borderBottomWidth: 1,
                    backgroundColor: colors.card,
                }}
            >
                <Text center bold fontSize={18}>
                    {title}
                </Text>
            </Animated.View>
        </>
    );
};

const styles = StyleSheet.create({
    backWrapper: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
        elevation: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
    },
    headerTitle: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        position: 'absolute',
        top: 0,
        zIndex: 9,
        elevation: 9,
    },
});

export default FadeHeader;
