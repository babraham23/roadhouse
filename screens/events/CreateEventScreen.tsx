import { StyleSheet, View } from 'react-native';
import React from 'react';
import ModalHeader from '../../components/headers/modalHeader';
import { Text } from '../../style/typography';

const CreateEventScreen = () => {
    return (
        <>
            <ModalHeader title="Create Event" />
            <View style={styles.container}>
                <Text>If navigated from a restaurant show name and details</Text>
                <Text>- (dropdown)</Text>
                <Text>What type of event is it friend/meetup/sesh?</Text>
                <Text>- (TextArea)</Text>
                <Text>What is the event called?</Text>
                <Text>- (TextInput)</Text>
                <Text>When is the event?</Text>
                <Text>- (DatePicker)</Text>
                <Text>What time is the event?</Text>
                <Text>- (TimePicker)</Text>
                <Text>Friends (private) - or open to public</Text>
                <Text>- (Toggle)</Text>
                <Text>How many people are attending?</Text>
                <Text>- (TextInput)</Text>
                <Text>What is the event about?</Text>
                <Text>- (TextArea)</Text>
                <Text>Params: Longitude and Latitude for map</Text>
            </View>
        </>
    );
};

export default CreateEventScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});
