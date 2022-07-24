import React, { useRef } from 'react';
import { StyleSheet, View, Animated, ScrollView, Dimensions } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { ScrollContextProvider } from './scrollContext';
import ModalHeader from '../headers/modalHeader';
import { API_KEY, getPlacesPhotos } from '../../api/endpoints';
import BusinessModalHeader from '../headers/businessModel';
import ImageCounter from '../carousel/imageCounter';

const IMAGE_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 85;
const HEADER_SCROLL_DISTANCE = IMAGE_MAX_HEIGHT - HEADER_MIN_HEIGHT;

// let photo_reference = "AeJbb3eb_ZErxkLGaSMG0gaAnFU6dffCrBrl4GT_rAtpIZYvKu3d-dBt-NmcmBIHMnNQrJpgfZvkSD4eiaM3JW3AczALMyxklvW5MTTwwY1LSdnB9PmxiNePiS8vVtTzTqPRkduxHZxmyn0UhcSgc8I8PbqUk0Ot9AGRxPpSxZpoETsaVFoP"
let maxheight = 2340;
let maxwidth = 4160;
const imageUrl = (photo_reference: any) =>
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&maxheight=${maxheight}&photo_reference=${photo_reference}&key=${API_KEY}`;

let { width } = Dimensions.get('window');

const ImageHeaderScroll = ({ image, children, title, hideClose, style, images }: any) => {
    const { colors }: any = useTheme();
    const scrollY = useRef(new Animated.Value(0)).current;

    const headerTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE + 40],
        outputRange: [0, -HEADER_SCROLL_DISTANCE - 35],
        extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, 150, 200],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });

    const imageTranslateY = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE + 30],
        outputRange: [0, 100],
        extrapolate: 'clamp',
    });

    return (
        <View style={styles.container}>
            <BusinessModalHeader hideClose={hideClose} title={title} />
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: IMAGE_MAX_HEIGHT - 32 }}
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: true,
                })}
            >
                <View style={style}>{children}</View>
            </Animated.ScrollView>
            <Animated.View style={[styles.header, { backgroundColor: colors.backgroundColor, transform: [{ translateY: headerTranslateY }] }]}>
                <ScrollView bounces={false} decelerationRate={'fast'} horizontal style={{ flex: 1 }} snapToInterval={width} showsHorizontalScrollIndicator={false}>
                    {images.map((image: any, index: number) => {
                        return (
                            <Animated.Image
                                key={index}
                                style={[
                                    styles.headerBackground,
                                    {
                                        opacity: imageOpacity,
                                        transform: [{ translateY: imageTranslateY }],
                                    },
                                ]}
                                source={{ uri: getPlacesPhotos(image.photo_reference) }}
                            />
                        );
                    })}
                </ScrollView>
                <Animated.View style={[styles.indexBox, { opacity: imageOpacity }]} >
                    <ImageCounter />
                </Animated.View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        height: IMAGE_MAX_HEIGHT + 20,
    },
    headerBackground: {
        alignSelf: 'center',
        marginTop: 45,
        height: IMAGE_MAX_HEIGHT,
        width,
        resizeMode: 'cover',
    },
    indexBox: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center'
    }
});

export default ImageHeaderScroll;
