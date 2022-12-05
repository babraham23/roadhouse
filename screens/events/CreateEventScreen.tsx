import { StyleSheet, View } from 'react-native';
import React from 'react';
import ModalHeader from '../../components/headers/modalHeader';
import { Text } from '../../style/typography';

const CreateEventScreen = () => {
    return (
        <View style={styles.container}>
          <ModalHeader title='Create Event' />
            <Text>What type of event is it?</Text>
            <Text>Longitude and Latitude for map</Text>
        </View>
    );
};

export default CreateEventScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
