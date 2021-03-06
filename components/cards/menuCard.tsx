import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import MenuItems from '../cards/menuItems';

const MenuCard = () => {
    const { colors, borderRadius }: any = useTheme();
    function renderItem({ item }: { item: any }) {
        return <MenuItems key={item.Id} title={item.title} description={item.description} price={item.price} />;
    }
    function keyExtractor(item: any) {
        return item.Id.toString();
    }
    return (
        <View style={[styles.container, { backgroundColor: colors.background, borderRadius: borderRadius.card }]}>
            <FlatList
                contentContainerStyle={{ backgroundColor: colors.background }}
                style={{ backgroundColor: colors.background }}
                data={[]}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={() => <View style={{ height: StyleSheet.hairlineWidth }} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 35,
    },
});

export default MenuCard;
