import { StyleSheet, View, Animated } from 'react-native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MapButton } from '../../components/buttons/roundButtons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MapHeader from '../../components/headers/mapHeader';
import Content from '../../components/explore/content';
import { useTheme } from '../../hooks/useTheme';
import ScrollBar from '../../components/scrollbar';
import { getMyLocation } from '../../functions/locationFunction';
import { useUserContext } from '../../context/user.context';
import Map from '../../components/map/map';
import GoogleSearch from '../../components/inputs/googleSearch';

type Props = {};

const ExploreScreen = ({}: Props) => {
    const { colors } = useTheme();
    const sheetRef = useRef<BottomSheet>(null);
    const fadeAnimation = useRef(new Animated.Value(1)).current;
    const snapPoints = useMemo(() => ['10%', '83%'], []);
    const [sheetOpen, setSheetOpen] = useState(false);
    const { places } = useUserContext();

    // console.log(places);

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
        <View style={{ flex: 1 }}>
            <MapHeader />
            {/* <GoogleSearch /> */}
            <ScrollBar />
            <View style={styles.container}>
                <Map />
            </View>
            <View style={styles.mapButton}>
                <MapButton title="Map" onPress={() => handleSnapPress(2)} />
            </View>
            <BottomSheet
                handleStyle={[styles.handleStyle, { backgroundColor: colors.card, borderBottomColor: colors.border }]}
                handleIndicatorStyle={{ backgroundColor: colors.text }}
                ref={sheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
            >
                <BottomSheetView style={{ flex: 1, backgroundColor: colors.card }}>
                    <Animated.View style={{ flex: 1, opacity: fadeAnimation }}>
                        <Content />
                    </Animated.View>
                </BottomSheetView>
            </BottomSheet>
            <MapButton
                opacity={fadeAnimation}
                map={sheetOpen}
                title={sheetOpen ? 'Map' : 'List'}
                style={styles.mapButton}
                onPress={sheetOpen ? () => handleSnapPress(0) : () => handleSnapPress(1)}
            />
        </View>
    );
};

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
        borderBottomWidth: 1,
    },
});

export default ExploreScreen;
