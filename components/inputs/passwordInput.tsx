import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import ForgotPasswordButton from '../buttons/blueTextButton';
import BlueTextButton from '../buttons/blueTextButton';

type Props = {
    style?: any;
    error?: any;
    placeholder?: string;
    onChangeText: any;
    onForgotPasswordPress?: any;
    forgotPassword?: boolean;
};

const PasswordInput = ({ style, error, placeholder, onChangeText, onForgotPasswordPress, forgotPassword }: Props) => {
    const { colors, borderRadius } = useTheme();
    const [secure, setSecure] = React.useState(true);
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
                    secureTextEntry={secure ? true : false}
                    onChangeText={onChangeText}
                    onFocus={() => setBottomBorderColor(colors.primary)}
                    onBlur={() => setBottomBorderColor(colors.border)}
                />
                <TouchableOpacity style={styles.typeToggle} onPress={() => setSecure(!secure)}>
                    {secure ? <Feather name="eye" color={bottomBorderColor} size={15} /> : <Feather name="eye-off" color={bottomBorderColor} size={15} />}
                </TouchableOpacity>
            </View>
            <View style={styles.forgotWrapper}>
                {forgotPassword ? (
                    <>
                        <View />
                        <BlueTextButton title={'Forgot Password?'} onPress={onForgotPasswordPress} style={styles.forgotPassword} />
                    </>
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 20,
    },
    typeToggle: {
        position: 'absolute',
        right: 20,
        top: 12,
    },
    textInput: {
        flex: 1,
        fontFamily: 'regular',
        paddingLeft: 5,
        fontSize: 16,
    },
    errorPlaceholder: {
        height: 20,
        width: '100%',
    },
    forgotWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    forgotPassword: {
        paddingTop: 3,
        paddingRight: 3,
    },
});

export default PasswordInput;
