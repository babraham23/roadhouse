import React from 'react';
import { View, Image, StyleSheet, useColorScheme } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Logo = ({ label, onPress, style }: any) => {
	const { border, colors }: any = useTheme();
	const navigation = useNavigation();
	const scheme = useColorScheme();
	return (
		<View style={[style, styles.container]}>
			<Animatable.View animation="bounceIn">
				{scheme === 'dark' ? (
					<Image source={require('../../assets/images/icon.png')} style={styles.logo} />
				) : (
					<Image source={require('../../assets/images/icon.png')} style={styles.logo} />
				)}
			</Animatable.View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	logo: {
		height: 250,
		width: 250,
		resizeMode: 'contain',
	},
});
export default Logo;
