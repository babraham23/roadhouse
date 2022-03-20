import { StyleSheet, View } from 'react-native';
import React from 'react';
import { RestuarantsData, TrippleData } from '../../_models/explore.model';
import ParallaxScroll from '../../components/scrollContext/parallaxScroll';
import ExploreCarousel from '../../components/carousel/exploreCarousel';
import HorizontalParallax from '../../components/horizontalParalla';

const ExploreScreen = () => {
    return (
        <ParallaxScroll>
            <View style={styles.container}>
                <ExploreCarousel title={`Recommended`} style="display" items={RestuarantsData} />
                <HorizontalParallax title={`Hot Spots`} />
                <ExploreCarousel title={`Recommended`} style="display" items={RestuarantsData} />
            {/* <ExploreCarousel title={'Hot Spots'} style="info" items={RestuarantsData} />
                <HorizontalParallax title={'Top Rated'} />
                <ExploreCarousel title={`In the Area`} style="tripple" items={TrippleData} />
                <ExploreCarousel title={'Hot Spots'} style="info" items={RestuarantsData} />
                <ExploreCarousel title={`In the Area`} style="tripple" items={TrippleData} />
                <ExploreCarousel title={'Hot Spots'} style="info" items={RestuarantsData} />
            <ExploreCarousel title={`In the Area`} style="tripple" items={TrippleData} /> */}
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
