import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../../hooks/useTheme';
import * as Animatable from 'react-native-animatable';
import CloseButton from '../buttons/closeButton';

const NativePicker = ({ style, setSelected, selected, onClosePress }: any) => {
    const { colors, borderRadius } = useTheme();

    return (
        <Animatable.View
            style={[
                style,
                styles.container,
                { backgroundColor: colors.card, borderTopColor: colors.border, borderTopLeftRadius: borderRadius.card, borderTopRightRadius: borderRadius.card },
            ]}
            animation="fadeInUpBig"
        >
            <CloseButton onPress={onClosePress} style={styles.close}  />
            <Picker style={[styles.picker]} selectedValue={selected} onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}>
                <Picker.Item label="Java" value="Java" />
                <Picker.Item label="JavaScript" value="JavaScript" />
                <Picker.Item label="Java2" value="Java2" />
                <Picker.Item label="JavaScript2" value="JavaScript2" />
            </Picker>
        </Animatable.View>
    );
};

export default NativePicker;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderTopWidth: 2,
        justifyContent: 'center',
    },
    picker: {},
    close: {
        position: 'absolute',
        right: 20,
        top: 10,
        zIndex: 100,
        elevation: 100,
    }
});
