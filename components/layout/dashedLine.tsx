import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const DashedLine = () => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                borderColor: colors.grey,
                borderWidth: 1,
                borderStyle: 'dashed',
                width: '100%',
            }}
        />
    );
};

export default DashedLine;
