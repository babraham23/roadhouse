import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Text } from '../../style/typography';
import { useUpdateGeometryInPlaceMutation, useCreatePlaceMutation } from '../../graphql/generated/output';
import FormTemplate from './formTemplate';
import Input from '../inputs/textInput';
import { PlaceModel } from '../../_models/place.model';
import TextArea from '../inputs/textArea';
import NativePicker from '../pickers/NativePicker';
import NativePickerInput from '../pickers/NativePickerInput';

let pageDisc = 'What type of event is it?';

const CreateEventForm = () => {
    const [{ placeName, description, address1, address2, city, country, postcode, lat, lng, keywords }, setState] = React.useState(new PlaceModel());
    const [pickerVisible, setPickerVisible] = useState(false);
    const [addGeometryToPlaceMutation] = useUpdateGeometryInPlaceMutation();
    const [createPlaceMutation] = useCreatePlaceMutation({});
    const [selected, setSelected] = useState();

    async function updateGeometryData() {
        let variables = {
            id: '62f045cbfe2b2fc3aef8dee7', //'id'
            lng: -1.6184184206980181, //'lng'
            lat: 54.9707219822929, //'lat'
        };
        let res = await addGeometryToPlaceMutation({ variables });
        console.log(res);
    }

    async function createPlace() {
        const variables = {
            ...new PlaceModel(),
            placeName, //'placeName'
            description, //'description'
            address1, //'address1'
            address2, //'address2'
            city, //'city'
            postcode, //'postcode'
            country, //'country'
            // lat: 54.96952124011178, //'lat'
            // lng: -1.619495778338448, //'lng'
            lat,
            lng,
            keywords: ['hamburgers', 'pizza', 'beer'], //'keywords'
        };
        console.log('variables -->', variables);
        // let res = await createPlaceMutation({ variables });
    }

    const onPickerSelect = (value: any) => {
        console.log('value', value);
        setSelected(value);
    };

    return (
        <>
            <FormTemplate style={styles.container} noBack description={pageDisc} canContinue onPress={() => createPlace()}>
                <Text style={styles.heading}>Name of this event?</Text>
                <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, placeName: value }))} style={styles.input} />
                <Text style={styles.heading}>Type of event (dropdown)?</Text>
                <NativePickerInput visible={pickerVisible} selected={selected} onPress={() => setPickerVisible(!pickerVisible)} style={styles.input} />
                <Text style={styles.heading}>What's this all about? </Text>
                <TextArea onChangeText={(value: string) => setState((prevState) => ({ ...prevState, description: value }))} style={styles.input} />
                <Text style={styles.heading}>Location / Address</Text>
                <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, address1: value }))} style={styles.input} />
                <Text style={styles.heading}>Time and Date (date picker)</Text>
                <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, address2: value }))} style={styles.input} />
                {/* <View style={{ width: '50%' }}>
                <Text style={styles.heading}>Starts at</Text>
                <Input onChangeText={(value: string) => setState((prevState) => ({ ...prevState, postcode: value }))} style={styles.input} />
            </View> */}
            </FormTemplate>
            {pickerVisible ? <NativePicker onClosePress={() => setPickerVisible(false)} setSelected={(value: any) => onPickerSelect(value)} selected={selected} style={styles.picker} /> : null}
        </>
    );
};

export default CreateEventForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    heading: {
        // paddingBottom: 10,
    },
    input: {
        paddingTop: 10,
        paddingBottom: 25,
    },
    picker: {
        position: 'absolute',
        bottom: 0,
        // zIndex: 100,
        // elevation: 100,
    },
});
