import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../../hooks/useTheme';
import * as Animatable from 'react-native-animatable';
import CloseButton from '../buttons/closeButton';
import BlueTextButton from '../buttons/blueTextButton';
import BlurModal from '../modals/blurModal';
import NativePickerInput from './NativePickerInput';

const data = [
    { label: 'Make friends 👯‍♀️', value: 'Make friends 👯‍♀️' },
    { label: 'Party 🥳', value: 'Party 🥳' },
    { label: 'Discuss a topic 👩‍🏫', value: 'Discuss a topic 👩‍🏫' },
    { label: 'Food and drink 🧋🥪', value: 'Food and drink 🧋🥪' },
];

// make this a wrapper for the screen

const NativePicker = ({ style, setSelected, selected, onClosePress }: any) => {
    const { colors, borderRadius } = useTheme();
    const [visible, setVisible] = React.useState(false);
    return (
        <>
            <NativePickerInput visible={visible} selected={selected} onPress={() => setVisible(!visible)} />

            <BlurModal visible={visible} setVisible={setVisible}>
                {/* <BlueTextButton title={'Done'} onPress={onClosePress} style={styles.close} /> */}
                <Picker style={[styles.picker]} selectedValue={selected} onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}>
                    {data.map((item, i) => {
                        return <Picker.Item key={i} label={item.label} value={item.value} />;
                    })}
                </Picker>
            </BlurModal>
        </>
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
