import { StyleSheet } from 'react-native';
import React from 'react';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useTheme } from '../../hooks/useTheme';
import ContentItem from './contentItem';
import { RestuarantsData } from '../../_models/explore.model';
import HorizontalParallax from '../horizontalParalla';
import { useUserContext } from '../../context/user.context';
import ImageContentItem from './imageContentItem';

const Content = () => {
    const { colors } = useTheme();
    const { places } = useUserContext();
    const [photos, setPhotos] = React.useState([]);

    return (
        <React.Fragment>
            <BottomSheetScrollView bounces={false} contentContainerStyle={[styles.contentContainer, { backgroundColor: colors.background }]}>
                <ImageContentItem />
                <HorizontalParallax />
                <ContentItem />
                {/* <HorizontalParallax title={`Hot Spots`} items={RestuarantsData} /> */}
                {/* <ContentItem /> */}
                <ContentItem />
                <ContentItem />
                <ContentItem />
            </BottomSheetScrollView>
        </React.Fragment>
    );
};

export default Content;

const styles = StyleSheet.create({
    contentContainer: {
        // flex: 1,
        paddingTop: 20,
    },
});
