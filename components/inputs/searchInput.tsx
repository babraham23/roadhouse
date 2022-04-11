import React from 'react';
import { View, Text, TextInput, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '../../hooks/useTheme';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const SearchInput = ({ style, placeholder, autoCapitalize, onChangeText, onEndEditing, autoCorrect, keyboardType, spellCheck }: any) => {
    const { colors, borderRadius }: any = useTheme();
    return (
        <View style={[style, styles.wrapper, { backgroundColor: colors.card, borderRadius: borderRadius.input, borderColor: colors.border }]}>
            <View style={[styles.iconWrapper, { borderColor: colors.text }]}>
                <FontAwesome name={'search'} color={colors.text} size={20} style={styles.icon} />
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
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        borderWidth: 0.5,
        height: 50,
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    iconWrapper: {
        // borderRightWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
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
        paddingLeft: 10,
        fontSize: 18,
        fontFamily: 'regular',
    },
});

export default SearchInput;
