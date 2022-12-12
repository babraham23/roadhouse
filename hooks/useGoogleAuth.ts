import { useNavigation } from '@react-navigation/native';
import * as Facebook from 'expo-auth-session/providers/facebook';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';

import {
    googleLoginOrRegister,
    User,
    //   registerUser,
} from '../api/user';
// import { useUser } from './useUser';

export const useAuth = () => {
    const [googleResponse, googleAuth]: any = Google.useAuthRequest({
        expoClientId: '1080382822276-eqklp58m1q9fl85m7aj89n1ofp8bdj7p.apps.googleusercontent.com',
        // iosClientId: '1080382822276-a0ms51p5cfc523bivhchs8nk04u2scq0.apps.googleusercontent.com',
        // androidClientId: '1080382822276-dqohv9donltabnijor1uun2765hstr4v.apps.googleusercontent.com',
        // webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        selectAccount: true,
    });

    useEffect(() => {
        async function loginUserWithGoogle(access_token: string) {
            try {
                // setLoading(true);

                const user = await googleLoginOrRegister(access_token);
                handleSignInUser(user);
            } catch (error) {
                handleAuthError();
            } finally {
                // setLoading(false);
            }
        }

        console.log('googleResponse -->', googleResponse);

        if (googleResponse?.type === 'success') {
            const { access_token } = googleResponse.params;
            loginUserWithGoogle(access_token);
        }
    }, [googleResponse]);

    // const { login } = useUser();
    const { goBack } = useNavigation();
    // const { setLoading } = useLoading();

    const handleSignInUser = (user?: User | null) => {
        if (user) {
            // login(user);
            goBack();
        }
    };

    const handleAuthError = () => alert('Unable to authorize');

    // const nativeRegister = async (values: { firstName: string; lastName: string; email: string; password: string }) => {
    //     try {
    //         setLoading(true);

    //         const user = await registerUser(values.firstName, values.lastName, values.email, values.password);
    //         handleSignInUser(user);
    //     } catch (error) {
    //         handleAuthError();
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    //   const nativeLogin = async (values: { email: string; password: string }) => {
    //     try {
    //       setLoading(true);

    //       const user = await loginUser(values.email, values.password);
    //       handleSignInUser(user);
    //     } catch (error) {
    //       handleAuthError();
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    return { googleAuth };
};
