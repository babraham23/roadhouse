import { StyleSheet, View } from 'react-native';
import React from 'react';
import { InfoData, DisplayData, TrippleData } from '../../_models/explore.model';
import ParallaxScroll from '../../components/scrollContext/parallaxScroll';
import ExploreCarousel from '../../components/carousel/exploreCarousel';
import HorizontalParallax from '../../components/horizontalParalla';

const ExploreScreen = () => {
    return (
        <ParallaxScroll>
        <View style={styles.container}>
            <ExploreCarousel title={`Recommended`} style="display" items={DisplayData} />
            <ExploreCarousel title={'Hot Spots'} style="info" items={InfoData} />
            <HorizontalParallax title={'Top Rated'} />
            <ExploreCarousel title={`In the Area`} style="tripple" items={TrippleData} />
            <ExploreCarousel title={'Hot Spots'} style="info" items={InfoData} />
            <ExploreCarousel title={`In the Area`} style="tripple" items={TrippleData} />
            <ExploreCarousel title={'Hot Spots'} style="info" items={InfoData} />
            <ExploreCarousel title={`In the Area`} style="tripple" items={TrippleData} />
        </View>
    </ParallaxScroll>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});
