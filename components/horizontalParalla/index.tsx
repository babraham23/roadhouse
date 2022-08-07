import React, { useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import { View, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';
// import { items } from './assets';
import { useNavigation } from '@react-navigation/core';
import { Text } from '../../style/typography';
import { SET_MENU } from '../../state/reducers/menuReducer';
import { SET_MENU_ITEM } from '../../state/reducers/setMenuItem';
import { useDispatch } from 'react-redux';
import { products, restaurantDetails } from '../../_models/mcdonalds.model';
import { SET_RESTAURANT } from '../../state/reducers/restaurantReducer';
import { useUserContext } from '../../context/user.context';
import { getPlacesPhotos } from '../../api/endpoints';
import { useTheme } from '../../hooks/useTheme';

const HorizontalParallax = () => {
    const { width } = useWindowDimensions();
    const navigation: any = useNavigation();
    const dispatch = useDispatch();
    const scrollX = useRef(new Animated.Value(0)).current;
    const { places } = useUserContext();
    const { colors } = useTheme();

    const handleNav = (item: any) => {
        // dispatch({ type: SET_MENU, payload: products });
        // dispatch({ type: SET_MENU_ITEM, payload: products[0] });
        // dispatch({ type: SET_RESTAURANT, payload: restaurantDetails });
        // navigation.navigate('MenuScreen');
        navigation.navigate('BusinessScreen', { item });
    };

    // console.log('items -->', places[0].photos[0].photo_reference);

    return (
        <>
            <Text style={styles.header} bold>
                Heading
            </Text>
            <View style={styles.container}>
                {/* {places.map((image: any, index: any) => {
                    // console.log('1st -->', image.photos[0])
                    let googleImage =  image.photos !== undefined ? image.photos[0].photo_reference : '';
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 1, 0],
                    });
                    // console.log('1st -->', googleImage);
                    return (
                        <Animated.Image
                            // key={`image-bg-${index}`}
                            key={index}
                            source={{ uri: getPlacesPhotos(googleImage) }}
                            // source={image.image}
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
                })} */}

                <Animated.FlatList
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    decelerationRate="fast"
                    pagingEnabled
                    snapToInterval={width}
                    data={places}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        // console.log('2nd -->', item.photos[0])
                        let googleImage = item.photos !== undefined ? item.photos[0].photo_reference : '';
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
                            <TouchableOpacity onPress={() => handleNav(item)} activeOpacity={0.9} style={styles.cardContainer}>
                                <Animated.View style={[styles.cardInner, { transform: [{ scale }], borderColor: colors.seperator }]}>
                                    <Animated.Image
                                        style={[
                                            styles.cardImage,
                                            {
                                                transform: [{ translateY }, { scale: scaleImage }],
                                            },
                                            { position: 'absolute' },
                                        ]}
                                        // source={item.image}
                                        source={{ uri: getPlacesPhotos(googleImage) }}
                                    />
                                    <View style={styles.nameWrapper}>
                                        <Text color={'white'} bold fontSize={23} style={styles.title}>
                                            {item.name}
                                        </Text>
                                    </View>
                                    <View style={[styles.descriptionWrapper]}>
                                        <Text bold fontSize={23} color={'white'} style={styles.description}>
                                            This is a description about the place if there is one!
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
        flex: 1,
        marginVertical: 20,
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    cardContainer: {
        // height,
        // marginVertical: 20,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        // height: CARD_HEIGHT,
    },
    bigCard: {
        resizeMode: 'cover',
        // borderRadius: 8,
        height: CARD_HEIGHT * 1.09,
        width: '100%',
    },
    cardInner: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        // justifyContent: 'flex-end',
        overflow: 'hidden',
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 5,
        },
    },
    cardImage: {
        width: '100%',
        height: CARD_HEIGHT,
        resizeMode: 'cover',
    },
    descriptionWrapper: {
        position: 'absolute',
        bottom: 1,
        height: CARD_HEIGHT * 0.25,
        padding: 10,
    },
    title: {
        padding: 20,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: 'black',
    },
    description: {
        color: '#fff',
        fontSize: 14,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: 'black',
    },
    nameWrapper: {
        position: 'absolute',
        color: '#fff',
        fontSize: 14,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        textShadowColor: 'black',
    },
});

export default HorizontalParallax;
