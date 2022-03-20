import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useTheme } from '../../hooks/useTheme';

const BlurBackButton = ({ label, onPress, style }: any) => {
	const { border, colors, dark }: any = useTheme();
	const navigation = useNavigation();
	return (
		<View style={[style, styles.container]}>
			<View style={[styles.nonBlurredContent, { backgroundColor: colors.background }]}>
				<TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
					{/* <Text style={styles.label}>{label}</Text> */}
					<Ionicons size={30} name={'arrow-back-sharp'} color={colors.primary} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// justifyContent: 'center',
		// height: 25,
		// minWidth: 50,
		// marginLeft: 5,
		// marginRight: 15,
		// paddingHorizontal: 15,
		// marginVertical: 10,
		// alignContent: 'center',
		zIndex: 99,
		elevation: 99,
	},
	label: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Bold',
		alignSelf: 'center',
	},
	nonBlurredContent: {
		height: 38,
		width: 38,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
export default BlurBackButton;

// {dark ? (
//     <View style={[styles.nonBlurredContent, { backgroundColor: colors.background }]}>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
//             {/* <Text style={styles.label}>{label}</Text> */}
//             <Ionicons size={30} name={'arrow-back-sharp'} color={colors.text} />
//         </TouchableOpacity>
//     </View>
// ) : (
//     <BlurView intensity={85} style={[styles.nonBlurredContent]}>
//         <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
//             {/* <Text style={styles.label}>{label}</Text> */}
//             <Ionicons
//                 size={30}
//                 style={{ marginBottom: -3 }}
//                 name={'arrow-back-sharp'}
//                 color={colors.text}
//             />
//         </TouchableOpacity>
//     </BlurView>
// )}
