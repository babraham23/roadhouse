import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';
import { useTheme } from '../../hooks/useTheme';
import DashedLine from './dashedLine';

type Props = {
    last?: boolean;
};

const RecieptFoodItem: React.FC<Props> = ({ last }) => {
    const { colors } = useTheme();
    return (
        <>
            <View style={styles.container}>
                <View style={styles.numOfItemsWrapper}>
                    <Text fontSize={17}>1x </Text>
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.foodItemsWrapper}>
                        <Text numberOfLines={2} fontSize={17}>
                            Food Name
                        </Text>
                        <Text color={colors.dark_grey}>Add ons</Text>
                        <Text color={colors.dark_grey}>Add ons</Text>
                        <Text color={colors.dark_grey}>Add ons</Text>
                    </View>
                    <View style={styles.priceWrapper}>
                        <Text>£5.00</Text>
                    </View>
                </View>
            </View>
            {last ? null : <DashedLine />}
        </>
    );
};

export default RecieptFoodItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 20,
    },
    numOfItemsWrapper: {
        width: '10%',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    foodItemsWrapper: {
        paddingLeft: 10,
    },
    priceWrapper: {},
});
