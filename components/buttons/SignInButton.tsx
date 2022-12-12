import { Image, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text } from '../../style/typography';
import { Images } from '../../style/images';
import { useTheme } from '../../hooks/useTheme';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
    text: string;
    onPress: () => void;
    style?: ViewStyle;
    google?: boolean;
};

const SignInButton = ({ text, style, onPress, google }: Props) => {
    const { colors, borderRadius } = useTheme();
    return (
        <TouchableOpacity activeOpacity={0.8} style={[styles.button, style, { backgroundColor: colors.card, borderColor: colors.primary, borderRadius: borderRadius.button }]} onPress={onPress}>
            <View style={styles.logoWrapper}>
                {google ? <Image style={styles.logo} source={Images.GOOGLE_LOGO} /> : <MaterialIcons name="email" size={24} color={colors.text} />}
            </View>
            <Text bold center>
                {text}
            </Text>
        </TouchableOpacity> 
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        width: '100%',
        backgroundColor: 'white',
        height: 40,
        justifyContent: 'center',
        borderWidth: 2,
        marginTop: 20,
    },
    logoWrapper: {
        position: 'absolute',
        left: 20,
    },
    logo: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },
});

export default SignInButton;
