import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

const RemoveItemButtom = ({ onPress, style }: any) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <View style={[style, styles.container, { borderColor: colors.dark_grey }]}>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
                {/* <MaterialCommunityIcons name="window-close" size={19} color={colors.dark_grey} /> */}
                <Ionicons name="md-close-circle" size={21} color={colors.dark_grey} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // height: 25,
        // width: 25,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 15
    },
    label: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Bold',
        alignSelf: 'center',
    },
});
export default RemoveItemButtom;
