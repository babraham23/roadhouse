import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import DescriptionLogo from '../layout/descriptionLogo';

const TripleCard = ({ style, onPress, item }: any) => {
	const { colors, dark }: any = useTheme();
	return (
		<View style={styles.container} >
            <View style={styles.card} >
                <DescriptionLogo onPress={onPress} />
                <DescriptionLogo onPress={onPress} />
                <DescriptionLogo onPress={onPress} noBorder />
            </View>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
		flexBasis: '100%',
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
        // padding: 20,
		paddingLeft: 20,
		paddingBottom: 20,
        // marginLeft: 10,
        width: '80%',
        // marginTop: 20
    },
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
        
	},
	titleWrapper: {
		marginLeft: 10,
        borderBottomWidth: 0.5,
	},
});

export default TripleCard;
