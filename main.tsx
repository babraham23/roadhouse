import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import ActivityIndicator from './components/activityIndicator';
import Navigation from './navigation';
import useColorScheme from './hooks/useColorScheme';

const Main = () => {
    const { loading } = useSelector((state: any) => state.loadingReducer);
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator /> : null}
            <Navigation colorScheme={colorScheme} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Main;
