import React, { useState } from 'react';
import { View, StyleSheet, TouchableHighlight, Animated, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';

type Props = {
    onEventPress?: () => void;
    onDirectionsPress?: () => void;
};

const FAB = ({ onEventPress, onDirectionsPress }: Props) => {
    const { colors, dark } = useTheme();
    const mode: any = React.useRef(new Animated.Value(0)).current;
    const [zIndex, setZindex] = useState(0);
    const navigation = useNavigation();

    const handlePress = () => {
        setZindex(mode == 1 ? 1 : 0);
        Animated.sequence([
            Animated.timing(mode, {
                toValue: mode._value === 0 ? 1 : 0,
                duration: 200,
                useNativeDriver: false,
            }),
        ]).start();
    };

    const eventX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -23],
    });

    const eventY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -160],
    });

    const directionsX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-24, -23],
    });

    const directionsY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, -110],
    });

    const rotation = mode.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    const styles = StyleSheet.create({
        buttonWrapper: {
            position: 'absolute',
            bottom: 50,
            right: 30,
        },
        fabButtonWrapper: {
            alignItems: 'center',
            alignSelf: 'center',
            bottom: 50,
            position: 'absolute',
            right: 61,
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 55,
            height: 55,
            borderRadius: 30,
            backgroundColor: colors.card,
            borderWidth: 2.5,
            borderColor: colors.primary,
        },
        secondaryButton: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: colors.primary,
            borderWidth: 3,
            borderColor: colors.card,
        },
    });

    return (
        <View>
            <View style={styles.fabButtonWrapper}>
                <Animated.View style={{ position: 'absolute', left: eventX, top: eventY }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateEventScreen')} activeOpacity={0.8} style={styles.secondaryButton}>
                        <MaterialIcons name="event" size={24} color={dark ? 'black' : 'white'} />
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{ position: 'absolute', left: directionsX, top: directionsY }}>
                    <TouchableOpacity onPress={onDirectionsPress} activeOpacity={0.8} style={styles.secondaryButton}>
                        <SimpleLineIcons name="directions" size={24} color={dark ? 'black' : 'white'} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={10}>
                    <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                        <FontAwesome5 name="plus" size={20} color={colors.primary} />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FAB;
