import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { API_KEY } from '../../api/endpoints';

let photo_reference =
    'AeJbb3eb_ZErxkLGaSMG0gaAnFU6dffCrBrl4GT_rAtpIZYvKu3d-dBt-NmcmBIHMnNQrJpgfZvkSD4eiaM3JW3AczALMyxklvW5MTTwwY1LSdnB9PmxiNePiS8vVtTzTqPRkduxHZxmyn0UhcSgc8I8PbqUk0Ot9AGRxPpSxZpoETsaVFoP';
let maxheight = 2340;
let maxwidth = 4160;
const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&maxheight=${maxheight}&photo_reference=${photo_reference}&key=${API_KEY}`;

const TestScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
    );
};

export default TestScreen;

let { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width,
        height: 500,
        resizeMode: 'center',
    },
});
