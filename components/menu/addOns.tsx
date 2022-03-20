import React from 'react';
import { Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Text } from '../../style/typography';
// import Counter from './counter';
import AddOnCounter from '../counter/addOnCounter';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_ADD_ON } from '../../state/reducers/addonsReducer';

const AddOnItem = ({ style, title, onChangeCheck, counter, maxNumber, allergin, noBorder, Id, addOns }: any) => {
	const { colors, border }: any = useTheme();
	const [check, toggleCheck] = React.useState(false);
	const [updatedAddOn, setUpdatedAddOn] = React.useState([])
	const dispatch = useDispatch();
	const { Addons }: any = useSelector((state: any) => state.addOnReducer);
	

	const handleAddAddOn = () => {
		const item = { title, maxNumber, Id };
		// filter out prod options if already exists
		let ProductOptionsUpdated = addOns.filter((prodOpt: any) => prodOpt.Id !== Id);
		// add it back with the updated quantity
		ProductOptionsUpdated = [...Addons, ...[item]];
		// update state
		// dispatch({ type: ADD_ADD_ON, payload: ProductOptionsUpdated });
		console.log(ProductOptionsUpdated)
		setUpdatedAddOn(ProductOptionsUpdated);
		toggleCheck(true)
	};

	const handleRemoveAddOn = () => {
		const item = { title, maxNumber, Id };
		// if (quantity == 0) {
		// 	// dispatch({ type: CLEAR_ADD_ON, payload: addOnCostPrice });

		// 	let ProductOptionsUpdated = addOns.filter((prodOpt: any) => prodOpt.Id !== Id);
		// 	dispatch({ type: ADD_ADD_ON, payload: ProductOptionsUpdated });
		// } else {
		// 	dispatch({ type: MINUS_COST, payload: addOnCostPrice * 1 });

		let ProductOptionsUpdated = updatedAddOn.filter((prodOpt: any) => item.Id !== Id)
			// dispatch({ type: ADD_ADD_ON, payload: ProductOptionsUpdated });
			setUpdatedAddOn(ProductOptionsUpdated);
			toggleCheck(false)
			console.log('delete -->', ProductOptionsUpdated)
		}

		

	const addAddOn = (item: any) => {
		dispatch({ type: ADD_ADD_ON, payload: item })
	}

	const handleCheck = () => {
		toggleCheck(!check);
		// handleAddAddOn()
		// onChangeCheck(!check);
	};

	return (
		<>
			<View
				style={[
					style,
					styles.container,
					{ borderBottomColor: colors.greyText, borderBottomWidth: noBorder ? 0 : 0.5 },
				]}
			>
				<View style={styles.titleWrapper}>
					<Text fontSize={18}>{title}</Text>
					<Text color={colors.greyText} style={styles.contains} fontSize={14}>
						£2.00
					</Text>
				</View>
				{/* {counter ? ( */}
					<View style={styles.checkboxWrapper}>
						<AddOnCounter maxNumber={maxNumber} />
					</View>
				{/* ) : (
					<TouchableOpacity
						// onPress={() => handleCheck()}
						onPress={() => check ? handleRemoveAddOn() : handleAddAddOn()}
						activeOpacity={0.5}
						style={[styles.checkboxWrapper]}
					>
						<View
							style={[styles.check, { backgroundColor: colors.background, borderRadius: border.input }]}
						>
							{check ? (
								<Animatable.View animation={'bounceIn'} style={[style]}>
									<Feather name={'check'} color={colors.primary} size={40} />
								</Animatable.View>
							) : null}
						</View>
					</TouchableOpacity>
				)} */}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		minHeight: 80,
		// paddingVertical: 10,
		// shadowColor: '#000',
		// shadowOffset: {
		// 	width: 0,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 3.84,
	},
	check: {
		height: 40,
		width: 40,
		alignItems: 'center',
		justifyContent: 'center',
		// marginLeft: 30,
	},
	titleWrapper: {
		width: '70%',
		paddingLeft: 20,
		justifyContent: 'center',
	},
	checkboxWrapper: {
		width: '25%',
		// height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	contains: {
		// paddingTop: 15,
		// paddingLeft: 10
	},
});

export default AddOnItem;
