import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';

const BlueTextButton = ({ style, onPress, title }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={style} onPress={onPress}>
            <Text style={styles.text} fontSize={12} color={'blue'}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default BlueTextButton;

const styles = StyleSheet.create({
    text: {},
});
