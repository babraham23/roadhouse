import React, { useState, useRef } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Animated, Platform, TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import MenuHeader from '../headers/menuHeader';
import MenuScroll from '../menu/menuScroll';

const TabHeaderAccordion = ({ style, tabsVisible, icon, x, onPress }: any) => {
    const [open, setOpen] = useState(false);
    const { colors }: any = useTheme();
    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(0);

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight],
    });

    React.useEffect(() => {
        if (!tabsVisible) {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                useNativeDriver: false,
            }).start();
        }
        setOpen(!tabsVisible);
    });

    return (
        <View style={[Platform.OS === 'android' ? styles.containerAndroid : styles.containerIos, { backgroundColor: colors.background }]}>
            <MenuHeader />
            <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
                <View
                    style={[styles.bodyContainer, { backgroundColor: colors.background, borderBottomColor: colors.border }]}
                    onLayout={(event) => setBodySectionHeight(event.nativeEvent.layout.height)}
                >
                    <MenuScroll />
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerAndroid: {
        zIndex: 99,
        elevation: 99,
    },
    containerIos: {
        flex: 1,
        zIndex: 99,
        elevation: 99,
    },
    bodyBackground: {
        overflow: 'hidden',
    },
    bodyContainer: {
        height: 50,
        borderBottomWidth: 1,
        justifyContent: 'center',
    },
});

export default TabHeaderAccordion;
