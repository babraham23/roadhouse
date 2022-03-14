import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Separator, LightText, BoldText } from '../../style/typography';
import { useTheme } from '@react-navigation/native';

// const title = "Boneless Banquet"
// const description = "A banquet of three 100% chicken breast Mini Fillets, plus Popcorn Chicken, regular fries, regular side, one KFC Original Dip and drink. A fuss-free dipper's delight."
// const price = "£8.99"


const MenuItems = ({ title, description, price }: any) => {
    const { border }: any = useTheme();
    return (
        <>
            {/* <Separator /> */}
            <View style={[styles.wrapper]}>
                <View style={styles.imageWrapper}>
                    {/* <View style={[styles.image, { borderRadius: border.bigCard }]} /> */}
                    <Image source={{ uri: 'https://picsum.photos/900' }}  style={[styles.image, { borderRadius: border.bigCard }]} /> 
                </View>
                <View style={styles.content} >
                    <BoldText fontSize={18} style={styles.title} >{title}</BoldText>
                    <LightText numberOfLines={3} style={styles.description} fontSize={16} >{description}</LightText>
                    <BoldText fontSize={16} >{price}</BoldText>
                </View>
            </View>
            <Separator />
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        flexDirection: 'row',
        // marginTop: 20,
    },
    imageWrapper: {
        width: '30%',
        justifyContent: 'center'
        // marginRight: 10
    },
    image: {
        height: 50,
        width: 50,
        // backgroundColor: 'green',
    },
    content: {
        width: '70%',
        paddingRight: 10
    },
    title: {
        paddingBottom: 5
    },
    description: {
        height: 60
    }
})

export default MenuItems;