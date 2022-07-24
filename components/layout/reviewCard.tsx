import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from '../../style/typography';

type Props = {
    author_name?: string;
    author_url?: string;
    profile_photo_url?: string;
    rating?: number;
    relative_time_description?: string;
    text?: string;
}

const ReviewCard = ({author_name, author_url, profile_photo_url, rating, relative_time_description, text}: Props) => {
    const { borderRadius, colors } = useTheme();
    return (
        <View style={[styles.container, { borderRadius: borderRadius.card, backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.header}>
                <View style={styles.profileImageWrapper}>
                    <Image source={{ uri: profile_photo_url }} style={styles.profileImage} />
                </View>
                <View style={styles.authorWrapper}>
                    <Text bold fontSize={20}>
                        {author_name}
                    </Text>
                    <Text>
                        {relative_time_description}
                    </Text>
                </View>
            </View>
            <View style={styles.body}>
                <Text>
                    {text}
                </Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.ratingWrapper}>
                    <FontAwesome name="star" size={18} color="black" />
                    <Text>{rating}</Text>
                </View>
            </View>
            <Text>ReviewCard</Text>
        </View>
    );
};

export default ReviewCard;

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        width: '100%',
        height: 100,
        backgroundColor: 'green',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    profileImageWrapper: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    authorWrapper: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    body: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    footer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    ratingWrapper: {
        flexDirection: 'row',
        width: '13%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
    }

});
