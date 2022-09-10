import React from 'react';
import { View, Text, TextInput, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '../../hooks/useTheme';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const StoreSearch = ({ style, placeholder, autoCapitalize, onChangeText, onEndEditing, autoCorrect, keyboardType, spellCheck }: any) => {
    const { colors, borderRadius }: any = useTheme();
    return (
        <View style={style}>
            <View style={[styles.wrapper, { backgroundColor: colors.border, borderRadius: borderRadius.input, borderColor: colors.border }]}>
                <View style={[styles.iconWrapper, { borderColor: colors.text }]}>
                    <FontAwesome name={'search'} color={colors.text} size={16} style={styles.icon} />
                </View>

                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#666666"
                    style={[styles.textInput, { color: colors.text }]}
                    autoCapitalize={autoCapitalize}
                    onChangeText={onChangeText}
                    onEndEditing={onEndEditing}
                    autoCorrect={autoCorrect}
                    keyboardType={keyboardType}
                    spellCheck={spellCheck}
                    underlineColorAndroid="transparent"
                />

                {/* <TouchableOpacity style={[styles.iconWrapper, { borderColor: colors.text }]}>
				<Ionicons name={'close'} color={colors.text} size={25}  />
			</TouchableOpacity> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        borderWidth: 0.5,
        height: 40,
        alignItems: 'center',
        width: '100%',
        elevation: 8,
    },
    iconWrapper: {
        // borderRightWidth: 1,
        // paddingLeft: 5,
        // paddingRight: 5,
    },
    icon: {
        paddingBottom: 5,
        paddingRight: 5,
        borderRightWidth: 1,
        paddingLeft: 15,
    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 5,
        fontSize: 15,
        fontFamily: 'regular',
    },
});

export default StoreSearch;
