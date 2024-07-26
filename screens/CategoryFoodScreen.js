import React from "react";
import { FlatList } from "react-native";
import CategoryFood from "../components/CatergoryFood";

export default function CategoryFoodScreen({navigation}) {
    //var foodCategories = [require('../assets/images/salad1.jpg'), require('../assets/images/soup.jpg'), require('../assets/images/seafood.jpg'), require('../assets/images/dessert.jpg'), require('../assets/images/steak.jpg'), require('../assets/images/pizza.jpg'), require('../assets/images/salad.jpg'), require('../assets/images/burger.jpg')]
    var foodCategories = [
        {
            id: 1,
            name: "Salad",
            image: require('../assets/images/salad1.jpg'),
        },
        {
            id: 2,
            name: "Soup",
            image: require('../assets/images/soup.jpg')
        },
        {
            id: 3,
            name: "Seafood",
            image: require('../assets/images/seafood.jpg')
        },
        {
            id: 4,
            name: "Dessert",
            image: require('../assets/images/dessert.jpg')
        },
        {
            id: 5,
            name: "Steak",
            image: require('../assets/images/steak.jpg')
        },
        {
            id: 6,
            name: "Pizza",
            image: require('../assets/images/pizza.jpg')
        },       
        {
            id: 7,
            name: "Burger",
            image: require('../assets/images/burger.jpg')
        }
    ];
    return (
            <FlatList
                numColumns={2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={foodCategories}
                renderItem={({ item, index }) =>
                    (<CategoryFood item={item} index={index} onPress={()=>navigation.navigate({name:"Food List",params:{id_category: item.id}})}></CategoryFood>)
                }
            />       
    )
}
