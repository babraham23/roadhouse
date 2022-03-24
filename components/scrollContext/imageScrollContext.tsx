import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, Image, View, Animated } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import BlurBackButton from '../buttons/blurBackButton'
import { Text } from '../../style/typography';
import { ScrollContextProvider } from './scrollContext';
import ModalHeader from '../headers/modalHeader';


const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 85;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;


const ImageScrollContext = ({ image, children, title }: any) => {
    const { colors }: any = useTheme()
	const scrollY = useRef(new Animated.Value(0)).current;

	const headerTranslateY = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, -HEADER_SCROLL_DISTANCE],
		extrapolate: 'clamp',
	});

	const imageOpacity = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
		outputRange: [1, 1, 0],
		extrapolate: 'clamp',
	});
	
	const imageTranslateY = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, 100],
		extrapolate: 'clamp',
	});

	// const titleScale = scrollY.interpolate({
	// 	inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
	// 	outputRange: [1, 1, 0.9],
	// 	extrapolate: 'clamp',
	// });
	// const titleTranslateY = scrollY.interpolate({
	// 	inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
	// 	outputRange: [0, 0, -8],
	// 	extrapolate: 'clamp',
	// });


	return (
        <>
		{image ? <View style={{ flex: 1 }}>
		<ModalHeader />

			<Animated.ScrollView
                showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT - 32 }}
				scrollEventThrottle={16}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
					useNativeDriver: true,
				})}
			>

                <View style={{ marginTop: 33}} >
				    {children}
                </View>
			</Animated.ScrollView>
			<Animated.View style={[styles.header, { backgroundColor: colors.background, transform: [{ translateY: headerTranslateY }] }]}>
				<Animated.Image
					style={[
						styles.headerBackground,
						{
							opacity: imageOpacity,
							transform: [{ translateY: imageTranslateY }],
						},
					]}
					// source={require('./assets/management.jpg')}
                    // source={{ uri: 'https://picsum.photos/900' }}
                    source={image}
				/>
			</Animated.View>
			{/* <Animated.View
				style={[
					styles.topBar,
					{
						transform: [{ scale: titleScale }, { translateY: titleTranslateY }],
					},
				]}
			>
                <BlurBackButton style={styles.back} />
                <View style={styles.headerWrapper} >
                    <Text fontSize={18} style={[styles.title]}  >{title}</Text>
                </View>
                {/* <View style={{ width: 50, height: 50, backgroundColor: 'green' }} /> 
			</Animated.View> */}
		</View> :
        <ScrollContextProvider title={title} >
            {children}
        </ScrollContextProvider>
        }
        </>
	);
}

const styles = StyleSheet.create({
	saveArea: {
		// flex: 1,
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		// backgroundColor: '#62d1bc',
		overflow: 'hidden',
		height: HEADER_MAX_HEIGHT,

	},
    headerWrapper: {
        // flexDirection: 'row', 
        // justifyContent: 'space-between', 
        // width: '100%' 
    },
    back: {
        position: 'absolute',
        left: 10
    },
	headerBackground: {
		// position: 'absolute',
		// top: 0,
		// left: 0,
		// right: 0,
		// width: null,
		// height: HEADER_MAX_HEIGHT,
        alignSelf: 'center',
        marginTop: 45,
        height:  200,
        width: '100%',
		resizeMode: 'contain',
		// resizeMode: 'cover'
	},
	topBar: {
		marginTop: 40,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
	},
	title: {
		// color: 'white',
		// fontSize: 20,
        // textAlign: 'center'
	},
	avatar: {
		height: 54,
		width: 54,
		resizeMode: 'contain',
		borderRadius: 54 / 2,
	},
	fullNameText: {
		fontSize: 16,
		marginLeft: 24,
	},
});

export default ImageScrollContext;
