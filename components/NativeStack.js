import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryFoodScreen from "../screens/CategoryFoodScreen";
import ListFoodScreen from "../screens/ListFoodScreen";
import CURDFood from "./CRUDFood";
import DetailFood from "./DetailFood"
import { TouchableOpacity, Text } from "react-native";


const FoodStack = createNativeStackNavigator();
function FoodStackScreen({navigation}){
    return(
        <FoodStack.Navigator>
            <FoodStack.Screen name="Category Food List" component={CategoryFoodScreen}/>
            <FoodStack.Screen name="Food List" options={
                {
                    headerRight: ()=>(
                        <TouchableOpacity onPress={()=>navigation.navigate('CRUD Food')}>
                            <Text>CRUD</Text>
                        </TouchableOpacity>
                    )                       
                }
            } component={ListFoodScreen}></FoodStack.Screen>
            <FoodStack.Screen name="CRUD Food" component={CURDFood}></FoodStack.Screen>
            <FoodStack.Screen name="Detail Food" component={DetailFood}></FoodStack.Screen>
        </FoodStack.Navigator>
    )
}
export {FoodStackScreen}