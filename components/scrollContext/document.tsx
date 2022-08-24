import React from 'react';
import { SafeAreaView, View, StyleSheet, Platform } from 'react-native';
import Header from './fadeHeader';
import { ScrollView } from './scrollContextProvider';
import { useTheme } from '@react-navigation/native';

const Document = React.forwardRef(({ children, title, onBackPress, bounces, headerLeft, hideBasket }: any, ref: any) => {
    const { colors } = useTheme();
    return (
        <>
            <Header
                onBackPress={onBackPress}
                title={title}
                headerLeft={headerLeft}
                headerRight={hideBasket ? <View /> : <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />}
            />
            <>
                <ScrollView bounces={false} contentContainerStyle={Platform.OS == 'android' ? styles.androidContainer : styles.container} ref={ref}>
                    {children}
                </ScrollView>
            </>
        </>
    );
});

const styles = StyleSheet.create({
    container: {
		// flex: 1,
        // alignContent: 'flex-start',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        // paddingTop: 10,
    },
    androidContainer: {
        alignContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 10,
        padding: 10,
    },
    headerText: {
        textAlign: 'center',
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 17,
        fontWeight: '600',
    },
    svg: {
        height: 20,
        width: 20,
        margin: 20,
    },
    backWrapper: {
        position: 'absolute',
        bottom: -20,
        left: 20,
    },
});

export default Document;
