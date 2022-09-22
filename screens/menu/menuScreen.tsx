import React from 'react';
import { Dimensions, View, ScrollView, StyleSheet, Platform } from 'react-native';
import Animated, { useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, interpolateColor } from 'react-native-reanimated';
import { useSelector } from 'react-redux';

import Card from '../../components/cards/bigCard';
import Products from '../../components/menu/products';
import TabHeaderAccordion from '../../components/headers/tabHeaderAccordion';
import Content from '../../components/menu/content';
import ViewBasketButton from '../../components/buttons/viewBasketButton';
import { usePlacesContext } from '../../context/place.context';
import { createIconSetFromFontello } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const snapToOffsets = [0, Platform.OS === 'android' ? 400 : 380];

const MenuScreen = () => {
    const scrollRef: any = React.useRef();
    const yRef: any = React.useRef();
    const [tabsVisible, setTabsVisible] = React.useState(false);
    const translateX = useSharedValue(0);
    let selectedMenuItem: any = useSelector((state: any) => state.menuItemReducer);
    let [posArr]: any = React.useState([]);

    const { products } = usePlacesContext();

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => (translateX.value = event.contentOffset.x),
    });

    const backgroundColorInter = useAnimatedStyle((): any => {
        let backgroundColor;
        if (products.length >= 2) {
            backgroundColor = interpolateColor(
                translateX.value,
                products.map((_: any, i: any) => width * i),
                products.map((product: any) => product.cardBackgroundColor)
            );
        } else backgroundColor = products[0].cardBackgroundColor;
        return { backgroundColor };
    });

    const handleTabScroll = (nativeEvent: any) => {
        if (nativeEvent.contentOffset.y > 150) setTabsVisible(true);
        else if (nativeEvent.contentOffset.y < 150) setTabsVisible(false);
    };

    const autoScrollFromTabBar = () => {
        const selectedItem = products.map((item: any, index: any) => ({ Id: item.Id, index: index })).find((item: any) => item.Id === selectedMenuItem.Id);
        setTimeout(() => doScroll(selectedItem.index), 150);
    };

    const doScroll = (index: any) => {
        scrollRef.current?.scrollTo({
            x: posArr[index],
            animated: true,
        });
    };

    const scrollToContent = () => {
        yRef.current?.scrollTo({
            y: Platform.OS === 'android' ? 400 : 380,
            animated: true,
        });
    };

    React.useEffect(() => {
        autoScrollFromTabBar();
    });

    return (
        <View>
            <TabHeaderAccordion tabsVisible={tabsVisible} />
            <Animated.View style={backgroundColorInter}>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    snapToOffsets={snapToOffsets}
                    snapToEnd={false}
                    decelerationRate="fast"
                    scrollEventThrottle={16}
                    onScroll={({ nativeEvent }: any) => handleTabScroll(nativeEvent)}
                    ref={yRef}
                >
                    <View style={styles.slider}>
                        <Animated.ScrollView
                            onScroll={onScroll}
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                            snapToInterval={width}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ref={scrollRef}
                            bounces={products.length >= 2 ? true : false}
                        >
                            {products.map((product: any, index: any) => {
                                return (
                                    <View
                                        key={index}
                                        onLayout={(event: any) => {
                                            const layout = event.nativeEvent.layout;
                                            posArr[index] = layout.x;
                                        }}
                                    >
                                        <Card index={product.index} onPress={() => scrollToContent()} product={product} />
                                    </View>
                                );
                            })}
                        </Animated.ScrollView>
                        <Products products={products} x={translateX} />
                    </View>
                    <Content />
                </ScrollView>
            </Animated.View>
            <ViewBasketButton />
        </View>
    );
};

const styles = StyleSheet.create({
    slider: {
        height: 420,
        marginTop: Platform.OS === 'android' ? 0 : 110,
    },
});

export default MenuScreen;
