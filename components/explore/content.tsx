import { Animated, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useTheme } from '../../hooks/useTheme';
import ContentItem from './contentItem';
import { RestuarantsData } from '../../_models/explore.model';
import HorizontalParallax from '../horizontalParalla';
import { useUserContext } from '../../context/user.context';
import ImageContentItem from './imageContentItem';


const Content = ({ fade }: any) => {
    const { colors } = useTheme();
    const { places } = useUserContext();
    const [photos, setPhotos] = React.useState([]);
    const fadeAnimation = useRef(new Animated.Value(1)).current;

    React.useEffect(() => {
        fade ? fadeIn() : fadeOut();
    }, [fade])

    const fadeIn = () => {
        console.log('FADING IN');
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
        console.log('FADING OUT');
        Animated.timing(fadeAnimation, {
            toValue: 0,
            duration: 400,
            useNativeDriver: false,
        }).start();
    };

    return (
            <BottomSheetScrollView bounces={false} contentContainerStyle={[styles.contentContainer, { backgroundColor: colors.background }]}>
                <Animated.View style={{ flex: 1, opacity: fadeAnimation }}>
                
                <HorizontalParallax />
                <ImageContentItem />
                <ContentItem />
                {/* <HorizontalParallax title={`Hot Spots`} items={RestuarantsData} /> */}
                {/* <ContentItem /> */}
                </Animated.View>
            </BottomSheetScrollView>
    );
};

export default Content;

const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        paddingTop: 20,
    },
});
