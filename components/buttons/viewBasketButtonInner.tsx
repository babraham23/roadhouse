import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ViewBasketButtonInner = ({ onPress, title, style, secondary }: any) => {
    const { colors, borderRadius }: any = useTheme();
    const { Basket }: any = useSelector((state: any) => state.basketReducer);
    const navigation: any = useNavigation();
    let numOfItems = Basket.length;
    return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} activeOpacity={0.8} style={[style, styles.shadow, { shadowColor: colors.primary }]}>
            <LinearGradient colors={[colors.primary, '#ff0e4e']} style={[styles.wrapper, { borderRadius: borderRadius.button }]}>
                <View style={styles.inner}>
                    <Text bold center style={styles.text} fontSize={18} color={'white'}>
                        {title}
                    </Text>
                    <View style={styles.numWrapper}>
                        <Text bold style={styles.text} fontSize={18} color={colors.primary}>
                            {numOfItems}
                        </Text>
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    shadow: {
        width: '100%',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    wrapper: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        // marginTop: 30,
    },
    basketWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        // paddingRight: 5,
        // paddingTop: 5
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    basket: {},
    numWrapper: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 15,
        // height:
    },
});

export default ViewBasketButtonInner;
