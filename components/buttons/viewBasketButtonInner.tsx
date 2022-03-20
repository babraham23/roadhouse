import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';


const ViewBasketButtonInner = ({ onPress, title, style, secondary }: any) => {
	const { colors, borderRadius }: any = useTheme();
    const { Basket }: any = useSelector((state: any) => state.basketReducer);
    let numOfItems = Basket.length
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, styles.shadow, { shadowColor: colors.primary }]}>
			<LinearGradient
				colors={[colors.primary, '#ff0e4e']}
				style={[styles.wrapper, { borderRadius: borderRadius.button }]}
			>
                <View style={styles.inner} >
                    <Text center style={styles.text} fontSize={18} color={'white'}>
                        {title}
                    </Text>
					<View style={styles.numWrapper} >
                    	<Text style={styles.text} fontSize={18} color={colors.primary}>
                            {numOfItems}
                        </Text>
					</View>

                    {/* <View style={styles.basketWrapper} >
                        <Text center style={styles.text} fontSize={16} color={'white'}>
							{numOfItems}
                        </Text>
						<View style={styles.basket} >
                    		<Ionicons name="basket" size={30} color="white" />
						</View>
                    </View> */}
                </View>
			</LinearGradient>
		</TouchableOpacity>
    )
};

const styles = StyleSheet.create({
	shadow: {
		width: '100%',
		shadowOffset: {
			width: 1,
			height: 2,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 24,
	},
    inner: {
		flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
		alignItems: 'center'
	},
	wrapper: {
		width: '100%',
		height: 40,
		justifyContent: 'center',
		// marginTop: 30,
	},
    basketWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
	text: {
		// paddingRight: 5,
		// paddingTop: 5
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	basket: {

	},
	numWrapper: {
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		height: 30,
		width: 30,
		borderRadius: 15
		// height:
	}
});

export default ViewBasketButtonInner;

{
	/* <LinearGradient colors={[colors.primary, '#014421']} style={[styles.wrapper, { shadowColor: colors.green }]}>
<RegTextBold color={'white'} >{title}</RegTextBold>
</LinearGradient> */
}
