import { Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Images } from '../../style/images';
import BottomButtonLayout from '../../components/business/bottomButtonLayout';
import { GoogleSchema } from '../../_dummydata_/googleapi';
import ImageHeaderFlatlist from '../../components/scrollContext/imageHeaderFlatlist';

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

const list = [
    'https://i.picsum.photos/id/0/5616/3744.jpg',
    'https://i.picsum.photos/id/1/5616/3744.jpg',
    'https://i.picsum.photos/id/10/2500/1667.jpg',
    'https://i.picsum.photos/id/100/2500/1656.jpg',
    'https://i.picsum.photos/id/1000/5626/3635.jpg',
    'https://i.picsum.photos/id/1001/5616/3744.jpg',
    'https://i.picsum.photos/id/1024/1920/1280.jpg',
    'https://i.picsum.photos/id/1023/3955/2094.jpg',
    'https://i.picsum.photos/id/1022/6000/3376.jpg',
    'https://i.picsum.photos/id/1021/2048/1206.jpg',
];

const BusinessScreen = ({ route }: any) => {
    let { photos, name } = GoogleSchema;
    const [images, setImages] = useState(photos);
    return (
        <View style={{ flex: 1 }}>
            <ImageHeaderFlatlist />
        </View>
    );
};

export default BusinessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
});
