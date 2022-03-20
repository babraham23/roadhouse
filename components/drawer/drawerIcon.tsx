import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';

const DrawerItem = ({ title, onPress, icon }: any) => {
    const { colors }: any = useTheme();
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.icon}>{icon}</View>
            <Text fontSize={18}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
    },
    icon: {
        paddingHorizontal: 10,
    },
});

export default DrawerItem;
