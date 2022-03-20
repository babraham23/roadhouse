import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';
import * as Animatable from 'react-native-animatable';
import AppIcon from '../logo/appIcon';


const DescriptionLogo = ({ style, onPress, handleOption, noBorder }: any) => {
	const { colors, dark }: any = useTheme();
	return (
		<TouchableOpacity activeOpacity={1} onPress={onPress}>
			<View style={[styles.wrapper, { borderBottomWidth: noBorder ? 0: 0.6, borderBottomColor: colors.seperator }]}>
				<AppIcon />
				<View style={styles.titleWrapper}>
					<Text fontSize={18}>McDonalds</Text>
					<Text>Hamburgers • Fries • American</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
        paddingVertical: 10
	},
	titleWrapper: {
		marginLeft: 10,
		// borderBottomWidth: 0.5,
	},
});

export default DescriptionLogo;
