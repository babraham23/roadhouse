import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Text } from '../../style/typography';
import * as Animatable from 'react-native-animatable';
import AppIconBig from '../logo/appIconBig';
import SmallPillButton from '../buttons/smallPillButton';

const DescriptionLogo = ({ style, onPress, logo, noBorder, foodType, title }: any) => {
	const { colors, dark }: any = useTheme();
	return (
		<View style={[styles.wrapper, { borderBottomWidth: noBorder ? 0 : 0.6, borderBottomColor: colors.seperator }]}>
			<AppIconBig logo={logo} />
			<View style={styles.titleWrapper}>
				<Text fontSize={18}>{title}</Text>
				<Text color={colors.greyText} >{foodType}</Text>
			</View>
			<SmallPillButton onPress={onPress} title={'View'} style={styles.button} />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
        width: '100%'
	},
	titleWrapper: {
		marginLeft: 10,
		// borderBottomWidth: 0.5,
	},
	button: {
		position: 'absolute',
		right: -20,
		top: 0,
	},
});

export default DescriptionLogo;
