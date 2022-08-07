import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';
import { useMutation } from '@apollo/client';
import { useCreatePlaceMutation, useGetHamburgerPlacesQuery } from '../../graphql/generated/output';

const CreatePlace = () => {
    const [createPlace] = useCreatePlaceMutation();

    const places = useGetHamburgerPlacesQuery();

    const createPlaceCall = async () => {
        let variables = {
            keywords: 'Bar',
            placeName: 'The Forth Hotel',
            types: 'Bar',
            userRatingsTotal: 5,
            rating: 5,
            priceLevel: 3,
            isClient: true,
            lat: 54.9707219822929,
            lng: -1.6184184206980181,
            description: 'Greatest pub in the world',
            formattedAddress: 'Pink Ln, Newcastle upon Tyne NE1 5DW',
        };
        console.log('VARIABLES: ', variables);
        const data = await createPlace({
            variables,
        });
        if (data.data?.createPlace) console.log('success', data.data);
        else console.log('failure');

        // const place = await createPlaces({
        //     variables: {
        // description: 'Best Hamburgers!',
        // formattedAddress: '2-6 Shakespeare St, Newcastle upon Tyne NE1 6AQ',
        // lat: 54.97291955981489,
        // lng: -1.6119712145956389,
        // isClient: true,
        // rating: 4,
        // priceLevel: 4,
        // userRatingsTotal: 25,
        // types: 'Franchise',
        // place_name: 'Fat Hippo',
        // keywords: 'Hamburgers',
        //     },
        // });
        // if (place.data?.createPlace) console.log('success -->', place)
        // else console.log('failure')
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => createPlaceCall()}>
                <Text>CreatePlace</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CreatePlace;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
function createPlaceMutation(arg0: {
    variables: {
        keywords: string;
        placeName: string;
        types: string;
        userRatingsTotal: number;
        rating: number;
        priceLevel: number;
        isClient: boolean;
        lat: number;
        lng: number;
        description: string;
        formattedAddress: string;
    };
}) {
    throw new Error('Function not implemented.');
}
