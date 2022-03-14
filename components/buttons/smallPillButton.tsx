import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';

const SmallPillButton = ({ onPress, title, clear, style }: any) => {
	const { colors }: any = useTheme();
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={[style]}
			onPress={onPress}
		>
			<LinearGradient colors={[colors.primary, colors.primary_grad]} style={styles.wrapper}>
				<Text style={[styles.text, { color: colors.card }]}>{title}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		width: 60,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 15,
		marginHorizontal: 10,

	},
	clearWrapper: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		borderColor: '#009387',
		borderWidth: 1,
		marginTop: 15,
	},
	text: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#fff',
	},
});

export default SmallPillButton;
