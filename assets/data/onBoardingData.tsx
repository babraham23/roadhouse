import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';
import LaptopSVG from '../../components/svgs/onBoardingAssets/laptop';
import FolderSVG from '../../components/svgs/onBoardingAssets/folder';
import TreeSVG from '../../components/svgs/onBoardingAssets/tree';
import RocketSVG from '../../components/svgs/onBoardingAssets/rocket';

export const CarouselData = () => {
    const { colors } = useTheme();
    return [
        {
            id: '0',
            items: [
                <View style={styles.imageContainer}>
                    <LaptopSVG />
                </View>,
                <View style={styles.textContainer}>
                    <Text style={{ padding: 50, paddingBottom: 20 }} fontSize={20} center bold>
                        Home or office working, you get to choose
                    </Text>
                    <Text style={{ padding: 30, paddingTop: 0, paddingBottom: 0 }} center color={colors.dark_grey}>
                        Let your team know if you'll be working from home or the office on the day
                    </Text>
                </View>,
            ],
        },
        {
            id: '1',
            items: [
                <View style={styles.imageContainer}>
                    <FolderSVG />
                </View>,
                <View style={styles.textContainer}>
                    <Text style={{ padding: 50, paddingBottom: 20 }} fontSize={20} center bold>
                        Staff directory, so you can put a face to a name
                    </Text>
                    <Text style={{ padding: 30, paddingTop: 0, paddingBottom: 0 }} center color={colors.dark_grey}>
                        As we grow, we're making it easier for everyone to know everyone
                    </Text>
                </View>,
            ],
        },
        {
            id: '2',
            items: [
                <View style={styles.imageContainer}>
                    <TreeSVG />
                </View>,
                <View style={styles.textContainer}>
                    <Text style={{ padding: 50, paddingBottom: 20 }} fontSize={20} center bold>
                        Organise your holidays with simplicity and ease
                    </Text>
                    <Text style={{ padding: 30, paddingTop: 0, paddingBottom: 0 }} center color={colors.dark_grey}>
                        It's now easier than ever to request some much needed time off
                    </Text>
                </View>,
            ],
        },
        {
            id: '3',
            items: [
                <View style={styles.imageContainer}>
                    <RocketSVG />
                </View>,
                <View style={styles.textContainer}>
                    <Text style={{ padding: 50, paddingBottom: 20 }} fontSize={20} center bold>
                        See when your next performance review is
                    </Text>
                    <Text style={{ padding: 30, paddingTop: 0, paddingBottom: 0 }} center color={colors.dark_grey}>
                        A key date nobody should forget, and we'll help you out here
                    </Text>
                </View>,
            ],
        },
    ];
};

const styles = StyleSheet.create({
    imageContainer: {
        height: 400,
        width: '100%',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
