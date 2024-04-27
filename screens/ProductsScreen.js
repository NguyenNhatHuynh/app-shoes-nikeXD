import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import PRODUCTS from '../data/products';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductsScreen = (props) => {
    const { categoryId } = props.route.params;
    const data = PRODUCTS.filter(item => item.categoryId === categoryId);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => props.navigation.navigate('Detail', { productId: item.id })}
        >
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductsScreen;
