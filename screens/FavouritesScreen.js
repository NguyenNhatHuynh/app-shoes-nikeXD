import PRODUCTS from "../data/products";
import { View,FlatList,Text,Image,StyleSheet } from "react-native";

export default function FavouritesScreen() {
    const data = PRODUCTS.filter(item => item.isFav === true)
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) =>
                    <View>
                        <Image style={styles.image} source={{uri: item.image}}/>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
            }
            
            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image:{

    },
});