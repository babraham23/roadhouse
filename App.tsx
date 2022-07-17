import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './state/store';
import { client } from './client';
import Main from './main';
import DirectionsTest from './components/map/directionTest';
import DirectionsTest2 from './components/map/dt2';
// import * as Sentry from 'sentry-expo';

// npm run type-gen

// Sentry.init({
//     dsn: 'https://a778278d18d641478715fe13395c0456@o1073025.ingest.sentry.io/6072649',
//     enableInExpoDevelopment: true,
//     debug: true,
// });

// Sentry.Native.*
// Sentry.Browser.*

const App: React.FC<any> = () => {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <ApolloProvider client={client}>
                    <Provider store={store}>
                        {/* <Navigation colorScheme={colorScheme} /> */}
                        {/* <Main />
                        <StatusBar /> */}
                        {/* <DirectionsTest /> */}
                        <DirectionsTest2 />
                    </Provider>
                </ApolloProvider>
            </SafeAreaProvider>
        );
    }
};

export default App;
