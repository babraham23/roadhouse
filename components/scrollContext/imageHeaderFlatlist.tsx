import React, { useRef, useState } from 'react';
import { StyleSheet, View, Animated, Dimensions } from 'react-native';
import FadeHeader from './fadeHeader';

const imagesDummyData = [
    {
        title: 'Anise Aroma Art Bazar',
        url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        id: 1,
    },
    {
        title: 'Food inside a Bowl',
        url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        id: 2,
    },
    {
        title: 'Vegatable Salad',
        url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        id: 3,
    },
]

const IMAGE_MAX_HEIGHT = 500;
const HEADER_SHOW = IMAGE_MAX_HEIGHT / 1.5;


let { width } = Dimensions.get('window');

const ImageHeaderFlatlist = ({ children, title, hideClose, style, images }: any) => {
    const [headerShow, setHeaderShow] = useState(false);
    const scrollY = useRef(new Animated.Value(0)).current;

    const headerTranslateY = scrollY.interpolate({
        inputRange: [0, 400],
        outputRange: [0, 20],
        extrapolate: 'clamp',
    });

    const imageTranslateY = scrollY.interpolate({
        inputRange: [0, IMAGE_MAX_HEIGHT],
        outputRange: [0, IMAGE_MAX_HEIGHT / 2],
        extrapolate: 'clamp',
    });

    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: true,
        listener: (event: any) => {
            let val = event.nativeEvent.contentOffset.y;
            setHeaderShow(val >= HEADER_SHOW);
            // console.log('event -->', event.nativeEvent.contentOffset.y);
            // // const offsetY = event.nativeEvent.contentOffset.y
            // // do something special
        },
    });

    return (
        <View style={styles.container}>
            <FadeHeader title={'test'} titleShowing={headerShow} />
            <Animated.ScrollView
                decelerationRate={100}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: IMAGE_MAX_HEIGHT }}
                scrollEventThrottle={16}
                onScroll={onScroll}
            >
                <View style={[style]}>
                    <View style={{ width: '100%', height: 500, backgroundColor: 'black' }} />
                    <View style={{ width: '100%', height: 500, backgroundColor: 'green' }} />
                </View>
                <Animated.ScrollView
                    bounces={false}
                    decelerationRate={'fast'}
                    style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}
                    horizontal
                    snapToInterval={width}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                >
                    {imagesDummyData.map((image: any, index: number) => {
                        return (
                            <Animated.Image
                                key={index}
                                style={[
                                    styles.headerBackground,
                                    {
                                        transform: [{ translateY: imageTranslateY }],
                                    },
                                ]}
                                source={{ uri: image.url }}
                            />
                        );
                    })}
                </Animated.ScrollView>
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        overflow: 'hidden',
        // height: IMAGE_MAX_HEIGHT + 20,
    },
    headerBackground: {
        alignSelf: 'center',
        // marginTop: 45,
        height: IMAGE_MAX_HEIGHT,
        width,
        resizeMode: 'cover',
    },
    indexBox: {
        // position: 'absolute',
        // bottom: 10,
        // alignSelf: 'center',
    },
});

export default ImageHeaderFlatlist;
