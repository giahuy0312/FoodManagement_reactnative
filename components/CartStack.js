import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryFoodScreen from "../screens/CategoryFoodScreen";
import CartScreen from "../screens/CartScreen";

const CartStack = createNativeStackNavigator();
function CartStackScreen(){
    return(
        <CartStack.Navigator>
            <CartStack.Screen name="CartScreen" component={CartScreen}></CartStack.Screen>
        </CartStack.Navigator>
    )
}
export {CartStackScreen}