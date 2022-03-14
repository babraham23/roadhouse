import React, { useState } from 'react';
import { Animated, SafeAreaView, Image, View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTheme } from '@react-navigation/native';
import { Images } from '../../style/images';

const HEADER_MAX_HEIGHT = 350;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const ParallaxScroll = ({ children, height, props }: any) => {
    const { colors }: any = useTheme();
    const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
    const clampedScroll = Animated.diffClamp(
        Animated.add(
            scrollYValue.interpolate({
                inputRange: [0, 15], // 45 for image
                outputRange: [0, 2],
                extrapolateLeft: 'clamp',
            }),
            new Animated.Value(0)
        ),
        0,
        50
    );

    const searchBarTranslate = clampedScroll.interpolate({
        inputRange: [0, 40],
        outputRange: [0, -250],
        extrapolate: 'clamp',
    });
    const searchBarOpacity = clampedScroll.interpolate({
        inputRange: [0, 7],
        outputRange: [2, 0],
        extrapolate: 'clamp',
    });

    // const stickyMarginTop = () => {
    //     const parallaxHeaderHeight = 450;
    //     const stickyHeaderHeight = 50;
    //     // const { parallaxHeaderHeight, stickyHeaderHeight } = props;
    //     return Math.abs(parallaxHeaderHeight - stickyHeaderHeight);
    //   }

    const imageOpacity = scrollYValue.interpolate({
        inputRange: [0, 200, 280],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });

    const imageTranslateY = scrollYValue.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 100],
        extrapolate: 'clamp',
    });

    const headerTranslateY = scrollYValue.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT],
        outputRange: [0, -HEADER_MAX_HEIGHT],
        extrapolate: 'clamp',
    });


    const snapToOffsets = [0, 210]; // this jumps down card height, so fucking cool!
    return (
        <View style={styles.container}>
            {/* <OpacityHeader clampedScroll={clampedScroll} /> */}
            <Animated.View
                style={[
                    styles.container,
                    {
                        transform: [
                            {
                                translateY: searchBarTranslate,
                            },
                        ],
                        opacity: searchBarOpacity,
                    },
                ]}
            >
                {/* <OpacityInput /> */}
                {/* <ExploreHeader /> */}
            </Animated.View>
            <Animated.ScrollView
                // snapToOffsets={snapToOffsets}
                // snapToEnd={false}
                decelerationRate="normal"
                scrollEventThrottle={16}
                stickyHeaderIndices={[1]}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContianer}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollYValue } } }]
                    // { useNativeDriver: true },
                )}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={styles.content}>{children}</View>
            </Animated.ScrollView>
            <Animated.View style={[styles.header, { backgroundColor: colors.background, transform: [{ translateY: headerTranslateY }] }]}>
                <Animated.Image
                    style={[
                        styles.headerBackground,
                        {
                            opacity: imageOpacity,
                            transform: [{ translateY: imageTranslateY }],
                        },
                    ]}
                    source={Images.ANT_B}
                />
            </Animated.View>
            <BlurView intensity={65} style={[StyleSheet.absoluteFill, styles.blurred]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red'
    },
    contentContianer: {},
    blurred: {
        height: 45,
    },
    content: {
        paddingTop: HEADER_MAX_HEIGHT,
    },
    imagesWrapper: {
        height: 250,
        width: '100%',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    headerBackground: {
        // alignSelf: 'center',
        height: HEADER_MAX_HEIGHT + 100, // mess around with this
        width: '100%',
        // resizeMode: 'center'
    },
    stickyHeader: {
        height: 50,
        width: '100%',
        // backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        top: 200,
    },
    stickyHeaderBackground: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default ParallaxScroll;
