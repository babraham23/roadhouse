import { StyleSheet, View, Dimensions, Image } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { Images } from '../../style/images';
import { Text } from '../../style/typography';

const { width } = Dimensions.get('window');

type Props = {
    title?: string;
}

const SlopeCard: React.FC<Props> = ({ title }) => {
    const { colors } = useTheme();
    return (
        <>
        <View style={[styles.triangleCorner1, { borderLeftColor: colors.card }]} />
        <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Image source={Images.MCDEEZ} style={styles.logo} />
            <Text fontSize={23} bold style={styles.title} >{title}</Text>
            <Text color={colors.primary}  style={styles.subtitle} >Grainger Street NE45BY</Text>
            <Text color={colors.dark_grey}  style={styles.subtitle} >1.0m</Text>
        </View>
        </>
    );
};

export default SlopeCard;

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
    },
    triangleCorner1: {
        width: '100%',
        height: 50,
        borderLeftWidth: width, // technically the *card*
        // borderLeftColor: 'gray',
        borderTopWidth: 40, // determines gradinet of slope
        borderTopColor: 'transparent', //  transparent
    },
    card: {
        width: '100%',
        height: 100,
        // backgroundColor: 'green'
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        position: 'absolute',
        borderRadius: 8,
        top: -70,
        left: 15
    },
    title: {
        paddingHorizontal: 20,        
        paddingBottom: 5
    },
    subtitle: {
        paddingHorizontal: 20,
    }
});
