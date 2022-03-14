import React from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../style/typography';
import { SET_MENU } from '../../state/reducers/menuReducer';
import { SET_MENU_ITEM } from '../../state/reducers/setMenuItem';
import InfoCard from '../cards/infoCard';
import TripleCard from '../cards/tripleCard';
import DisplayCard from '../cards/displayCard';


import { products, appIcon } from '../../_models/mcdonalds.model';
import { subwayProducts } from '../../_models/subway.model';
import { useTheme } from '../../hooks/useTheme';

export const ExploreCarousel = (props: any) => {
	// console.log('props -->', props)
	const { colors }: any = useTheme();
	const dispatch = useDispatch();
	const navigation: any = useNavigation();
	const { items, style } = props;
	const itemsPerInterval = props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

	const [interval, setInterval]: any = React.useState(1);
	const [intervals, setIntervals] = React.useState(1);
	const [width, setWidth] = React.useState(0);

	const init = (width: number) => {
		// initialise width
		setWidth(width);
		// initialise total intervals
		const totalItems = items.length;
		setIntervals(Math.ceil(totalItems / itemsPerInterval));
	};

	const getInterval = (offset: any) => {
		for (let i = 1; i <= intervals; i++) {
			if (offset + 1 < (width / intervals) * i) {
				return i;
			}
			if (i == intervals) {
				return i;
			}
		}
	};

	let bullets = [];

	for (let i = 1; i <= intervals; i++) {
		bullets.push(
			<Text
				key={i}
				style={{
					...styles.bullet,
					opacity: interval === i ? 0.8 : 0.1,
					backgroundColor: colors.background,
					color: colors.primary,
				}}
			>
				&bull;
			</Text>
		);
	}

	const handleNav = (id: any) => {
		if (id === 'mcdonalds') {
			// let selectedItem = { title: products[0].title, Id: products[0].Id}
            dispatch({ type: SET_MENU, payload: products });
			dispatch({ type: SET_MENU_ITEM, payload: products[0] })
			navigation.navigate('MenuScreen');
		} else if (id === 'subway') {
			// let selectedItem = { title: subwayProducts[0].title, Id: subwayProducts[0].Id}
			dispatch({ type: SET_MENU, payload: subwayProducts });
			dispatch({ type: SET_MENU_ITEM, payload: subwayProducts[0] })
			navigation.navigate('MenuScreen');
		}
	};

	const screenWidth = Dimensions.get('window').width;

	return (
		<>
			<View style={[props.styles, styles.container, { backgroundColor: colors.background }]}>
				<Text fontSize={18} bold style={styles.title}>
					{props.title}
				</Text>
				<ScrollView
					horizontal={true}
					contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
					showsHorizontalScrollIndicator={false}
					snapToInterval={screenWidth} // here
					onContentSizeChange={(w, h) => init(w)}
					onScroll={(data: any) => {
						setWidth(data.nativeEvent.contentSize.width);
						setInterval(getInterval(data.nativeEvent.contentOffset.x));
					}}
					scrollEventThrottle={200}
					pagingEnabled
					decelerationRate="fast"
				>
					{items.map((item: any, index: number) => {
						switch (style) {
							case 'info':
								return (
									<InfoCard
										foodType={item.foodType}
										description={item.description}
										logo={item.logo}
										location={item.location}
										key={index}
										title={item.title}
										onPress={() => handleNav(item.id)}
									/>
								);
							case 'tripple':
								return <TripleCard item={item} key={index} onPress={() => handleNav(item.id)} />;
							default:
								return (
                                    <DisplayCard
                                    logo={item.logo}
                                    location={item.location}
                                    key={index}
                                    title={item.title}
                                    // onPress={() => navigation.navigate('SetMenuScreen', item)}
                                    onPress={() => handleNav(item.id)}
                                />
                                )
						}
					})}
				</ScrollView>
				<View style={styles.bullets}>{bullets}</View>
			</View>
			{/* <Text>desrinptions text</Text> */}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		// borderColor: '#ebebeb',
		// borderWidth: 1,
		//   borderRadius: 8,
		// shadowColor: '#fcfcfc',
		// shadowOpacity: 1,
		marginTop: 20,
		// shadowOffset: {
		//   width: 0,
		//   height: 5
		// },
		// marginBottom: 20
	},
	scrollView: {
		display: 'flex',
		flexDirection: 'row',
		// overflow: 'hidden',
		// backgroundColor: 'green'
	},
	bullets: {
		position: 'absolute',
		top: 0,
		right: 0,
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingTop: 5,
	},
	bullet: {
		paddingHorizontal: 3,
		fontSize: 20,
	},
	title: {
		paddingLeft: 20,
	},
});

export default ExploreCarousel;
