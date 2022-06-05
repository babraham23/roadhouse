import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RestuarantsData, TrippleData } from '../../_models/explore.model';
import ParallaxScroll from '../../components/scrollContext/parallaxScroll';
import ExploreCarousel from '../../components/carousel/exploreCarousel';
import HorizontalParallax from '../../components/carousel/horizontalParallax';
import * as Location from 'expo-location';
import { restDD } from './dd';

const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants&location=54.9696,1.6198&radius=9&key=AIzaSyBxDwgAiRmplHmbQfNrX4FJ4ZgqA0wp9X4';

// 50.92759902014908, 5.338255252145561  HASSELT

const ExploreScreen = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData]: any = useState([]);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const getRestaurants = async () => {
        try {
            // const response = await fetch(url);
            // const json = await response.json();
            // setData(json.movies);
            setData(restDD)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRestaurants();
    }, []);

    console.log('data -->', data[0])

    return (
        <ParallaxScroll>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <View style={styles.container}>
                    <ExploreCarousel title={`Recommended`} style="display" items={data} />
                    <HorizontalParallax title={`Hot Spots`} items={RestuarantsData} />
                    <ExploreCarousel title={`Recommended`} style="display" items={RestuarantsData} />
                    {/* <ExploreCarousel title={'Hot Spots'} style="info" items={RestuarantsData} />
                <HorizontalParallax title={'Top Rated'} />
                <ExploreCarousel title={`In the Area`} style="tripple" items={TrippleData} />
                <ExploreCarousel title={'Hot Spots'} style="info" items={RestuarantsData} />
                <ExploreCarousel title={`In the Area`} style="tripple" items={TrippleData} />
                <ExploreCarousel title={'Hot Spots'} style="info" items={RestuarantsData} />
            <ExploreCarousel title={`In the Area`} style="tripple" items={TrippleData} /> */}
                </View>
            )}
        </ParallaxScroll>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
