/* eslint-disable max-len */
import React from 'react';
import { Dimensions, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../style/typography';
import { useSelector } from 'react-redux';
import { useTheme } from '../../hooks/useTheme';

const { height: wHeight, width: wWidth } = Dimensions.get('window');
const HEADER_IMAGE_HEIGHT = wHeight / 3;
const MIN_HEADER_HEIGHT = 45;

const { height } = Dimensions.get('window');

const Content = ({ onPress }: any) => {
    const { colors, borderRadius, dark } = useTheme();
    const navigation: any = useNavigation();
    let products: any = useSelector((state: any) => state.menuReducer.menu);
    let selectedMenuItem: any = useSelector((state: any) => state.menuItemReducer);

    const handleNav = (route: any, items: any) => {
        navigation.navigate(route, items);
    };

    React.useEffect(() => {
        
    }, []);

    const { height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1, backgroundColor: colors.background, borderRadius: borderRadius.card, marginTop: 20, minHeight: height }}>
            {selectedMenuItem.items.map((items: any, j: any) => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    // onPress={onPress}
                    onPress={() => handleNav('SelectedItemScreen', items)}
                    key={j}
                >
                    <View
                        style={[
                            styles.content,
                            {
                                backgroundColor: colors.card,
                                borderBottomColor: dark ? colors.dark_grey : colors.border,
                                // borderBottomWidth: j === item.items.length - 1 ? 0 : 0.5,
                                borderRadius: 0,
                            },
                        ]}
                    >
                        {items.image ? (
                            <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                {/* <View style={{ width: 70, height: 70, backgroundColor: 'blue' }} />  */}
                                <Image
                                    // source={{ uri: 'https://picsum.photos/900' }}
                                    source={items.image}
                                    style={[{ width: 70, height: 70, borderRadius: borderRadius.card }]}
                                />
                            </View>
                        ) : null}
                        <View
                            style={[
                                styles.item,
                                {
                                    width: items.image ? '75%' : '100%',
                                    backgroundColor: colors.card,
                                    borderRadius: borderRadius.card,
                                    paddingLeft: items.image ? 10 : 20,
                                },
                            ]}
                        >
                            <Text fontSize={18} style={styles.title}>
                                {items.title}
                            </Text>
                            <Text fontSize={16} style={styles.description} numberOfLines={2}>
                                {items.description}
                            </Text>
                            <Text fontSize={16} style={styles.price}>
                                £{items.price}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
            {/* <View style={{ height }} /> */}
        </View>
    );
};

export default Content;

const styles = StyleSheet.create({
    section: {
        // padding: 16,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.2,
        // shadowRadius: 1.41,
        borderBottomWidth: 0.5,

        elevation: 2,
    },
    placeholder: {
        // height: HEADER_IMAGE_HEIGHT,
        marginBottom: MIN_HEADER_HEIGHT,
    },
    text: {
        // fontFamily: 'UberMoveRegular',
        fontSize: 14,
    },
    title: {
        marginTop: 15,
        // fontFamily: 'UberMoveMedium',
        // fontSize: 24,
    },
    title2: {
        // fontFamily: 'UberMoveMedium',
        // fontSize: 16,
    },
    divider: {
        height: 0.5,
        backgroundColor: '#e2e3e4',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    ratings: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 8,
    },
    link: {
        color: '#247A00',
    },
    item: {
        marginTop: 10,
        paddingRight: 20,
    },
    description: {
        marginBottom: 8,
        marginTop: 10,
    },
    price: {
        // fontFamily: 'UberMoveMedium',
        marginBottom: 16,
        textAlign: 'right',
    },
});
