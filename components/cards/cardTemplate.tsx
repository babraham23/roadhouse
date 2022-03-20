import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '../../hooks/useTheme';


const Card = ({ style, title, handleOption, options }: any) => {
	const { colors }: any = useTheme();
	return (
		<View style={[style, styles.container]}>
			<View style={[styles.card, { backgroundColor: colors.card }]}>
				{/* <BoldText color={colors.primary}>{title}</BoldText> */}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        padding: 20
	},
	card: {
		minHeight: 150,
		width: '100%',
		borderRadius: 10,
		shadowColor: '#000',
        // borderWidth: 0.3,
		shadowOffset: {
			width: 1,
			height: 3,
		},
		shadowOpacity: 0.15,
		shadowRadius: 5.46,
		elevation: 9,
		marginTop: 10,
		padding: 10,
        zIndex: 9
	},
});

export default Card;
