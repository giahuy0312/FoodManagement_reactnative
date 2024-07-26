import React from "react";
import Food from "../components/Food";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View,FlatList } from "react-native";
import axios from 'axios';
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(':').shift()}:3000`;

export default function ListFood({ navigation }) {

    const route = useRoute();
    const id_category = route.params?.id_category;
    var listFood = [
        /*
        {
            name: "Chicken burger",
            price: "70000",
            image: require('../assets/images/burger.jpg')
        },
        {
            name: "Fish burger",
            price: "60000",
            image: require('../assets/images/fish_burger.jpg')
        },
        {
            name: "Grilled onion burger",
            price: "40000",
            image: require('../assets/images/onion_burger.jpg')
        },
        {
            name: "Cheese burger",
            price: "45000",
            image: require('../assets/images/cheese_burger.jpg')
        },
        {
            name: "BBQ bacon burger",
            price: "80000",
            image: require('../assets/images/bbq_burger.jpg')
        },*/
    ];
    const [data, setData] = useState([]);
    
    let getFoodById_category = async () => {
        try {
            const response = await fetch(`${uri}/category/id/food?id_category=${id_category}`);
            const json = await response.json();
            setData(json.data);
            console.log(id_category);
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
        }
    };
    useEffect(() => {
        getFoodById_category();
    }, []);
    return (
        <View>
            <FlatList data={data} renderItem={({ item }) => <Food navigation={navigation} item={item}></Food>}>
            </FlatList>
        </View>

    )
}
