import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';
import { Images } from '../../style/images';

let dd = Array.from(Array(10).keys());

let dd2 = [
    {
        id: 1,
        color: 'green',
        image: Images.BIG_MAC,
        title: 'Hamburgers',
    },
    {
        id: 2,
        color: 'red',
        image: Images.NUGGETS,
        title: 'Nuggets',
    },
    {
        id: 3,
        color: 'blue',
        image: Images.CHICKEN2,
        title: 'Chicken',
    },
    {
        id: 4,
        color: 'green',
        image: Images.COFFEE2,
        title: 'Coffee',
    },
    {
        id: 5,
        color: 'green',
        image: Images.BIG_MAC,
        title: 'Hamburgers',
    },
    {
        id: 6,
        color: 'red',
        image: Images.NUGGETS,
        title: 'Nuggets',
    },
];

type Props = {
    big?: boolean;
};

const MiniProductCarousel: React.FC<Props> = ({ big }) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title} bold >Title</Text> */}
            <ScrollView horizontal style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                {dd2.map((item: any, index: number) => {
                    return (
                        <View key={index} style={styles.item}>
                            {/* <View key={index}  /> */}
                            <Image source={item.image} style={[big ? styles.imageBig : styles.image]} />
                            <Text bold style={styles.productTitle}>
                                {item.title}
                            </Text>
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
        // marginVertical: 10
    },
    item: {
        // height: 100,
        // width: 100,
        // backgroundColor: 'cyan',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        height: 70,
        width: 70,
        resizeMode: 'contain',
    },
    imageBig: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
    title: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    productTitle: {},
});
