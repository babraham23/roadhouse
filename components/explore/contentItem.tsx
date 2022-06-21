import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text } from '../../style/typography';
import DisplayCard from '../cards/displayCard';
import { useTheme } from '../../hooks/useTheme';
import { restDD } from '../../screens/explore/dd';
import { restaurant_location_search } from '../../api/endpoints';


const ContentItem = () => {
    const { colors } = useTheme();
    const [isLoading, setLoading] = useState(false);
    const [data, setData]: any = useState([]);

    const getRestaurants = async () => {
        let long = '-1.6193795715769634'
        let lat = '54.969580986593435'
        try {
            const response = await fetch(restaurant_location_search(long, lat));
            const json = await response.json();
            console.log('response -->', json)
            // setData(json.movies);
            setData(restDD);
            // getImages()
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
        <View style={styles.container}>
            <Text style={styles.header}>Recomended</Text>
            <ScrollView horizontal style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                {data.map((item: any, index: number) => {
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
