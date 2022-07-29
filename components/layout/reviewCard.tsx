import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FontAwesome } from '@expo/vector-icons';
import { Text } from '../../style/typography';
import ReviewStarRating from './reviewStarRating';

type Props = {
    author_name?: string;
    author_url?: string;
    profile_photo_url?: string;
    rating?: number;
    relative_time_description?: string;
    text?: string;
};

const ReviewCard = ({ author_name, author_url, profile_photo_url, rating, relative_time_description, text }: Props) => {
    const { borderRadius, colors } = useTheme();
    return (
        <View style={[styles.container, { borderRadius: borderRadius.card, backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={styles.header}>
                <View style={styles.profileImageWrapper}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: profile_photo_url }} style={styles.profileImage} />
                        <View>
                            <Text style={styles.name}>{author_name}</Text>
                            <Text style={styles.name} fontSize={12}>
                                {relative_time_description}
                            </Text>
                        </View>
                    </View>
                    <ReviewStarRating rating={rating} />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{text}</Text>
            </View>
        </View>
    );
};

export default ReviewCard;

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        width: '100%',
        // height: 100,
        marginTop: 20,
        padding: 20,
    },
    header: {},
    profileImageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    name: {
        marginLeft: 10,
    },
    content: {
        paddingVertical: 10,
    },
});
