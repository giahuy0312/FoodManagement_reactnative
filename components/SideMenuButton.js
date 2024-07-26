import React from "react";
import { StyleSheet,TouchableOpacity, Image } from "react-native";

export default function SideMenuButton(){
    return(
        <TouchableOpacity >
            <Image  style={styles.button} source={require('../assets/icons/menu.png')}></Image>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        marginLeft: 'auto',
        height: 30,
        width: 30,
    }
})