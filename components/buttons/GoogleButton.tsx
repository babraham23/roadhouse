import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import { GoogleLogo } from '../logos/GoogleLogo';
import { Text } from '../../style/typography';

WebBrowser.maybeCompleteAuthSession();

export const GoogleButton = ({ text, style, onPress }: { text: string; onPress: () => void; style?: ViewStyle }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.button, style]} onPress={onPress}>
            {/* specific margins to line up with the other social buttons */}
            <GoogleLogo style={styles.logo} />
            <Text color={'#36454f'} style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        backgroundColor: 'white',
        height: 50,
    },
    logo: { marginLeft: 10, marginTop: 1 },
    text: {
        // color: "#36454f",
        alignSelf: 'center',
        marginLeft: 40, // specific margins to line up with the other social buttons
        // fontWeight: "bold",
        fontSize: 15,
    },
});
