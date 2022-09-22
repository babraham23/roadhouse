import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import RecieptFoodItem from './recieptFoodItem';
import { Text } from '../../style/typography';

const ReceiptCard = () => {
    const { colors, borderRadius } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.card, borderRadius: borderRadius.card }]}>
            <View style={styles.titleWrapper}>
                <Text style={styles.header} bold fontSize={18}>
                    {`${'Checkout'}`}
                </Text>
                <Text bold fontSize={15}>
                    McDonalds Grainger Street
                </Text>
            </View>
            <RecieptFoodItem />
            <RecieptFoodItem last />
        </View>
    );
};

export default ReceiptCard;

const styles = StyleSheet.create({
    container: {
        // height: 500,
        width: '100%',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 16.0,
        elevation: 24,
        paddingHorizontal: 10,
    },
    titleWrapper: {
        // flexDirection: 'row',
        // alignItems: 'flex-end'
    },
    header: {
        paddingTop: 20,
    },
});
