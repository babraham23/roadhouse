import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const Star = ({active}: any) => {
    return (
        <View style={styles.starWrapper}>
            <FontAwesome name={active ? 'star' : 'star-o'} size={18} color="gold" />
        </View>
    );
};

const ReviewStarRating = ({rating}: any) => {
    return (
        <View style={styles.container}>
            <Star active={rating >= 1} />
            <Star active={rating >= 2} />
            <Star active={rating >= 3} />
            <Star active={rating >= 4} />
            <Star active={rating >= 5} />
        </View>
    );
};

export default ReviewStarRating;

const styles = StyleSheet.create({
    container: {
        // width: 80,
        // height: 30,
        flexDirection: 'row',
    },
    starWrapper: {
        marginLeft: 2,
    },
});
