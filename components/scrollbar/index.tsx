import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { useSelector, useDispatch } from 'react-redux';
import { SET_MENU_ITEM } from '../../state/reducers/setMenuItem';
import { Text } from '../../style/typography';

const data: any = [
    {
        Id: 1,
        title: 'Home',
    },
    {
        Id: 2,
        title: 'About',
    },
    {
        Id: 3,
        title: 'Contact',
    },
    {
        Id: 4,
        title: 'Blog',
    },
];

const ScrollBar = () => {
    const { colors, borderRadius }: any = useTheme();
    const dispatch = useDispatch();
    const scrollview_ref: any = React.useRef({});
    let selectedMenuItem: any = data[0];
    const [{ dynamicIndex }, setState] = React.useState({ dynamicIndex: 0 });
    let [posArr]: any = React.useState([]);

    const handleChange = (item: any, key: any) => {
        dispatch({ type: SET_MENU_ITEM, payload: item }); // this works
        setState({ dynamicIndex: key }), () => doScroll(null);
    };

    const autoScroll = () => {
        const selectedItem = data
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
                style={[styles.scroll, { backgroundColor: colors.card, borderBottomColor: colors.separator }]}
            >
                {data.map((item: any, key: any) => {
                    return (
                        <TouchableOpacity
                            key={key}
                            activeOpacity={0.7}
                            onPress={() => handleChange(item, key)}
                            // onPress={onPressTouch}
                            style={[
                                selectedMenuItem.Id == item.Id ? styles.selectedButtonWrapper : styles.buttonWrapper,
                                { borderRadius: borderRadius.button, backgroundColor: selectedMenuItem.Id == item.Id ? colors.text : colors.dark_grey, shadowColor: '#ff0e4e' },
                            ]}
                            onLayout={(event: any) => {
                                const layout = event.nativeEvent.layout;
                                posArr[key] = layout.x;
                            }}
                        >
                            <Text
                                color={selectedMenuItem.Id == item.Id ? colors.primary : colors.background}
                                style={[styles.label, { color: selectedMenuItem.Id == item.Id ? colors.primary : colors.background }]}
                            >
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
        zIndex: 99,
        height: 50,
        // borderBottomWidth: 0.5,
    },
    scroll: {
        width: '100%',
        // marginTop: 3,
        paddingLeft: 10,
    },
    menuWrapper: {
        borderWidth: 1,
    },
    buttonWrapper: {
        justifyContent: 'center',
        height: 25,
        minWidth: 50,
        marginLeft: 5,
        marginRight: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        alignContent: 'center',
    },
    label: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
    },
    selectedButtonWrapper: {
        justifyContent: 'center',
        height: 25,
        minWidth: 50,
        marginLeft: 5,
        marginRight: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        alignContent: 'center',
        // shadowOffset: {
        //     width: 1,
        //     height: 2,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.0,
        elevation: 24,
    },
    selectedLabel: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Bold',
        alignSelf: 'center',
    },
});
export default ScrollBar;
