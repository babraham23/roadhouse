import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from '../../style/typography';
import Icons from './icons';
import { exploreScrolldata } from '../../screens/explore/exploreScrolldata';
import { usePlacesContext } from '../../context/place.context';

const ScrollBar = ({ data = exploreScrolldata }: any) => {
    const { colors, borderRadius }: any = useTheme();
    const dispatch = useDispatch();
    const scrollview_ref: any = React.useRef({});
    let [selectedMenuItem, setSelectedMenuItem]: any = React.useState(data[0]);
    const [{ dynamicIndex }, setState] = React.useState({ dynamicIndex: 0 });
    let [posArr]: any = React.useState([]);
    const { getPlaces, place } = usePlacesContext();

    const handleChange = (item: any, key: any) => {
        setSelectedMenuItem(item);
        setState({ dynamicIndex: key }), () => doScroll(null);
        let place = item.title;
        getPlaces(place);
    };

    const autoScroll = () => {
        const selectedItem = data.find((item: any) => item.Id === selectedMenuItem.Id);
        doScroll(selectedItem.index);
    };

    const doScroll = (index: any) => {
        scrollview_ref.current?.scrollTo({
            x: posArr[index || dynamicIndex] - 50,
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
                                { borderRadius: borderRadius.button, borderBottomColor: selectedMenuItem.Id == item.Id ? colors.text : colors.dark_grey },
                            ]}
                            onLayout={(event: any) => {
                                const layout = event.nativeEvent.layout;
                                posArr[key] = layout.x;
                            }}
                        >
                            <Icons title={item.title} active={place === item.title ? true : false} />
                            <Text
                                // bold={selectedMenuItem.Id == item.Id ? true : false}
                                bold
                                fontSize={14}
                                color={selectedMenuItem.Id == item.Id ? colors.primary : colors.text}
                                style={[{ color: selectedMenuItem.Id == item.Id ? colors.primary : colors.background }]}
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
    },
    scroll: {
        // width: '100%',
        paddingLeft: 10,
    },
    buttonWrapper: {
        // borderBottomWidth: 1,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    selectedButtonWrapper: {
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        // borderBottomWidth: 1,
        marginBottom: 5,
    },
});
export default ScrollBar;
