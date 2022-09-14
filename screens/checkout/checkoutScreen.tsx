import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScrollContextProvider from '../../components/scrollContext/scrollContextProvider';
import { useTheme } from '../../hooks/useTheme';
import ReceiptCard from '../../components/layout/receiptCard';
import CheckoutButton from '../../components/buttons/checkoutButton';

const CheckoutScreen = () => {
    const { colors } = useTheme();
    return (
        <>
            <ScrollContextProvider bigHeader style={styles.container} title={'Checkout'}>
                <ReceiptCard />
            </ScrollContextProvider>
            <CheckoutButton title={'Go to Payment'} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        padding: 10,
    },
});

export default CheckoutScreen;
