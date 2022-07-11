import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import * as Location from 'expo-location';
import { useUserContext } from '../context/user.context';

const useCachedResources = () => {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    // const { setLatitude, setLocation, setLongitude  } = useUserContext()
    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();
                await Font.loadAsync({
                    ...FontAwesome.font,
                    bold: require('../assets/fonts/SF-UI-Bold.ttf'),
                    regular: require('../assets/fonts/SF-UI.ttf'),
                });
                // let location = await Location.getCurrentPositionAsync({});
                // setLocation(location);
                // setLatitude(location.coords.latitude);
                // setLongitude(location.coords.longitude);
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }
        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
};

export default useCachedResources;
