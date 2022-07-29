import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Marker } from 'react-native-maps';

type Props = {
    coords?: any;
};

const MarkerComponent = ({ coords }: Props) => {
    return (
        <>
            {coords.coordinates.map((item: any, i: number) => {
                return (
                    <Marker
                        onPress={() => console.log('Open modal screen to display restuarant info && directions from user location')}
                        key={`coordinate_${i}`}
                        coordinate={item}
                    />
                );
            })}
        </>
    );
};

export default MarkerComponent;

const styles = StyleSheet.create({});
