import { StyleSheet, View } from 'react-native';
import React from 'react';
import ModalHeader from '../../components/headers/modalHeader';
import { Text } from '../../style/typography';
import CreateEventForm from '../../components/forms/createEventForm';

/*
Let body =
{
  placeName: string,
  typeOfEvent: string, //sesh/make friends/discuss topic/
  nameOfEvent: string,
  date: string,
  time: string,
  description: string,
  privateEvent: boolean,
  location: geometry,

}
*/

const CreateEventScreen = ({ route }) => {
    let location = route.params?.location;
    let lat = route.params?.location.latitude;
    let lng = route.params?.location.longitude;
    let name = route.params?.name;
    let formatted_address = route.params?.formatted_address;
    // todo - make sure params being sent from business screen are handled correctly
    return (
        <>
            <ModalHeader title="Create Event" />
            <View style={styles.container}>
                <CreateEventForm lat={lat} lng={lng} formatted_address={formatted_address} name={name} />
                {/* <Text>If navigated from a restaurant show name and details</Text>
                <Text>- (dropdown)</Text>
                <Text>What type of event is it friend/meetup/sesh?</Text>
                <Text>- (TextArea)</Text>
                <Text>What is the event called?</Text>
                <Text>- (TextInput)</Text>
                <Text>When is the event?</Text>
                <Text>- (DatePicker)</Text>
                <Text>What time is the event? Description </Text>
                <Text>- (TimePicker)</Text>
                <Text>Friends (private) - or open to public</Text>
                <Text>- (Toggle)</Text>
                <Text>How many people are attending?</Text>
                <Text>- (TextInput)</Text>
                <Text>- (TextArea)</Text>
                <Text>Params: Longitude and Latitude for map</Text> */}
            </View>
        </>
    );
};

export default CreateEventScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
    },
});
