import React from 'react';
import { Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import * as Animatable from 'react-native-animatable';
import { Text } from '../../style/typography';
// import Counter from './counter';
import AddOnCounter from '../counter/addOnCounter';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ADD_ON, ADD_COST, CLEAR_ADD_ON, MINUS_COST } from '../../state/reducers/addonsReducer';
import { Feather } from '@expo/vector-icons';
import CustomActionButton from '../buttons/customActionButton';

const AddOnItem = ({ style, title, price, counter, maxNumber, allergin, noBorder, Id, addOns }: any) => {
    const { colors, borderRadius }: any = useTheme();
    const [check, toggleCheck] = React.useState(false);
    const [updatedAddOn, setUpdatedAddOn] = React.useState(0);
    const dispatch = useDispatch();
    const { ProductOptions, floatingCost } = useSelector((state: any) => state.addOnReducer);

    const handleAddAddOn = (quantity: any) => {
        const item = { Id, quantity: quantity, title };
        dispatch({ type: ADD_COST, payload: price * 1 });

        // filter out prod options if already exists
        let ProductOptionsUpdated = ProductOptions.filter((prodOpt: any) => prodOpt.Id !== Id);
        // add it back with the updated quantity
        ProductOptionsUpdated = [...ProductOptionsUpdated, ...[item]];
        // update state
        dispatch({ type: ADD_ADD_ON, payload: ProductOptionsUpdated });
        setUpdatedAddOn(quantity);
    };

    const handleRemoveAddOn = (quantity: any) => {
        const item = { Id, quantity: quantity, title };
        if (quantity == 0) {
            dispatch({ type: CLEAR_ADD_ON, payload: price });

            let ProductOptionsUpdated = ProductOptions.filter((prodOpt: any) => prodOpt.Id !== Id);
            dispatch({ type: ADD_ADD_ON, payload: ProductOptionsUpdated });
        } else {
            dispatch({ type: MINUS_COST, payload: price * 1 });

            let ProductOptionsUpdated = ProductOptions.map((prodOpt: any) => (prodOpt.Id === Id ? item : prodOpt));
            dispatch({ type: ADD_ADD_ON, payload: ProductOptionsUpdated });
        }
        setUpdatedAddOn(quantity);
    };

    const addAddOn = (item: any) => {
        dispatch({ type: ADD_ADD_ON, payload: item });
    };

    const handleCheck = () => {
        toggleCheck(!check);
        // handleAddAddOn()
        // onChangeCheck(!check);
    };

    // console.log('updatedAddOn -->', updatedAddOn)

    return (
        <>
            <View style={[style, styles.container, { borderBottomColor: colors.border, borderBottomWidth: noBorder ? 0 : 0.5 }]}>
                <View style={styles.titleWrapper}>
                    <Text fontSize={18}>{title}</Text>
                    <Text style={styles.contains} fontSize={15}>
                        £{price}
                    </Text>
                </View>
                {counter ? (
                    <View style={styles.checkboxWrapper}>
                        <AddOnCounter maxNumber={maxNumber} onAddPress={(value: number) => handleAddAddOn(value)} onMinusPress={(value: number) => handleRemoveAddOn(value)} />
                    </View>
                ) : (
                    <TouchableOpacity
                        // onPress={() => handleCheck()}
                        // onPress={() => (check ? handleRemoveAddOn() : handleAddAddOn())}
                        activeOpacity={0.5}
                        style={[styles.checkboxWrapper]}
                    >
                        <View style={[styles.check, { backgroundColor: colors.background, borderRadius: borderRadius.input }]}>
                            {check ? (
                                <Animatable.View animation={'bounceIn'} style={[style]}>
                                    <Feather name={'check'} color={colors.primary} size={40} />
                                </Animatable.View>
                            ) : null}
                        </View>
                    </TouchableOpacity>
                )}
            </View>
            {/* <CustomActionButton title={'test'} onPress={() => console.log('floatingCost -->', ProductOptions)} /> */}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
    },
    check: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 30,
    },
    titleWrapper: {
        width: '70%',
        paddingLeft: 20,
        justifyContent: 'center',
    },
    checkboxWrapper: {
        width: '25%',
        // height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contains: {
        // paddingTop: 15,
        // paddingLeft: 10
    },
});

export default AddOnItem;
