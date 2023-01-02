import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../../hooks/useTheme';
import * as Animatable from 'react-native-animatable';
import CloseButton from '../buttons/closeButton';
import BlueTextButton from '../buttons/blueTextButton';


const data = [
    { label: 'Make friends 👯‍♀️', value: 'Make friends 👯‍♀️' },
    { label: 'Party 🥳', value: 'Party 🥳' },
    { label: 'Discuss a topic 👩‍🏫', value: 'Discuss a topic 👩‍🏫' },
    { label: 'Food and drink 🧋🥪', value: 'Food and drink 🧋🥪' },
]

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
            <BlueTextButton title={'Done'} onPress={onClosePress} style={styles.close} />
            <Picker style={[styles.picker]} selectedValue={selected} onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}>
                {data.map((item, i) => {
                    return <Picker.Item key={i} label={item.label} value={item.value} />
                })}
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
    },
});
