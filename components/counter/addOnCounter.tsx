import React from 'react';
import { View, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Text } from '../../style/typography';
import * as Animatable from 'react-native-animatable';

const Counter = ({ style, maxNumber }: any) => {
	const { colors }: any = useTheme();
	const [ count, setCount ] = React.useState(0)

	const handleCount = (type: string) => {
		if (type == 'Add') {
			setCount(count + 1)
		}
		else if (type == 'Minus') {
			setCount(count - 1)
		}
	}
	
	return (
		<View style={[style, styles.container]}>
			{count > 0 ? <Animatable.View animation="fadeIn">
				<TouchableOpacity
					onPress={() => handleCount('Minus')}
					activeOpacity={0.8}
					style={[styles.arrowWrapper, { alignItems: 'flex-end' }]}
				>
					<AntDesign name="caretleft" size={26} color={colors.primary} />
				</TouchableOpacity>
			</Animatable.View> : <View style={styles.dummy} />}
			
                <View style={[styles.counter, { backgroundColor: colors.background }]}>
					<Text color={colors.primary} fontSize={20} >{count == 0 ? null : count}</Text>
				</View>

			{count < maxNumber ? <Animatable.View animation="fadeIn">
				<TouchableOpacity
					onPress={() => handleCount('Add')}
					// onPress={() => console.log('add')}
					activeOpacity={0.8}
					style={styles.arrowWrapper}
				>
					<AntDesign name="caretright" size={26} color={colors.primary} />
				</TouchableOpacity>
			</Animatable.View> : <View style={styles.dummy} />
			}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
		width: 100
	},
    counter: {
        height: 40,
        width: 40,
        borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
    },
	arrowWrapper: {
		height: 40,
		width: 50,
		justifyContent: 'center'
	},
	dummy: {
		height: 40,
		width: 50,
	}
});

export default Counter;
