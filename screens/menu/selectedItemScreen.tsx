import React, { useRef } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from '../../style/typography';
import { useTheme } from '../../hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import AddOns from '../../components/menu/addOns';
import ShadowButton from '../../components/buttons/shadowButton';
import { ADD_TO_BASKET } from '../../state/reducers/basketReducer';
import { useNavigation } from '@react-navigation/native';
import ImageScrollContext from '../../components/scrollContext/imageScrollContext';
import CustomActionButton from '../../components/buttons/customActionButton';

const SelectedItemScreen = ({ route, allergins }: any) => {
    const dispatch = useDispatch();
    const { colors, borderRadius } = useTheme();
    const navigation = useNavigation();
    const { title, image, price, description, addOns, Id } = route.params;
    const item = { title, price, description, addOns, Id };
    const [selectedAddOns] = React.useState([]);
    const { ProductOptions } = useSelector((state: any) => state.addOnReducer);


    const addToBasket = () => {
        let data = {
            title: title,
            Id,
            totalPrice: price,
            addOns: ProductOptions,
        };
        dispatch({ type: ADD_TO_BASKET, payload: data });
        navigation.goBack();
    };

    return (
        <>
            <ImageScrollContext hideClose image={image} title={title}>
                <View style={styles.topWrapper}>
                    <Text fontSize={20}>{title}</Text>
                    <Text color={colors.dark_grey} fontSize={18}>
                        £{price}
                    </Text>
                </View>
                <Text style={styles.description} color={colors.text} fontSize={18}>
                    {description}
                </Text>
                <Text color={colors.dark_grey} style={styles.contains} fontSize={14}>
                    {allergins}
                </Text>
                {addOns.map((item: any, i: any) => {
                    return (
                        <View key={i} style={[styles.wrapper, { backgroundColor: colors.card, borderRadius: borderRadius.card }]}>
                            <AddOns
                                key={i}
                                title={item.title}
                                maxNumber={item.maxNumber}
                                Id={item.Id}
                                counter={item.maxNumber > 1 ? true : false}
                                addOns={addOns}
                                price={item.price}
                                // noBorder
                            />
                        </View>
                    );
                })}

                <CustomActionButton title={'Add to Basket'} style={styles.button} onPress={() => addToBasket()} />
            </ImageScrollContext>
        </>
    );
};

const styles = StyleSheet.create({
    topWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        // padding: 10
    },
    description: {
        paddingHorizontal: 20,
        // paddingBottom: 10
    },
    contains: {
        paddingTop: 15,
        paddingLeft: 10,
        marginBottom: 20,
    },
    button: {
        paddingHorizontal: 10,
        marginVertical: 40,
    },
    wrapper: {
        // marginTop: 5,
        // padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
});

export default SelectedItemScreen;
