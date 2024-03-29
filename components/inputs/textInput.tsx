import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

type Props = {
    style?: any;
    error?: any;
    placeholder?: string;
    onChangeText: any;
    keyboardType?: any;
    value?: any;
};

const Input = ({ style, error, placeholder, onChangeText, keyboardType, value }: Props) => {
    const { colors, borderRadius } = useTheme();
    const [bottomBorderColor, setBottomBorderColor] = React.useState(colors.border);
    return (
        <View style={style}>
            <View style={[styles.inputWrapper, { borderRadius: borderRadius.input, borderColor: bottomBorderColor, backgroundColor: colors.card }]}>
                <TextInput
                    placeholderTextColor={colors.dark_grey}
                    placeholder={placeholder}
                    style={[styles.textInput, { color: colors.text }]}
                    underlineColorAndroid="transparent"
                    autoCapitalize={'none'}
                    multiline={false}
                    secureTextEntry={false}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    onFocus={() => setBottomBorderColor(colors.primary)}
                    onBlur={() => setBottomBorderColor(colors.border)}
                    value={value}
                />
            </View>
            {/* {error ? <MessageError error={error} /> : <View style={styles.errorPlaceholder} />} */}
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 10,
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

export default Input;
