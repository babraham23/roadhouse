import { StyleSheet } from 'react-native';
import React from 'react';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useTheme } from '../../hooks/useTheme';
import ContentItem from './contentItem';
import { RestuarantsData } from '../../_models/explore.model';
import HorizontalParallax from '../horizontalParalla/horizontalParrallax';
import { useUserContext } from '../../context/user.context';

const Content = () => {
    const { colors } = useTheme();
    const { places } = useUserContext();
    const [photos, setPhotos] = React.useState([]);

    // const getPhotos = (places: any) => {
    //     places.map((result: any) => {
    //         result.photos !== undefined ?
    //         result.photos.filter((item: any) => console.log('items -->', item))
    //         : null;
    //     });
    // };

    // React.useEffect(() => {
    //     getPhotos(places);
    // }, [getPhotos]);

    return (
        <React.Fragment>
            <BottomSheetScrollView bounces={false} contentContainerStyle={[styles.contentContainer, { backgroundColor: colors.background, borderTopColor: colors.border }]}>
                <ContentItem />
                {/* <HorizontalParallax title={`Hot Spots`} items={places} /> */}
                <HorizontalParallax title={`Hot Spots`} items={RestuarantsData} />
                {/* <ContentItem /> */}
                <ContentItem />
                <ContentItem />
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
        borderTopWidth: 1,
    },
});
