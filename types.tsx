/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    ExploreScreen: undefined;
    MenuScreen: undefined;
    SelectedItemScreen: undefined;
    MapScreen: undefined;
    BusinessScreen: undefined;
    CreatePlace: undefined;
    StorefrontScreen: undefined;
    SignUpScreen: undefined;
    CheckoutScreen: undefined;
    CreateEventScreen: undefined;
    SignInScreen: undefined;

    TestScreen: undefined;
};
