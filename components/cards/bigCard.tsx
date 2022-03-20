import React from 'react';
import { Dimensions, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux'
import { Text } from '../../style/typography';
import { TouchableOpacity } from 'react-native-gesture-handler';


const BigCard = ({ product, onPress, index }: any) => {
    const { borderRadius }: any = useTheme();
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container} >
			<View style={[styles.card, { backgroundColor: product.color1, borderRadius: borderRadius.card }]} >
				<Text style={styles.title} color={product.textColor} center >{product.title}</Text>
                <Text numberOfLines={3} style={styles.subtitle} color={product.textColor} >{product.description}</Text>			
            </View>
		</TouchableOpacity>
	);
};

const { width } = Dimensions.get('window');
export const CARD_HEIGHT = (width * 1250) / 974;
const styles = StyleSheet.create({
	container: {
		width,
        height: 450
	},
    card: {
        borderRadius: 16,
        margin: 32,
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },
	title: {
		textAlign: 'center',
		// marginBottom: 16,
        marginTop: 20
	},
	subtitle: {
		fontSize: 16,
		textAlign: 'center',
		color: '#432406',
	},
});

export default BigCard;
