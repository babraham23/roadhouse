import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';
import { useUpdateGeometryInPlaceMutation, useCreatePlaceMutation } from '../../graphql/generated/output';
import FormTemplate from './formTemplate';
import Input from '../inputs/textInput';
import { PlaceModel } from '../../_models/place.model';

const PlaceForm = () => {
    const [{ placeName, description, address1, address2, city, country, postcode, lat, lng, keywords }, setState] = React.useState<PlaceModel>({} as PlaceModel);
    const [addGeometryToPlaceMutation] = useUpdateGeometryInPlaceMutation();
    const [createPlaceMutation] = useCreatePlaceMutation({});

    async function updateGeometryData() {
        let variables = {
            id: '62f045cbfe2b2fc3aef8dee7', // value for 'id'
            lng: -1.6184184206980181, // value for 'lng'
            lat: 54.9707219822929, // value for 'lat'
        };
        let res = await addGeometryToPlaceMutation({ variables });
        console.log(res);
    }

    async function createPlace() {
        const variables = {
            placeName: 'RoadhouseHQ🍕', // value for 'placeName'
            description: 'Send Food!!', // value for 'description'
            address1: 'Clayton Street', // value for 'address1'
            address2: '', // value for 'address2'
            city: 'Newcastle', // value for 'city'
            postcode: 'NE15BY', // value for 'postcode'
            country: 'United Kingdom', // value for 'country'
            lat: 54.96952124011178, // value for 'lat'
            lng: -1.619495778338448, // value for 'lng'
            keywords: ['hamburgers', 'pizza', 'beer'], // value for 'keywords'
        };
        let res = await createPlaceMutation({ variables });
        console.log('place res -->', res.data?.createPlace);
    }

    return (
        <FormTemplate onPress={() => console.log(placeName, description)}>
            <Text style={styles.heading}>Name of Place</Text>
            <Input onChangeText={(value: string) => setState(prevState => ({ ...prevState, placeName: value }))} style={styles.input} />
            <Text style={styles.heading}>Description</Text>
            <Input onChangeText={(value: string) => setState(prevState => ({ ...prevState, description: value }))} style={styles.input} />
            <Text style={styles.heading}>Address Line 1</Text>
            <Input onChangeText={(value: string) => console.log(value)} style={styles.input} />
            <Text style={styles.heading}>Address Line 2</Text>
            <Input onChangeText={(value: string) => console.log(value)} style={styles.input} />
        </FormTemplate>
    );
};

export default PlaceForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        // paddingBottom: 10,
    },
    input: {
        paddingTop: 10,
        paddingBottom: 25,
    },
});
