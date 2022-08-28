import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from '../buttons/primaryButton';
import { useTheme } from '../../hooks/useTheme';

const BottomButtonLayout = ({ pro }: any) => {
    const { colors } = useTheme();
    return (
        <>
            {pro ? (
                <View style={[styles.container, { borderTopColor: colors.border, backgroundColor: colors.card }]}>
                    <View style={styles.buttonTopWrapper}>
                        <View style={{ width: '50%', paddingRight: 5 }}>
                            <PrimaryButton title="Get Directions" />
                        </View>
                        <View style={{ width: '50%', paddingLeft: 5 }}>
                            <PrimaryButton title="Book Table" />
                        </View>
                    </View>
                    <PrimaryButton title="View Menu" />
                </View>
            ) : (
                <View style={[styles.container, { borderTopColor: colors.border, backgroundColor: colors.card }]}>
                    <PrimaryButton title="Get Directions" />
                </View>
            )}
        </>
    );
};

export default BottomButtonLayout;

const styles = StyleSheet.create({
    container: {
        // height: 100,
        borderTopWidth: 0.5,
        padding: 20,
    },
    buttonTopWrapper: {
        flexDirection: 'row',
        paddingBottom: 20,
    },
});
