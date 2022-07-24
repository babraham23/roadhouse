import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text } from '../../style/typography';
import DisplayCard from '../cards/displayCard';
import { useTheme } from '../../hooks/useTheme';
import { restDD } from '../../screens/explore/dd';
import { useUserContext } from '../../context/user.context';
import { useSelector } from 'react-redux';

// TODO
/**
    create api and google url files n shit
    get images

    sort by:
        price_level
        rating
        type
            meal_delivery
            restuarant
            food
            point_of_interest
            establishment
        user_ratings_total
 */

const ContentItem = () => {
    const { colors } = useTheme();
    const [isLoading, setLoading] = useState(false);
    const [data, setData]: any = useState([]);
    const { loading } = useSelector((state: any) => state.loadingReducer);
    const { longitude, latitude, places } = useUserContext();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Google API</Text>
            <ScrollView horizontal style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                {places.map((item: any, index: number) => {
                    return <DisplayCard key={index} item={item} title={item.name} location={item.formatted_address} rating={item.rating} />;
                })}
            </ScrollView>
        </View>
    );
};

export default ContentItem;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // borderWidth: 1
    },
    header: {
        paddingHorizontal: 20,
    },
});
