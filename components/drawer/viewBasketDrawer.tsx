import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';
import { REMOVE_FROM_BASKET } from '../../state/reducers/basketReducer';
import { Text } from '../../style/typography';
import BasketItem from '../basket/basketItem';
import BasketCloseButton from '../buttons/basketCloseButton';
import ShadowButton from '../buttons/shadowButton';

type Props = {
    navigation?: any;
};

const ViewBasketDrawer = ({ navigation }: Props) => {
    const { colors }: any = useTheme();
    const { Basket }: any = useSelector((state: any) => state.basketReducer);
    const dispatch = useDispatch();
    // console.log('basket -->', Basket);

    const removeItem = (id: number) => {
        dispatch({ type: REMOVE_FROM_BASKET, payload: id });
    };

    return (
        <>
            <View style={[styles.closeWrapper, { backgroundColor: colors.card }]}>
                <BasketCloseButton onPress={() => navigation.toggleDrawer()} style={styles.close} />
            </View>
            <ScrollView bounces={false} style={styles.container}>
                <Text center bold fontSize={23}>
                    Your Basket
                </Text>

                <View style={styles.itemWrapper}>
                    {Basket.map((item: any, i: any) => {
                        return <BasketItem price={item.totalPrice} key={i} title={item.title} addOns={item.addOns} onRemovePress={() => removeItem(item.Id)} />;
                    })}
                </View>
                <View style={[styles.totalWropper, { borderBottomColor: colors.dark_grey }]}>
                    <Text bold>Total: </Text>
                    <Text bold>£15.98</Text>
                </View>
                <View style={styles.checkoutWrapper}>
                    <ShadowButton title={'Checkout'} />
                </View>
            </ScrollView>
        </>
    );
};

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height,
        paddingTop: 60,
    },
    closeWrapper: {
        height: 25,
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 20,
        top: 60,
        borderRadius: 13,
        zIndex: 99,
    },
    close: {
        // position: 'absolute',
        // left: 20,
        // top: -10
    },
    itemWrapper: {
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    totalWropper: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        marginHorizontal: 20,
        paddingBottom: 20,
    },
    checkoutWrapper: {
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 80,
    },
});

export default ViewBasketDrawer;
