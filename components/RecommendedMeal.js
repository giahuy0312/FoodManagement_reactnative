import React from "react";
import { View,Image, StyleSheet, TouchableOpacity } from "react-native";

export default function RecommendedmMeal({ scr }) {
    return (
        <TouchableOpacity>
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
        height: 200,
        width: 220,
        borderRadius: 20,
        marginTop: 20,
        marginHorizontal: 10,
    }
})