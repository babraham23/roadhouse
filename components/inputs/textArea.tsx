import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

type Props = {
    style?: any;
    error?: any;
    placeholder?: string;
    onChangeText?: any;
    editable?: boolean;
    value?: string;
    scrollEnabled?: boolean;
};

const TextArea = ({ style, error, placeholder, onChangeText, editable, value, scrollEnabled }: Props) => {
    const { colors, borderRadius } = useTheme();
    const [bottomBorderColor, setBottomBorderColor] = React.useState(colors.border);
    return (
        <View style={style}>
            <View style={[styles.inputWrapper, { borderRadius: borderRadius.input, borderColor: bottomBorderColor, backgroundColor: colors.card }]}>
                <TextInput
                    placeholderTextColor={colors.dark_grey}
                    placeholder={placeholder}
                    style={[styles.textArea, { color: colors.text }]}
                    underlineColorAndroid="transparent"
                    autoCapitalize={'none'}
                    multiline={true}
                    secureTextEntry={false}
                    onChangeText={onChangeText}
                    editable={editable}
                    value={value}
                    scrollEnabled={scrollEnabled}
                    onFocus={() => setBottomBorderColor(colors.primary)}
                    onBlur={() => setBottomBorderColor(colors.border)}
                />
            </View>
            {/* {error ? <MessageError error={error} /> : null} */}
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        borderWidth: 0.5,
        minHeight: 150,
    },
    textArea: {
        fontFamily: 'regular',
        padding: 20,
        paddingTop: 20,
        fontSize: 16,
    },
    errorPlaceholder: {
        height: 20,
        width: '100%',
    },
    paddingView: {
        height: 16,
        backgroundColor: 'transparent',
    },
});

export default TextArea;
