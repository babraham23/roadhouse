import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';

type Props = {
    navigation?: any;
};

const dummyData = [
    { title: 'Team 1', value: 1 },
    { title: 'Team 2', value: 2 },
    { title: 'Team 3', value: 3 },
    { title: 'Team 4', value: 4 },
];

const DrawerContent = ({ navigation }: Props) => {
    const { colors }: any = useTheme();
    const [startDateTime, setState] = React.useState('');
    return (
        <View style={styles.container}>
            <Text bold fontSize={26}>
                Drawer
            </Text>
        </View>
    );
};

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height,
    },
});

export default DrawerContent;
