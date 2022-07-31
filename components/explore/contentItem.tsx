import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text } from '../../style/typography';
import DisplayCard from '../cards/displayCard';
import { useTheme } from '../../hooks/useTheme';
import { restDD } from '../../screens/explore/dd';
import { useUserContext } from '../../context/user.context';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

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
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.header} bold >Heading</Text>
            <ScrollView horizontal style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                {places.map((item: any, index: number) => {
                    return (
                        <DisplayCard
                            onPress={() => navigation.navigate('BusinessScreen', { item })}
                            key={index}
                            item={item}
                            title={item.name}
                            location={item.formatted_address}
                            rating={item.rating}
                        />
                    );
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
        paddingTop: 10
    },
});
