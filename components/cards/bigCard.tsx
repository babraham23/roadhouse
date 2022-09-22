import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BigCard = ({ product, onPress }: any) => {
    const { borderRadius }: any = useTheme();
    let { title, cardColor, textColor, description } = product;
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
            <View style={[styles.card, { backgroundColor: cardColor, borderRadius: borderRadius.card }]}>
                <Text bold style={styles.title} fontSize={20} color={textColor} center>
                    {title}
                </Text>
                <Text numberOfLines={3} style={styles.subtitle} color={textColor}>
                    {description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const { width } = Dimensions.get('window');
// export const CARD_HEIGHT = (width * 1250) / 974;
const styles = StyleSheet.create({
    container: {
        width,
        height: 450,
    },
    card: {
        borderRadius: 16,
        margin: 35,
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
    title: {
        // textAlign: 'center',
        // marginBottom: 16,
        marginTop: 20,
    },
    subtitle: {
        // fontSize: 16,
        // textAlign: 'center',
        // color: '#432406',
    },
});

export default BigCard;
