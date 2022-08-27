import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

let dd = Array.from(Array(10).keys());

let dd2 = [
    {
        id: 1,
        color: 'green',
    },
    {
        id: 2,
        color: 'red',
    },
    {
        id: 3,
        color: 'blue',
    },
    {
        id: 1,
        color: 'green',
    },
    {
        id: 2,
        color: 'red',
    },
    {
        id: 3,
        color: 'blue',
    },
];

const MiniProductCarousel = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                {dd2.map((item: any, index: number) => {
                    return (
                        <View key={index} style={styles.item}>
                            <View key={index} style={[styles.image, { backgroundColor: item.color }]} />
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default MiniProductCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        height: 100,
        width: 100,
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 50,
        width: 50,
    },
});
