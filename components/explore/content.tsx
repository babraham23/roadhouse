import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { restDD } from '../../screens/explore/dd';
import { Text } from '../../style/typography';
import { BottomSheetFlatList, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useTheme } from '../../hooks/useTheme';
import DisplayCard from '../cards/displayCard';

// TODO
/**
    create api and google url files n shit
    get images
    

 */

const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location=54.9696,1.6198&radius=9&key=AIzaSyBxDwgAiRmplHmbQfNrX4FJ4ZgqA0wp9X4';
const imageUrl =
    'https://maps.googleapis.com/maps/api/place/photo?maxwidth=5760&photo_reference=Aap_uEDG_5XxjBsX4VolxN-rlinaZY4quSkKl53wa2yLl-_ZlEk173tCTJ9Q-59MoetsSWg3w5HKEWAf4L4KOPrKXvS5TsJT9dBueOPogWA1w6PQ-_MKsUk8bYl-crHdcrNDDTdceEQbMO1vzT0FTRca7aCkhtUkKwQIBGiFSjpcO15Eg8TY&key=AIzaSyBxDwgAiRmplHmbQfNrX4FJ4ZgqA0wp9X4';

const Content = ({ openSheet }: any) => {
    const { colors } = useTheme();
    const [isLoading, setLoading] = useState(false);
    const [data, setData]: any = useState([]);

    const getRestaurants = async () => {
        try {
            // const response = await fetch(url);
            // const json = await response.json();
            // setData(json.movies);
            setData(restDD);
            // getImages()
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getImages = async () => {
        try {
            const response = await fetch(imageUrl);
            const json = await response;
            console.log('response -->', json);
            // setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRestaurants();
    }, []);

    return (
        <React.Fragment>
            <BottomSheetScrollView contentContainerStyle={[styles.contentContainer, { backgroundColor: colors.background }]}>
                <Text style={styles.header}>Recomended</Text>
                <ScrollView horizontal style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                    {data.map((item: any, index: number) => {
                        return <DisplayCard key={index} item={item} title={item.name} location={item.formatted_address} rating={item.rating} />;
                    })}
                </ScrollView>
            </BottomSheetScrollView>
        </React.Fragment>
    );
};

export default Content;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingTop: 20,
    },
    header: {
        paddingHorizontal: 20,
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: '#eee',
    },
});
