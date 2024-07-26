import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function Food({item,navigation , onPress}){
    return(
        <TouchableOpacity onPress={()=>navigation.navigate('Detail Food',{food_id:item.id_food})}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:item.image}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{Intl.NumberFormat('vi-VN',{ style: 'currency', currency: 'VND' }).format(item.price)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        },
    image: {
        width: 80,
        height: 80,
        margin: 10,
        marginHorizontal: 10,
        borderRadius: 20
    },
    textContainer: {
        justifyContent: 'center'
    },
    price: {
        textAlignVertical: 'center',
        color: 'red',
        fontSize: 16
    },
    name: {
        textAlignVertical: 'center',
        color: 'blue',
        fontSize: 20
    }
})