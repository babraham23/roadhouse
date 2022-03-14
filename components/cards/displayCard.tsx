import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Text } from '../../style/typography';

const DisplayCard = ({ style, onPress, title, location, logo }: any) => {
	const { colors, dark }: any = useTheme();
	return (
        <View style={styles.container} >
			<TouchableOpacity activeOpacity={1} onPress={onPress} style={[style, styles.wrapper]}>
				<View style={[styles.card, { backgroundColor: dark ? colors.card : colors.background }]}>
					<View style={styles.top}>
						<View style={styles.titleWrapper}>
							<Text fontSize={18}>{title}</Text>
							<Text color={colors.greyText} >{location}</Text>
						</View>
						<Image source={logo} style={styles.logo} />
					</View>
				</View>
			</TouchableOpacity>
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
	wrapper: {
		paddingBottom: 20,
		paddingLeft: 20,
		// backgroundColor: 'green'
	},
	card: {
		minHeight: 150,
		width: 300,
		borderRadius: 10,

		marginTop: 10,
		padding: 15,
		zIndex: 9,

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,

		elevation: 8,
	},
	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	titleWrapper: {},
    logo: {
		height: 50,
		width: 50,
        borderRadius: 13,
		// resizeMode: 'contain',
	},
});

export default DisplayCard;
