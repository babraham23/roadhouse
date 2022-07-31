import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Images } from '../../style/images';
import { Text } from '../../style/typography';
import ReviewStarRating from '../layout/reviewStarRating';
import StarRating from '../starRating/starRating';

const ImageCard = ({ style, onPress, title, location, logo = Images.MCDEEZ, rating }: any) => {
    const { colors, dark, borderRadius }: any = useTheme();
    return (
        <View style={[styles.container]}>
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[style, styles.wrapper]}>
                <View style={[styles.card, { backgroundColor: dark ? colors.card : colors.card, borderColor: colors.border, borderRadius: borderRadius.card }]}>
                    <View style={styles.top}>
                        <View style={styles.titleWrapper}>
                            <Text fontSize={18}>{title}</Text>
                            <Text style={{ marginTop: 20 }} numberOfLines={2} fontSize={14} color={colors.greyText}>
                                {location}
                            </Text>
                        </View>
                        <Image source={logo} style={styles.logo} />
                    </View>
                </View>
                {/* <StarRating style={styles.rating} rating={rating} /> */}
                <ReviewStarRating style={styles.rating} rating={rating} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    wrapper: {
        paddingLeft: 20,
    },
    card: {
        height: 150,
        width: 300,
        borderWidth: 0.5,
        padding: 15,
        zIndex: 9,
        marginVertical: 20,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleWrapper: {
        width: '80%',
    },
    logo: {
        height: 50,
        width: 50,
        borderRadius: 13,
    },
    rating: {
        position: 'absolute',
        right: 10,
        bottom: 30,
        zIndex: 50,
    },
});

export default ImageCard;
