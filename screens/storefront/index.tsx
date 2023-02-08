import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScrollContextProvider from '../../components/scrollContext/scrollContextProvider';
import SlopeCard from '../../components/layout/slopeCard';
import { Images } from '../../style/images';
import { useTheme } from '../../hooks/useTheme';
import MiniProductCarousel from '../../components/storefront/miniProductCarousel';
import RepeatCarousel from '../../components/carousel/repeatCarousel';
import BottomButtonLayout from '../../components/business/bottomButtonLayout';
import StoreSearch from '../../components/inputs/storeSearch';
import FAB from '../../components/buttons/FAB';

const dummyData = [
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
    // {
    //     title: 'Anise Aroma Art Bazar',
    //     url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    //     id: 4,
    // },
    // {
    //     title: 'Food inside a Bowl',
    //     url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    //     id: 5,
    // },
    // {
    //     title: 'Vegatable Salad',
    //     url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
    //     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    //     id: 6,
    // },
];

const StorefrontScreen = () => {
    let title = 'McDonalds';
    const { colors } = useTheme();
    return (
        <>
            <ScrollContextProvider style={{ flex: 1, backgroundColor: colors.card }} title={title}>
                <View style={[styles.imageContainer]}>
                    <Image source={Images.LOCATION} style={styles.image} />
                </View>
                <SlopeCard title={'McDonalds'} />
                <StoreSearch style={{ paddingHorizontal: 10 }} placeholder={'Search McDonalds'} />
                <MiniProductCarousel big />
                <RepeatCarousel data={dummyData} />
                <MiniProductCarousel />
            </ScrollContextProvider>
            <FAB style={styles.fab} />
            {/* <BottomButtonLayout pro /> */}
        </>
    );
};

export default StorefrontScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 150,
    },
    image: {
        width: '100%',
        height: 200,
    },
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 40,
    },
});
