import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import ViewBasketButtonInner from './viewBasketButtonInner';
import { useTheme } from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';

const ViewBasketButton = ({ style }: any) => {
    const { colors, borderRadius }: any = useTheme();
    const navigation: any = useNavigation();
    const { Basket }: any = useSelector((state: any) => state.basketReducer);
    return (
        <>
            {Basket.length ? (
                <View style={[style, styles.wrapper]}>
                    <Animatable.View
                        style={[
                            styles.container,
                            { backgroundColor: colors.card, borderTopColor: colors.border, borderTopLeftRadius: borderRadius.card, borderTopRightRadius: borderRadius.card },
                        ]}
                        animation="fadeInUpBig"
                    >
                        <ViewBasketButtonInner
                            title={'View Basket'}
                            onPress={() => navigation.navigate('BasketScreen')}
                            // onPress={() => console.log('basket -->', Basket)}
                        />
                    </Animatable.View>
                </View>
            ) : null}
        </>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        zIndex: 99,
        elevation: 99,
        width: '100%',
        // backgroundColor: 'red'
    },
    container: {
        borderTopWidth: 1,
        height: 100,
        width: '100%',
        // justifyContent: 'center',
        padding: 10,
        paddingTop: 20,
    },
});

export default ViewBasketButton;
