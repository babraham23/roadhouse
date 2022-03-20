import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';

const DisplayCard = ({ style, onPress, title, location, logo }: any) => {
	const { colors, dark, borderRadius }: any = useTheme();
	return (
        <View style={[styles.container]} >
			<TouchableOpacity activeOpacity={1} onPress={onPress} style={[style, styles.wrapper]}>
				<View style={[styles.card, { backgroundColor: dark ? colors.card : colors.card, borderColor: colors.border, borderRadius: borderRadius.card }]}>
					<View style={styles.top}>
						<View style={styles.titleWrapper}>
							<Text fontSize={18}>{title}</Text>
							<Text color={colors.greyText} >{location}</Text>
						</View>
						{/* <Image source={logo} style={styles.logo} /> */}
					</View>
				</View>
			</TouchableOpacity>
        </View>
	);
};

const styles = StyleSheet.create({
    container: {
		flex: 1,
		// width: '100%',
		// display: 'flex',
		// flexDirection: 'row',
		// backgroundColor: 'green',
		// flexWrap: 'wrap',
		// marginLeft: 20
	},
	wrapper: {
		// paddingBottom: 20,
		paddingLeft: 20,
	},
	card: {
		height: 150,
		width: 300,
		borderWidth: 0.5,
		padding: 15,
		zIndex: 9,
		marginVertical: 20
	},
	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	titleWrapper: {},
    logo: {
		flex: 1,
		height: 50,
		width: 50,
        borderRadius: 13,
		resizeMode: 'contain',
	},
});

export default DisplayCard;
