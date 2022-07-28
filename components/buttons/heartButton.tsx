import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { HeaderText, Text } from '../../style/typography';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

type Props = {
    onClosePress?: any;
    onBackPress?: any;
    title?: string;
    hideBack?: boolean;
    hideClose?: boolean;
    style?: any;
};

const HeartButton = ({ onClosePress, style }: Props) => {
    const { colors, borderRadius } = useTheme();
    const navigation = useNavigation();
    const [liked, setLiked] = React.useState(false);
    const animation: any = React.useRef(null);
    // React.useEffect(() => {
    //     // You can control the ref programmatically, rather than using autoPlay
    //     animation.current?.play();
    // }, []);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
        } else {
            setLiked(true);
            // animation.current?.play();
        }
    }

    return (
        <TouchableOpacity onPress={() => handleLike()} style={[style]}>
            {liked ? (
                <MaterialCommunityIcons name="heart" size={20} color={'red'} />
                // <LottieView
                //     // autoPlay
                //     ref={animation}
                //     style={{
                //         width: 200,
                //         height: 200,
                //         backgroundColor: '#eee',
                //     }}
                //     // Find more Lottie files at https://lottiefiles.com/featured
                //     source={require('../../assets/animations/heart.json')}
                // />
            ) : (
                    <MaterialCommunityIcons name="heart-outline" size={20} color={colors.text} />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});

export default HeartButton;
