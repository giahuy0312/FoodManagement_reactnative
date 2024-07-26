
import React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

export default function FoodInCart({item,remove}) {
    const [qty, setQty] = useState(1);
    const deletefood = async (id) => {
        
        try {
            const response = await axios.delete(`${uri}/detelecartitem`, {
                params: {
                    id_food: id
                }
            }).then(response => {
                alert('da xoa');
                
            })
        }
        catch (error) {
            alert(error);
            
        }
    }
    
    return (
        <View style={styles.container}>
            <Image style={styles.container_content_left} source={{uri:item.image}}></Image>
            <View style={styles.container_content_right}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.text}>{item.price}</Text>
                <Text style={styles.text}>{item.numberoffood}</Text>
                <View style={styles.interact_bar}>
                    <TouchableOpacity onPress={()=>deletefood(item.id_food)}>
                        <Image style={styles.close_icon} source={require('../assets/icons/close.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 110,
        alignItems: 'center',
        marginLeft: 50

    },
    container_content_left:{
        height: 100,
        width: 100,
        borderRadius: 20

    },
    container_content_right:{
        flexDirection: 'column',
    },
    interact_bar:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    minus_icon:{
        height: 20,
        width: 20,
        backgroundColor: 'grey',
        borderRadius: 40,
        marginLeft: 15
    },
    plus_icon:{
        marginLeft: 10,
        height: 20,
        width: 20,
        marginRight: 15,
        backgroundColor: 'green',
        borderRadius: 40
    },
    close_icon:{
        height: 20,
        width: 20,
        backgroundColor: 'red',
        borderRadius: 40,
        marginLeft: 50
    },
    text:{
        fontSize: 15,
        fontWeight: 'normal',
        marginLeft: 10
    }
})