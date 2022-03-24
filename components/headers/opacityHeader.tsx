import React from 'react';
import { Animated, StyleSheet, TextInput, View } from 'react-native';
import ExploreHeader from '../headers/exploreHeader';


const OpacityHeader = (props: any) => {
	const { clampedScroll } = props;
	const searchBarTranslate = clampedScroll.interpolate({
		inputRange: [0, 40],
		outputRange: [0, -250],
		extrapolate: 'clamp',
	});
	const searchBarOpacity = clampedScroll.interpolate({
		inputRange: [0, 7],
		outputRange: [2, 0],
		extrapolate: 'clamp',
	});
	return (
		<Animated.View
			style={[
				styles.container,
				{
					transform: [
						{
							translateY: searchBarTranslate,
						},
					],
					opacity: searchBarOpacity,
				},
			]}
		>
            <ExploreHeader />
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		width: '100%',
		zIndex: 99,
	},
});

export default OpacityHeader;
