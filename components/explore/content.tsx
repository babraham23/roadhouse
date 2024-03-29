import { Animated, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useTheme } from '../../hooks/useTheme';
import ContentItem from './contentItem';
import { RestuarantsData } from '../../_models/explore.model';
import HorizontalParallax from '../horizontalParalla';
import ImageContentItem from './imageContentItem';
import { usePlacesContext } from '../../context/place.context';

const Content = ({ fade }: any) => {
    const { colors } = useTheme();
    const { places } = usePlacesContext();
    const [photos, setPhotos] = React.useState([]);
    const fadeAnimation = useRef(new Animated.Value(1)).current;

    React.useEffect(() => {
        fade ? fadeIn() : fadeOut();
    }, [fade]);

    const fadeIn = () => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 400,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
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
