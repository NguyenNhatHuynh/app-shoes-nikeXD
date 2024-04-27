import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const FilterScreen = (props) => {
    const [isNew, setIsNew] = useState(false);
    const [isSale, setIsSale] = useState(false);

    useEffect(() =>  props.navigation.setOptions({
        headerLeft: () =>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                <Ionicons name='menu' size={35} />
            </TouchableOpacity>,
        headerRight: () =>
            <TouchableOpacity>
                <Ionicons name='save' size={35} />
            </TouchableOpacity>
    }), [props.navigation]  )

    return (
        <View style={styles.container}>
            <Text>Lọc sản phẩm</Text>
            <View>
                <Text>Hàng mới</Text>
                <Switch
                    value={isNew}
                    onValueChange={(newValue) => setIsNew(newValue)} 
                />
            </View>
            <View>
                <Text>Hàng khuyến mãi</Text>
                <Switch
                    value={isSale}
                    onValueChange={(newValue) => setIsSale(newValue)} 
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
});

export default FilterScreen;
