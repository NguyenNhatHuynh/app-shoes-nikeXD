import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CATEGORIES from '../data/categories';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const ShopScreen = (props) => {
    const getCategoryIcon = (categoryId) => {
        switch (categoryId) {
            case '1':
                return 'ios-phone-portrait'; 
            case '2':
                return 'ios-laptop'; 
            case '3':
                return 'ios-tablet-portrait';
            case '4':
                return 'ios-watch'; 
            default:
                return 'ios-star'; 
        }
    };

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: item.color }]}
                    onPress={() => props.navigation.navigate('Product', { categoryId: item.id })}
                >
                    <View style={styles.itemContainer}>
                        <Ionicons name={getCategoryIcon(item.id)} size={30} color="black" />
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
    },
});

export default ShopScreen;
