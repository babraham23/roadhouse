import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Text } from '../../style/typography';
// import FoodCheckBox from '../checkbox/foodCheckBox';
import * as Animatable from 'react-native-animatable';
import DescriptionLogo from '../layout/distanceLogo';


const DescriptionCard = ({ style, onPress, handleOption, options, title, description, logo, foodType, id }: any) => {
	const { colors, dark }: any = useTheme();
    const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<View style={styles.top}>
					<DescriptionLogo title={title} foodType={foodType} logo={logo} onPress={onPress} noBorder />
				</View>
				<View>
					<Text color={colors.greyText} fontSize={16}>{description}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexBasis: '110%',
		flex: 1,
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		// alignItems: 'center',
		// alignContent: 'center',
		// justifyContent: 'center',
	},
	card: {
		paddingHorizontal: 10,
		marginLeft: 10,
		width: '80%',
		marginBottom: 20
		// marginTop: 20,
		// borderWidth: 1
	},
	top: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default DescriptionCard;
