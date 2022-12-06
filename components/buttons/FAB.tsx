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
        inputRange: [0, 0],
        outputRange: [0, 0],
    });

    const eventY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -100],
    });

    const directionsX = mode.interpolate({
        inputRange: [0, 0],
        outputRange: [0, 0],
    });

    const directionsY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -50],
    });

    const rotation = mode.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'],
    });

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            bottom: 50,
            right: 50,
        },
        buttonWrapper: {
            // position: 'absolute',
            // bottom: 50,
            // right: 30,
        },
        fabButtonWrapper: {
            // alignItems: 'center',
            // alignSelf: 'center',
            // position: 'absolute',
            // right: 61,
            // bottom: 50,
        },
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 55,
            height: 55,
            borderRadius: 30,
            backgroundColor: colors.primary,
            borderWidth: 2.5,
            borderColor: '#ff0849',
        },
        secondaryButton: {
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            height: 45,
            borderRadius: 23,
            backgroundColor: colors.primary,
            borderWidth: 3,
            borderColor: '#ff0849',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.fabButtonWrapper}>
                <Animated.View style={{ position: 'absolute', left: eventX, top: eventY }}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateEventScreen')} activeOpacity={0.8} style={styles.secondaryButton}>
                        <MaterialIcons name="event" size={24} color={'white'} />
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{ position: 'absolute', left: directionsX, top: directionsY }}>
                    <TouchableOpacity onPress={onDirectionsPress} activeOpacity={0.8} style={styles.secondaryButton}>
                        <SimpleLineIcons name="directions" size={24} color={'white'} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={10}>
                    <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                        <FontAwesome5 name="plus" size={20} color={'white'} />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FAB;
