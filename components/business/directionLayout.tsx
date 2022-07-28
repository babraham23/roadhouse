import { StyleSheet, View } from 'react-native';
import React from 'react';
import WalkingSvg from '../../assets/svgs/walkingSvg';
import VehicleSvg from '../../assets/svgs/vehicleSvg';


const DirectionLayout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <WalkingSvg />
                
            </View>
        </View>
    );
};

export default DirectionLayout;

const styles = StyleSheet.create({
    container: {},
    left: {
        width: '50%',
        borderWidth: 1,
    },
});
