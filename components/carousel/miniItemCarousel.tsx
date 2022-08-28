import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import { Text } from '../../style/typography';
import RepeatCarouselItem from './repeatCarouselItem';

const { width } = Dimensions.get('window');

let MiniItem = () => {
    return (
        <View style={styles.itemWrapper}>
            <Text>Item</Text>
        </View>
    );
};

const MiniItemCarousel = ({ data }: any) => {
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);
    const flatListRef = useRef<FlatList>(null);

    function infiniteScroll(dataList) {
        const numberOfData = dataList.length;
        let scrollValue = 0,
            scrolled = 0;

        setInterval(function () {
            scrolled++;
            if (scrolled < numberOfData) scrollValue = scrollValue + width;
            else {
                scrollValue = 0;
                scrolled = 0;
            }
            flatListRef.current?.scrollToOffset({ animated: true, offset: scrollValue });
        }, 3000);
    }

    function onScroll(event: any) {
        const scrollValue = event.nativeEvent.contentOffset.x;
        scrollX.setValue(scrollValue);
    }

    useEffect(() => {
        setDataList(data);
        infiniteScroll(dataList);
    });

    if (data && data.length) {
        return (
            <View>
                <Text bold style={styles.header}>
                    Favourites
                </Text>
                <FlatList
                    data={data}
                    ref={flatListRef}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <MiniItem />;
                    }}
                    onScroll={(e) => onScroll(e)}
                />

                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp',
                        });
                        return <Animated.View key={i} style={{ opacity, height: 7, width: 7, backgroundColor: '#595959', margin: 8, borderRadius: 5 }} />;
                    })}
                </View>
            </View>
        );
    }

    console.log('Error');
    return null;
};

const styles = StyleSheet.create({
    dotView: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        bottom: 20,
        backgroundColor: 'grey',
        borderRadius: 8,
        opacity: 0.9,
    },
    header: {
        marginHorizontal: 20,
    },

    itemWrapper: {
        height: 50,
        width: 50,
    },
});

export default MiniItemCarousel;
