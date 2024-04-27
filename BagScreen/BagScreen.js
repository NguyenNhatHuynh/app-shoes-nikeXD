import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useFonts } from 'expo-font';

const BagScreen = (props) => {

    const [fontsLoaded] = useFonts({
        PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
        OpensansRegular: require('../assets/fonts/OpenSans-Regular.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
        PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    });
    if (!fontsLoaded) {
        return null; 
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.searchButton}>
                <Image source={require('../assets/img/search.png')} style={styles.searchImage} />
            </TouchableOpacity>
            <Text style={styles.title}>My Bag</Text>


            <View style={styles.itemContainer}>
                <View style={styles.itemContent}>
                    <Image source={require('../assets/img/Product/pd3/sneaker3.jpg')} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <View style={styles.productName}>
                            <Text style={styles.textProduct}>Freak 3 Red</Text>
                            <TouchableOpacity>
                                <Image source={require('../assets/img/more.png')} style={styles.moreImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsRow}>
                        <View style={styles.detailItem}>
                            <Text style={[styles.detailsLabel, styles.colorLabel]}>Color: </Text>
                            <Text style={styles.detailsValue}>Black</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailsLabel}>Size: </Text>
                            <Text style={styles.detailsValue}>L</Text>
                        </View>

                        </View>
                        <View style={styles.quantityRow}>
                            <View style={styles.quantityBox}>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Image source={require('../assets/img/minus.png')} style={styles.quantityIcon} />
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>1</Text>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Image source={require('../assets/img/add.png')} style={styles.quantityIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.priceBox}>
                                <Text style={styles.priceText}>250,000Đ</Text>
                            </View>
                            </View>
                    </View>
                </View>
            </View>


            <View style={styles.itemContainer}>
                <View style={styles.itemContent}>
                    <Image source={require('../assets/img/Product/pd5/sneaker5.jpg')} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <View style={styles.productName}>
                            <Text style={styles.textProduct}>Jordan 1 Low</Text>
                            <TouchableOpacity>
                                <Image source={require('../assets/img/more.png')} style={styles.moreImage} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsRow}>
                        <View style={styles.detailItem}>
                            <Text style={[styles.detailsLabel, styles.colorLabel]}>Color: </Text>
                            <Text style={styles.detailsValue}>Black</Text>
                        </View>
                        <View style={styles.detailItem}>
                            <Text style={styles.detailsLabel}>Size: </Text>
                            <Text style={styles.detailsValue}>L</Text>
                        </View>

                        </View>
                        <View style={styles.quantityRow}>
                            <View style={styles.quantityBox}>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Image source={require('../assets/img/minus.png')} style={styles.quantityIcon} />
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>1</Text>
                                <TouchableOpacity style={styles.quantityButton}>
                                    <Image source={require('../assets/img/add.png')} style={styles.quantityIcon} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.priceBox}>
                                <Text style={styles.priceText}>500,000Đ</Text>
                            </View>
                            </View>
                    </View>
                </View>
            </View>
            


            <View style={styles.totalRow}>
                <Text style={styles.textTotal}>Total Amout:</Text>
                <Text style={styles.textTotalPrice}>1,500,000 VND</Text>
            </View>

            
            


            <Button
                mode="contained"
                style={styles.button}
                labelStyle={styles.buttonText}
                onPress={() => {
                    // Đặt hành động khi nhấn nút CHECK OUT
                }}
            >
                CHECK OUT
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 30,
        alignSelf: 'flex-start',
        marginBottom: 20,
        fontFamily:'PoppinsBold'
    },
    searchButton: {
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
    searchImage: {
        width: 25,
        height: 25,
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        elevation: 3, 
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    productImage: {
        width: 150,
        height: 150,
        marginRight: 20,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    textProduct: {
        fontSize: 16,
        fontFamily:'PoppinsMedium',
    },
    moreImage: {
        width: 20,
        height: 20,
        marginRight:20,
    },
    detailsRow: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    detailsText: {
        marginRight: 10,
        fontSize: 14,
    },
    quantityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    quantityBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    
    quantityButton: {
        padding: 5,

        borderRadius: 10,
    },
    quantityIcon: {
        width: 20,
        height: 20,
    },
    quantityText: {
        marginHorizontal: 15,
        fontSize: 18,
        fontFamily:'PoppinsRegular'
    },
    priceBox:{
        marginRight: 10,
    },
    priceText: {
        fontSize: 16,
        fontFamily:'PoppinsRegular'
    },
    button: {
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        backgroundColor: '#DB3022',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontFamily:'PoppinsRegular'
    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center', 
        marginRight:20,
    },
    detailsLabel: {
        color: 'grey',
        fontSize: 14,
        fontFamily:'PoppinsRegular'
    },
    detailsValue: {
        color: 'black',
        fontSize: 14,
        fontFamily:'PoppinsRegular'
    },
    totalRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
    },
    textTotal:{
        fontSize:15,
        fontFamily:'PoppinsRegular',
        color: 'grey',
    },
    textTotalPrice:{
        fontSize:17,
        fontFamily:'PoppinsMedium'
    },
    
});

export default BagScreen;
