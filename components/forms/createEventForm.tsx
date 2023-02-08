import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Text } from '../../style/typography';
import { useUpdateGeometryInPlaceMutation, useCreatePlaceMutation } from '../../graphql/generated/output';
import FormTemplate from './formTemplate';
import Input from '../inputs/textInput';
import { PlaceModel } from '../../_models/place.model';
import TextArea from '../inputs/textArea';
import NativePicker from '../pickers/NativePicker';
import DatePicker from '../pickers/DatePicker';
import { CreateEventModel } from '../../_models/createEvent.model';

let pageDisc = 'What type of event is it?';

const CreateEventForm = ({ lat, lng }: any) => {
    const [{ title, description, address1, placeName, city, country, postcode }, setState] = React.useState(new CreateEventModel());
    const [pickerVisible, setPickerVisible] = useState(false);
    const [addGeometryToPlaceMutation] = useUpdateGeometryInPlaceMutation();
    const [createPlaceMutation] = useCreatePlaceMutation({});
    const [selected, setSelected] = useState();
    const [ date, setDate ] = useState(new Date());

    async function updateGeometryData() {
        let variables = {
            id: '62f045cbfe2b2fc3aef8dee7', //'id'
            lng: -1.6184184206980181, //'lng'
            lat: 54.9707219822929, //'lat'
        };
        let res = await addGeometryToPlaceMutation({ variables });
        console.log(res);
    }

    async function createEvent() {
        const variables = {
            ...new CreateEventModel(),
            title, //'placeName'
            description, //'description'
            address1, //'address1'
            placeName, //'address2'
            city, //'city'
            postcode, //'postcode'
            country, //'country'
            // lat: 54.96952124011178, //'lat'
            // lng: -1.619495778338448, //'lng'
            lat,
            lng,
            date, //'keywords'
        };
        console.log('variables -->', variables);
        // let res = await createEventMutation({ variables });
    }

    const onPickerSelect = (value: any) => {
        console.log('value', value);
        setSelected(value);
    };

    const onDateTimeSelect = (value: any) => {
        console.log('value', value);
        setDate(date)
    };

    return (
        <>
            <FormTemplate buttonTitlle="Create Event" style={styles.container} noBack description={pageDisc} canContinue onPress={() => createEvent()}>
                <Text style={styles.heading}>Name of this event?</Text>
                <Input value={title} onChangeText={(value: string) => setState((prevState) => ({ ...prevState, title: value }))} style={styles.input} />
                <Text style={styles.heading}>Type of event (dropdown)?</Text>
                <NativePicker onClosePress={() => setPickerVisible(false)} setSelected={(value: any) => onPickerSelect(value)} selected={selected} style={styles.picker} />
                <Text style={styles.heading}>What's this all about? </Text>
                <TextArea  value={description} onChangeText={(value: string) => setState((prevState) => ({ ...prevState, description: value }))} style={styles.input} />
                <Text style={styles.heading}>Where is the event?</Text>
                <Input value={lat.toString() + lng.toString()} onChangeText={(value: string) => setState((prevState) => ({ ...prevState, address1: value }))} style={styles.input} />
                <Text style={styles.heading}>Time and Date (date picker)</Text>
                <DatePicker onChange={onDateTimeSelect} />
            </FormTemplate>
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
