import React, { useRef } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text } from '../../style/typography';
import { useTheme } from '../../hooks/useTheme';
import { useDispatch } from 'react-redux';
import ImageScrollContext from '../../components/scrollContext/imageScrollContext';
import AddOns from '../../components/menu/addOns';
import ShadowButton from '../../components/buttons/shadowButton';
import { ADD_TO_BASKET } from '../../state/reducers/basketReducer';
import { useNavigation } from '@react-navigation/native';

// const DATA = Array(10)
// 	.fill(null)
// 	.map((_, idx) => ({
// 		id: idx,
// 		avatar: faker.image.avatar(),
// 		fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
// 	}));

const SelectedItemScreen = ({ route, allergins }: any) => {
    const dispatch = useDispatch();
    const { colors, borderRadius }: any = useTheme();
    const navigation = useNavigation();
    const { title, image, price, description, addOns, Id } = route.params;
    const item = { title, price, description, addOns, Id };

    const addToBasket = () => {
        let data = {
            Name: title,
            Id,
            Cost: price,
        };
        dispatch({ type: ADD_TO_BASKET, payload: data });
        navigation.goBack();
    };

    return (
        <>
            <ImageScrollContext image={image} title={title}>
                <View style={styles.topWrapper}>
                    <Text fontSize={20}>{title}</Text>
                    <Text color={colors.greyText} fontSize={18}>
                        £{price}
                    </Text>
                </View>
                <Text style={styles.description} color={colors.text} fontSize={18}>
                    {description}
                </Text>
                <Text color={colors.greyText} style={styles.contains} fontSize={14}>
                    {allergins}
                </Text>
                {addOns.map((item: any, i: any) => {
                    return (
                        <View style={[styles.wrapper, { backgroundColor: colors.card, borderRadius: borderRadius.card }]}>
                            <AddOns
								title={item.title}
								maxNumber={item.maxNumber}
								Id={item.Id}
								counter={item.maxNumber > 1 ? true : false} 
								addOns={addOns}
								noBorder
							/>
                        </View>
                    );
                })}

                <ShadowButton title={'Add to Basket'} style={styles.button} onPress={() => addToBasket()} />
            </ImageScrollContext>
        </>
    );
};

const styles = StyleSheet.create({
    topWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        // padding: 10
    },
    description: {
        paddingHorizontal: 10,
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
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
});

export default SelectedItemScreen;
