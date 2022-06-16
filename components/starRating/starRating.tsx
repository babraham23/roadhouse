import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Entypo } from '@expo/vector-icons';
import { Text } from '../../style/typography';

type Props = {
    title?: string;
    onChange?: any;
    style?: any;
    rating?: any;
};

const StarRating = ({ title, onChange, style, rating }: Props) => {
    const { colors, borderRadius } = useTheme();

    const [{ star1, star2, star3, star4, star5 }, setStar] = React.useState({
        star1: false,
        star2: false,
        star3: false,
        star4: false,
        star5: false,
    });

    const handleSelection = (selection: number) => {
        if (selection == 1) {
            setStar({ star1: true, star2: false, star3: false, star4: false, star5: false });
            // onChange(1);
        } else if (selection == 2) {
            setStar({ star1: true, star2: true, star3: false, star4: false, star5: false });
            // onChange(2);
        } else if (selection == 3) {
            setStar({ star1: true, star2: true, star3: true, star4: false, star5: false });
            // onChange(3);
        } else if (selection == 4) {
            setStar({ star1: true, star2: true, star3: true, star4: true, star5: false });
            // onChange(4);
        } else if (selection == 5) {
            setStar({ star1: true, star2: true, star3: true, star4: true, star5: true });
            // onChange(5);
        }
    };

    const handleRating = (rating: number) => {
        if (rating <= 2) {
            setStar({ star1: true, star2: false, star3: false, star4: false, star5: false });
            // onChange(1);
        } else if (rating <= 3) {
            setStar({ star1: true, star2: true, star3: false, star4: false, star5: false });
            // onChange(2);
        } else if (rating <= 4) {
            setStar({ star1: true, star2: true, star3: true, star4: false, star5: false });
            // onChange(3);
        } else if (rating <= 5) {
            setStar({ star1: true, star2: true, star3: true, star4: true, star5: false });
            // onChange(4);
        } else if (rating <= 6) {
            setStar({ star1: true, star2: true, star3: true, star4: true, star5: true });
            // onChange(5);
        }
    };

    React.useEffect(() => {
        handleRating(rating);
    }, []);

    return (
        <View style={[style, styles.container, { borderColor: colors.border, backgroundColor: colors.card, borderRadius: borderRadius.card }]}>
            <View style={styles.starContianer}>
                <TouchableOpacity disabled style={styles.starWrapper} onPress={() => handleSelection(1)}>
                    <Entypo name="star" size={15} color={star1 ? colors.primary : colors.border} />
                </TouchableOpacity>
                <TouchableOpacity disabled style={styles.starWrapper} onPress={() => handleSelection(2)}>
                    <Entypo name="star" size={15} color={star2 ? colors.primary : colors.border} />
                </TouchableOpacity>
                <TouchableOpacity disabled style={styles.starWrapper} onPress={() => handleSelection(3)}>
                    <Entypo name="star" size={15} color={star3 ? colors.primary : colors.border} />
                </TouchableOpacity>
                <TouchableOpacity disabled style={styles.starWrapper} onPress={() => handleSelection(4)}>
                    <Entypo name="star" size={15} color={star4 ? colors.primary : colors.border} />
                </TouchableOpacity>
                <TouchableOpacity disabled style={styles.starWrapper} onPress={() => handleSelection(5)}>
                    <Entypo name="star" size={15} color={star5 ? colors.primary : colors.border} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        // borderWidth: 1,
        // marginTop: 30,
    },
    starContianer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // marginHorizontal: 30,
        // paddingBottom: 15,
    },
    starWrapper: {
        paddingHorizontal: 2,
    },
});

export default StarRating;
