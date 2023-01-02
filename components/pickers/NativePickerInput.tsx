import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';

type Props = {
    style?: any;
    error?: any;
    placeholder?: string;
    onChangeText?: any;
    keyboardType?: any;
    onPress?: any;
    selected?: any;
    visible?: any;
};

const NativePickerInput = ({ style, error, placeholder, onPress, keyboardType, selected, visible }: Props) => {
    const { colors, borderRadius } = useTheme();
    const [bottomBorderColor, setBottomBorderColor] = React.useState(colors.border);
    return (
        <View style={style}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPress}
                style={[styles.inputWrapper, { borderRadius: borderRadius.input, borderColor: visible ? colors.primary : colors.border, backgroundColor: colors.card }]}
            >
                <Text>{selected}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        // flexDirection: 'row',
        borderBottomWidth: 1,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    typeToggle: {
        position: 'absolute',
        right: 5,
        top: 12,
    },
    textInput: {
        flex: 1,
        fontFamily: 'regular',
        paddingHorizontal: 5,
        fontSize: 17,
    },
    errorPlaceholder: {
        height: 20,
        width: '100%',
    },
});

export default NativePickerInput;
