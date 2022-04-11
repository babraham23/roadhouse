import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';
import RemoveItemButtom from './removeItemButton';

type Props = {
    title?: string;
    style?: any;
    onRemovePress?: any;
    price?: string;
    addOns?: any;
};

const BasketItem = ({ style, title, onRemovePress, price, addOns }: Props) => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <View style={[style, styles.container, { borderBottomColor: colors.dark_grey }]}>
            <RemoveItemButtom onPress={onRemovePress} style={styles.removeButton} />
            <View style={styles.titleWrapper}>
                <Text bold numberOfLines={3}>
                    {title}
                </Text>
            </View>
            <View style={styles.addonWrapper}>
                {addOns.map((addon: any, i: any) => {
                    return (
                        <View key={i} style={{flexDirection: 'row'}} >
                            <Text color={colors.dark_grey}>{addon.quantity} x </Text>
                            <Text color={colors.dark_grey}>{addon.title}</Text>
                        </View>
                        )
                })}
            </View>
            <View style={styles.priceWrapper}>
                <Text>1 x </Text>
                <Text bold>£{price}</Text>
            </View>

            {/* <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <MaterialCommunityIcons name="window-close" size={20} color={colors.text} />
			</TouchableOpacity> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 0.5,
    },
    removeButton: {
        position: 'absolute',
        right: 1,
        // top: -15
        zIndex: 99,
    },
    addonWrapper: {
        paddingTop: 5,
    },
    titleWrapper: {
        paddingRight: 40,
    },
    priceWrapper: {
        paddingTop: 10,
        flexDirection: 'row',
    },
});
export default BasketItem;
