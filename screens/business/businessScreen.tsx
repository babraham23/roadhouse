import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';

const BusinessScreen = ({ route }: any) => {
    console.log('passed route -->', route);
    let { name } = route.params.item
    return (
        <View style={styles.container} >
            <Text>{name}</Text>
        </View>
    );
};

export default BusinessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
