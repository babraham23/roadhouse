import * as React from 'react';
// import * as Analytics from 'expo-firebase-analytics';
import { NavigationContainer, useNavigationContainerRef, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { CustomDefaultTheme, CustomDarkTheme } from '../style/themes';

import DrawerContent from '../components/drawer/drawerContent';

// Screens
import { UserProvider } from '../context/user.context';
import MenuScreen from '../screens/menu/menuScreen';
import SelectedItemScreen from '../screens/menu/selectedItemScreen';
import ViewBasketDrawer from '../components/drawer/viewBasketDrawer';
import MapScreen from '../screens/map';
import ExploreScreen from '../screens/explore/explore2';

import TestScreen from '../screens/test';
import BusinessScreen from '../screens/business/businessScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
    // const navigationRef: any = useNavigationContainerRef();
    // const routeNameRef: any = React.useRef();

    return (
        <NavigationContainer
            // ref={navigationRef}
            // onReady={() => {
            //     routeNameRef.current = navigationRef.getCurrentRoute().name;
            // }}
            // onStateChange={async () => {
            //     const previousRouteName = routeNameRef.current;
            //     const currentRouteName = navigationRef.getCurrentRoute().name;

            //     if (previousRouteName !== currentRouteName) {
            //         await Analytics.setCurrentScreen(currentRouteName);
            //     }

            //     // Save the current route name for later comparison
            //     routeNameRef.current = currentRouteName;
            // }}
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme}
        >
            <UserProvider>
                <DrawerNavigator />
            </UserProvider>
        </NavigationContainer>
    );
}

const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return (
        <Drawer.Navigator drawerContent={(props: any) => <ViewBasketDrawer {...props} />} screenOptions={{ drawerPosition: 'right', drawerStyle: { width: '80%' } }}>
            <Drawer.Screen name="RootNavigator" component={RootNavigator} options={{ headerShown: false, swipeEnabled: false }} />
        </Drawer.Navigator>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="BusinessScreen" component={BusinessScreen} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: false }} />  */}
            <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: false }} />

            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="SelectedItemScreen" component={SelectedItemScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BusinessScreen" component={BusinessScreen} options={{ headerShown: false }} />
                <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
