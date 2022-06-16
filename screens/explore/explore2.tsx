import { ActivityIndicator, Platform, StyleSheet, View, Animated } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { RestuarantsData, TrippleData } from '../../_models/explore.model';
import ParallaxScroll from '../../components/scrollContext/parallaxScroll';
import ExploreCarousel from '../../components/carousel/exploreCarousel';
import HorizontalParallax from '../../components/carousel/horizontalParallax';
import * as Location from 'expo-location';
import { restDD } from './dd';
import { MapButton } from '../../components/buttons/roundButtons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Text } from '../../style/typography';
import MapScreen from '../map';
import MapHeader from '../../components/headers/mapHeader';
import Content from '../../components/explore/content';
import { useTheme } from '../../hooks/useTheme';
import ScrollBar from '../../components/scrollbar';
import TopTabBar from '../../components/scrollbar/topBar';

// 50.92759902014908, 5.338255252145561  HASSELT

type Props = {
    navigation?: any;
};

const ExploreScreen = ({ navigation }: Props) => {
    const { colors } = useTheme();
    const sheetRef = useRef<BottomSheet>(null);
    const fadeAnimation = useRef(new Animated.Value(0)).current;
    const snapPoints = useMemo(() => ['10%', '83%'], []);
    const [sheetOpen, setSheetOpen] = useState(false);

    const handleSheetChange = useCallback((index) => {
        if (index === 0) {
            setSheetOpen(false);
            fadeOut();
        } else {
            setSheetOpen(true);
            fadeIn();
        }
    }, []);

    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);

    const fadeIn = () => {
        Animated.timing(fadeAnimation, {
            toValue: 1,
            duration: 700,
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
        <React.Fragment>
            <MapHeader />
            {/* <TopTabBar /> */}
            <ScrollBar />
            <View style={styles.container}>
                <MapScreen />
            </View>
            <View style={styles.mapButton}>
                <MapButton title="Map" onPress={() => handleSnapPress(2)} />
            </View>
            <BottomSheet
                handleStyle={[styles.handleStyle, { backgroundColor: colors.card }]}
                handleIndicatorStyle={{ backgroundColor: colors.text }}
                ref={sheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
            >
                <BottomSheetView style={{ flex: 1, backgroundColor: colors.card }}>
                    <Animated.View style={{ flex: 1, opacity: fadeAnimation }}>
                        <Content openSheet={() => handleSnapPress(1)} />
                    </Animated.View>
                </BottomSheetView>
            </BottomSheet>
            <Animated.View style={{ opacity: fadeAnimation }}>
                <MapButton opacity={fadeAnimation} title="Map" style={styles.mapButton} onPress={() => handleSnapPress(0)} />
            </Animated.View>
        </React.Fragment>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    handleStyle: {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        height: 36,
        justifyContent: 'center',
    },
});
