import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import PRODUCTS from '../data/products';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DetailScreen = (props) => {
    const { productId } = props.route.params;
    const product = PRODUCTS.find(item => item.id === productId);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.headerIcon}>
                    <Ionicons name='star' size={30} color='black' />
                </TouchableOpacity>
            ),
        });
    }, [props.navigation]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: product.image }} resizeMode="cover" />
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.price}>Giá: {product.price}</Text>
                <Text style={styles.title}>Thông tin chi tiết</Text>
                <View style={styles.infoItem}>
                    <Text style={styles.label}>Thương hiệu:</Text>
                    <Text style={styles.value}>{product.brand}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.label}>Mô tả:</Text>
                    <Text style={styles.value}>{product.description}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.label}>RAM:</Text>
                    <Text style={styles.value}>{product.RAM}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.label}>Bộ nhớ:</Text>
                    <Text style={styles.value}>{product.storage}</Text>
                </View>
                <View style={styles.infoItem}>
                    <Text style={styles.label}>Kích thước màn hình:</Text>
                    <Text style={styles.value}>{product.screenSize}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    headerIcon: {
        marginRight: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: '80%',
        height: 400, // Điều chỉnh chiều cao cho phù hợp với màn hình
        borderRadius: 10, // Cong góc của hình ảnh
    },
    details: {
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
    },
    value: {
        flex: 2,
    },
});

export default DetailScreen;
