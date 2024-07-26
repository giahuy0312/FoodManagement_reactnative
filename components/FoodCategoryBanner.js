import React from "react";
import { View,Image, StyleSheet, TouchableOpacity } from "react-native";

export default function FoodCategoryBanner({ scr,onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={scr}/>
                </View>
            
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container:{
        elevation: 15,
    },
    image: {
        height: 90,
        width: 190,
        borderRadius: 20,
        marginTop: 5,
        marginHorizontal: 7,
    }
})