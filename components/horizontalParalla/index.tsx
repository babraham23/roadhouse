import React, { useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import { View, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';
import { items } from './assets';
import { useNavigation } from '@react-navigation/core';
import { Text } from '../../style/typography';
import { SET_MENU } from '../../state/reducers/menuReducer';
import { SET_MENU_ITEM } from '../../state/reducers/setMenuItem';
import { useDispatch } from 'react-redux';
import { products, appIcon } from '../../_models/mcdonalds.model';
import { subwayProducts } from '../../_models/subway.model';

const HorizontalParallax = (props: any) => {
    const { height, width } = useWindowDimensions();
    const navigation: any = useNavigation();
    const dispatch = useDispatch();
    const CARD_WIDTH = width * 0.9;
    const CARD_HEIGHT = CARD_WIDTH * 1.3;
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleNav = (id: any) => {
        if (id === 'mcdonalds') {
            let selectedItem = { title: products[0].title, Id: products[0].Id };
            dispatch({ type: SET_MENU, payload: products });
            dispatch({ type: SET_MENU_ITEM, payload: selectedItem });
            navigation.navigate('MenuScreen');
        } else if (id === 'subway') {
            let selectedItem = { title: subwayProducts[0].title, Id: subwayProducts[0].Id };
            dispatch({ type: SET_MENU, payload: subwayProducts });
            dispatch({ type: SET_MENU_ITEM, payload: selectedItem });
            navigation.navigate('MenuScreen');
        }
    };

    return (
        <>
            <Text fontSize={25} style={styles.boldTitle}>
                {/* {props.title} */}
            </Text>
            <View style={styles.container}>
                {items.map((image, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0],
                    });
                    return (
                        <Animated.Image
                            key={`image-bg-${index}`}
                            // source={{ uri: image }}
                            source={image.image}
                            style={[
                                StyleSheet.absoluteFillObject,
                                styles.bigCard,
                                {
                                    opacity,
                                },
                            ]}
                            blurRadius={2}
                        />
                    );
                })}

                <Animated.FlatList
                    onScroll={Animated.event(
                        // scrollX = e.nativeEvent.contentOffset.x
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX,
                                    },
                                },
                            },
                        ],
                        {
                            useNativeDriver: true,
                        }
                    )}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    // contentContainerStyle={{
                    //     justifyContent: 'center', alignItems: 'center', width
                    // }}
                    decelerationRate="fast"
                    pagingEnabled
                    snapToInterval={width}
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [1, 1, 1],
                        });
                        const scaleImage = scrollX.interpolate({
                            inputRange,
                            outputRange: [1.8, 1, 1.8],
                        });
                        const translateY = scrollX.interpolate({
                            inputRange,
                            outputRange: [-width * 0.4, 0, width * 0.4],
                        });
                        return (
                            <TouchableOpacity onPress={() => handleNav(item.id)} activeOpacity={0.9} style={styles.cardContainer}>
                                <Animated.View style={[styles.cardInner, { transform: [{ scale }] }]}>
                                    <Animated.Image
                                        style={[
                                            // StyleSheet.absoluteFillObject,
                                            styles.cardImage,
                                            {
                                                transform: [{ translateY }, { scale: scaleImage }],
                                            },
                                            { position: 'absolute' },
                                        ]}
                                        // source={{ uri: item }}
                                        source={item.image}
                                    />
                                    <View style={[styles.descriptionWrapper]}>
                                        <Text style={styles.title}>{item.name}</Text>
                                        <Text  style={styles.description}>
                                            {item.description}
                                        </Text>
                                    </View>
                                </Animated.View>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        </>
    );
};

const { width, height } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;
const CARD_HEIGHT = CARD_WIDTH * 1.3;

const styles = StyleSheet.create({
    container: {
        // height: 40
        flex: 1,
        // borderRadius: 8
        marginBottom: 40,
    },
    boldTitle: {
        paddingLeft: 20,
        marginTop: 20,
        paddingBottom: 10,
    },
    cardContainer: {
        height: height * 0.6,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigCard: {
        resizeMode: 'cover',
        borderRadius: 8,
        height: CARD_HEIGHT * 1.15,
        width: '100%',
    },
    cardInner: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        // justifyContent: 'flex-end',
        overflow: 'hidden',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 5,
        },
    },
    cardImage: {
        resizeMode: 'contain',
    },
    descriptionWrapper: {
        position: 'absolute',
        bottom: 1,
        height: CARD_HEIGHT * 0.25,
        padding: 10,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 10,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: 'black',
        fontWeight: 'bold',
    },
    description: {
        color: '#fff',
        fontSize: 14,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: 'black',
    },
});

export default HorizontalParallax;
