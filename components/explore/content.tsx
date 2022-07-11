import { StyleSheet } from 'react-native';
import React from 'react';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useTheme } from '../../hooks/useTheme';
import ContentItem from './contentItem';

const Content = () => {
    const { colors } = useTheme();

    return (
        <React.Fragment>
            <BottomSheetScrollView contentContainerStyle={[styles.contentContainer, { backgroundColor: colors.background }]}>
                <ContentItem />
                {/* <ContentItem /> */}
            </BottomSheetScrollView>
        </React.Fragment>
    );
};

export default Content;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingTop: 20,
    },
});
