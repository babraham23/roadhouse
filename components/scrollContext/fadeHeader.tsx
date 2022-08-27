import React, { useState, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, TouchableOpacity } from 'react-native';
import { useScroller } from './/scrollContextProvider';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Text } from '../../style/typography';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HeartButton from '../buttons/heartButton';

interface Props {
    title?: string;
    hideBack?: boolean;
    onBackPress?: any;
    hideClose?: boolean;
    onClosePress?: any;
}

const FadeHeader = ({ title, hideBack, onBackPress, hideClose, onClosePress }: Props) => {
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

            {hideClose ? null : (
                <HeartButton style={[styles.closeWrapper]} />
                // <TouchableOpacity onPress={onClosePress ? onClosePress : () => navigation.goBack()} style={[styles.closeWrapper, { backgroundColor: colors.card }]}>
                //     <MaterialCommunityIcons name="window-close" size={20} color={colors.text} />
                // </TouchableOpacity>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    backWrapper: {
        position: 'absolute',
        top: 10,
        left: 15,
        zIndex: 10,
        elevation: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 3    0,
        position: 'absolute',
        top: 0,
        zIndex: 9,
        elevation: 9,
    },
    closeWrapper: {
        position: 'absolute',
        top: 10,
        right: 15,
        zIndex: 10,
        elevation: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FadeHeader;
