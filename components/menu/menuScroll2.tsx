import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { useSelector, useDispatch } from 'react-redux';
import { SET_MENU_ITEM } from '../../state/reducers/setMenuItem';
import { Text } from '../../style/typography';
import { Images } from '../../style/images';
import { MenuScrollIconConverter } from '../../functions/helpers';

const MenuScroll2 = () => {
    const { colors, borderRadius }: any = useTheme();
    const dispatch = useDispatch();
    const scrollview_ref: any = React.useRef({});
    let products: any = useSelector((state: any) => state.menuReducer.menu);
    let selectedMenuItem: any = useSelector((state: any) => state.menuItemReducer);
    const [{ dynamicIndex }, setState] = React.useState({ dynamicIndex: 0 });
    let [posArr]: any = React.useState([]);

    const handleChange = (item: any, key: any) => {
        dispatch({ type: SET_MENU_ITEM, payload: item }); // this works
        setState({ dynamicIndex: key }), () => doScroll(null);
    };

    const autoScroll = () => {
        const selectedItem = products
            // .map((item: any, index: any) => (console.log('item -->', item), { Id: item.Id, index: index }))
            .find((item: any) => item.Id === selectedMenuItem.Id);
        // setTimeout(() => doScroll(selectedItem.index), 150)
        doScroll(selectedItem.index);
    };

    const doScroll = (index: any) => {
        scrollview_ref.current?.scrollTo({
            x: posArr[index || dynamicIndex],
            animated: true,
        });
    };

    React.useEffect(() => {
        autoScroll();
    });

    return (
        <View style={styles.container}>
            <ScrollView
                ref={scrollview_ref}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={[styles.scroll, { backgroundColor: colors.background, borderBottomColor: colors.separator }]}
            >
                {products.map((item: any, key: any) => {
                    return (
                        <TouchableOpacity
                            key={key}
                            activeOpacity={0.7}
                            onPress={() => handleChange(item, key)}
                            // onPress={onPressTouch}
                            style={[selectedMenuItem.Id == item.Id ? styles.selectedButtonWrapper : styles.buttonWrapper]}
                            onLayout={(event: any) => {
                                const layout = event.nativeEvent.layout;
                                posArr[key] = layout.x;
                            }}
                        >
                            <View style={styles.iconWrapper}>
                                <Image source={MenuScrollIconConverter(item.title)} style={styles.icon} />
                            </View>
                            <Text color={selectedMenuItem.Id == item.Id ? colors.primary : colors.text} bold>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // borderBottomWidth: 0.5,
    },
    scroll: {
        width: '100%',
        // marginTop: 3,
        paddingLeft: 10,
    },
    buttonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 50,
        // marginLeft: 5,
        paddingHorizontal: 15,
        marginVertical: 10,
        alignContent: 'center',
    },
    selectedButtonWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 50,
        // marginLeft: 5,
        paddingHorizontal: 15,
        marginVertical: 10,
        alignContent: 'center',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
    },
    iconWrapper: {
        width: 18,
        height: 18,
        marginBottom: 3,
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});
export default MenuScroll2;
