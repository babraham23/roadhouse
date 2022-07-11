
import React from 'react';
import { View, StyleSheet, ActivityIndicator as ActivityIndicatorElement } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

const ActivityIndicator = () => {
    const { colors } = useTheme();
    return (
        <View style={styles.activityIndicatorStyle}>
            <ActivityIndicatorElement color={colors.primary} size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    activityIndicatorStyle: {
        flex: 1,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        zIndex: 90,
        elevation: 90,
    },
});

export default ActivityIndicator;

