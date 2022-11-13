import { StyleSheet, View, Animated } from 'react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { MapButton } from '../../components/buttons/roundButtons';
import BottomSheet from '@gorhom/bottom-sheet';
import MapHeader from '../../components/headers/mapHeader';
import Content from '../../components/explore/content';
import { useTheme } from '../../hooks/useTheme';
import ScrollBar from '../../components/scrollbar';
import Map from '../../components/map/map';

type Props = {};

const ExploreScreen = ({}: Props) => {
    const { colors } = useTheme();
    const sheetRef = useRef<BottomSheet>(null);
    const fadeAnimation = useRef(new Animated.Value(1)).current;
    const snapPoints = useMemo(() => ['10%', '83%'], []);
    const [sheetOpen, setSheetOpen] = useState(false);

    const handleSheetChange = useCallback((index) => {
        if (index === 0) {
            setSheetOpen(false);
        } else {
            setSheetOpen(true);
        }
    }, []);

    const handleSnapPress = useCallback((index) => {
        sheetRef.current?.snapToIndex(index);
    }, []);

    return (
        <View style={styles.container}>
            <MapHeader />
            <ScrollBar />
            <Map />
            <MapButton title="Map" onPress={() => handleSnapPress(2)} style={styles.mapButton} />
            <BottomSheet
                handleStyle={[styles.handleStyle, { backgroundColor: colors.card, borderBottomColor: colors.border }]}
                handleIndicatorStyle={{ backgroundColor: colors.text }}
                ref={sheetRef}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
            >
                <Content fade={sheetOpen} />
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
    handleStyle: {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        height: 36,
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
});

export default ExploreScreen;
