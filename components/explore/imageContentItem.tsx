import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Text } from '../../style/typography';
import DisplayCard from '../cards/displayCard';
import { useTheme } from '../../hooks/useTheme';
import { restDD } from '../../screens/explore/dd';
import { useUserContext } from '../../context/user.context';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import ImageCard from '../cards/imageCard';

const ImageContentItem = () => {
    const { colors } = useTheme();
    const [isLoading, setLoading] = useState(false);
    const [data, setData]: any = useState([]);
    const { loading } = useSelector((state: any) => state.loadingReducer);
    const { longitude, latitude, places } = useUserContext();
    const navigation: any = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.header} bold>
                Heading
            </Text>
            <ScrollView horizontal style={{ flexDirection: 'row' }} showsHorizontalScrollIndicator={false}>
                {places.map((item: any, index: number) => {
                    let image = item.photos !== undefined ? item.photos[0].photo_reference : '';
                    return (
                        <ImageCard
                            onPress={() => navigation.navigate('BusinessScreen', { item })}
                            key={index}
                            item={item}
                            title={item.name}
                            location={item.formatted_address}
                            rating={item.rating}
                            image={image}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default ImageContentItem;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // borderWidth: 1
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
});
