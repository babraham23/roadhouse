import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const SIZE = 223;

const Products = ({ x, products }: any) => {
    return (
        <View style={styles.container} pointerEvents="none">
            {products.map((product: any, index: any) => {
                const style = useAnimatedStyle(() => {
                    // const translateX = interpolate(
                    // 	x.value,
                    // 	[(index - 1) * width, index * width, (index + 1) * width],
                    // 	[width / 2, 0, -width / 2]
                    // );

                    const translateX = interpolate(
                        x.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        // [width / 2, 0, -width / 2]
                        [width / 1, 0, -width / 1]
                    );

                    const scale = interpolate(x.value, [(index - 1) * width, index * width, (index + 1) * width], [0, 1, 0]);

                    return {
                        transform: [{ translateX }, { scale }],
                    };
                });
                return (
                    <Animated.View key={index} style={[styles.container, style]}>
                        <View style={styles.imageWrapper}>
                            <Image source={product.picture} style={{ width: SIZE, height: 220, resizeMode: 'contain' }} />
                        </View>
                    </Animated.View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        marginTop: 55,
        alignItems: 'center',
    },
    imageWrapper: {
        width: 300,
        height: 220,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Products;
