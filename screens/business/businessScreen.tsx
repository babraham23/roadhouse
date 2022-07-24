import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text } from '../../style/typography';
import { Images } from '../../style/images';
import ImageHeaderScroll from '../../components/scrollContext/imageHeaderScroll';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { detailed_search } from '../../api/endpoints';
import ReviewCard from '../../components/layout/reviewCard';

/*
***** PARAMS *****
place_id
formatted_address
name

***** DETAILED *****
opening_hours 
photos


photos
price_level
rating
types: [
    "restaurant",
    "point_of_interest",
    "food",
    "establishment",
  ],
user_ratings_total
website

reviews

******FOR PAYING WE OFFER******
FOB
booking a table
Icon
Branding
more detailed description
more detailed photes
custom icons
on map
menu
how busy a place is 
*/

const BusinessScreen = ({ route }: any) => {
    let { photos, name, rating, formatted_address, place_id } = route.params.item;
    const { colors } = useTheme();
    const [images, setImages] = useState(photos);
    const [reviews, setReiews] = useState([]);
    // console.log('params in business screen -->', route.params.item);

    const getInformationAboutBusiness = async () => {
        try {
            const response = await fetch(detailed_search(place_id));
            const json = await response.json();
            console.log('json -->', json.result);
            setImages(json.result.photos ? json.result.photos : []);
            setReiews(json.result.reviews ? json.result.reviews : []);
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    useEffect(() => {
        getInformationAboutBusiness();
    }, []);

    return (
        <>
            <ImageHeaderScroll hideClose images={images} title={name} style={styles.container}>
                <Text bold fontSize={20}>
                    {name}
                </Text>
                <View style={[styles.section1, { borderBottomColor: 'darkgrey' }]}>
                    <View style={styles.ratingWrapper}>
                        <FontAwesome name="star" size={18} color="black" />
                        <Text>{rating}</Text>
                    </View>
                    <Text>{formatted_address}</Text>
                </View>
                <View style={[styles.section1, { borderBottomColor: 'darkgrey' }]}>
                    <Text bold fontSize={20}>
                        Opening Times
                    </Text>
                </View>
                <View style={[{ borderBottomColor: 'darkgrey', flex: 1 }]}>
                    {reviews.map((review: any, index: number) => {
                        let { author_name, author_url, profile_photo_url, rating, relative_time_description, text } = review;
                        return (
                            <ReviewCard
                                key={index}
                                author_name={author_name}
                                author_url={author_url}
                                profile_photo_url={profile_photo_url}
                                rating={rating}
                                relative_time_description={relative_time_description}
                                text={text}
                            />
                        );
                    })}
                </View>
            </ImageHeaderScroll>
            <View style={[styles.footerWrapper, { borderTopColor: colors.border }]}>
                <Text bold fontSize={20}>
                    Distance / View Menu
                </Text>
            </View>
        </>
    );
};

export default BusinessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    ratingWrapper: {
        flexDirection: 'row',
        width: '13%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
    },
    section1: {
        paddingVertical: 20,
        borderBottomWidth: 0.5,
    },
    footerWrapper: {
        height: 100,
        backgroundColor: 'white',
        borderTopWidth: 0.5,
    },
});
