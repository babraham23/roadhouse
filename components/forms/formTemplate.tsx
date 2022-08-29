import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import FormButton from '../buttons/formButton';
import { Text } from '../../style/typography';

type Props = {
    onPress?: any;
    description?: string;
    onBackPress?: any;
};

const FormTemplate: React.FC<Props> = ({ children, description, onBackPress, onPress }) => {
    const { colors, borderRadius } = useTheme();
    const navigation = useNavigation();
    return (
        <>
            <TouchableOpacity onPress={onBackPress ? onBackPress : () => navigation.goBack()} style={[styles.arrowWrapper, { backgroundColor: colors.background }]}>
                <Ionicons name="arrow-back-sharp" size={24} color={colors.text} />
            </TouchableOpacity>
            <ScrollView bounces={true}>
                <View style={styles.container}>
                    <View style={styles.descriptionWrapper}>
                        <Text bold fontSize={18}>
                            Description
                        </Text>
                    </View>
                    {children}
                </View>
            </ScrollView>
            <FormButton title="Continue" onPress={onPress} />
        </>
    );
};

export default FormTemplate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 90,
        paddingHorizontal: 20,
    },
    arrowWrapper: {
        position: 'absolute',
        left: 15,
        top: 40,
        zIndex: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionWrapper: {
        paddingBottom: 30,
    },
    buttonContainer: {
        borderTopWidth: 1,
        height: 100,
        width: '100%',
        padding: 10,
        paddingTop: 20,
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
});
