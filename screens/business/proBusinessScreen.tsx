import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScrollContextProvider from '../../components/scrollContext/scrollContextProvider';

const ProBusinessScreen = () => {
    let title = 'cunt';
    return (
        <ScrollContextProvider title={title}>
            <View style={styles.container}>
                <Text>{title}</Text>
            </View>
            <View style={[{ backgroundColor: 'white', height: 2300, borderRadius: 15, padding: 20 }]}>
                <Text>ProBusinessScreen</Text>
            </View>
        </ScrollContextProvider>
    );
};

export default ProBusinessScreen;

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        padding: 20,
        paddingTop: 100,
    },
});
