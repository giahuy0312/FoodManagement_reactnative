import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { FoodStackScreen } from "./NativeStack";
import { CartStackScreen } from "./CartStack";
import { AuthStackScreen } from "./AuthStack";

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{

            tabBarShowLabel: false,
            tabBarStyle: {
                elevation: 10,
                backgroundColor: 'white',
                height: 60,
                ...styles.shadow
            },

        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={
                {
                    headerShown: "false",
                    tabBarIcon: ({ focused }) => !focused ? (<Image source={require('../assets/icons/inactivehome.png')} style={{ width: 25, height: 25 }}></Image>) : (<Image source={require('../assets/icons/activehome.png')} style={{ width: 25, height: 25 }}></Image>)
                }
            }></Tab.Screen>
            <Tab.Screen name="Category Food" component={FoodStackScreen} options={{
                tabBarIcon: ({ focused }) => !focused ? (<Image source={require('../assets/icons/inactivelist.png')} style={{ width: 25, height: 25 }}></Image>) : (<Image source={require('../assets/icons/activelist.png')} style={{ width: 25, height: 25 }}></Image>)
            }
            }></Tab.Screen>
            <Tab.Screen name="Search" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => !focused ? (<Image source={require('../assets/icons/inactivesearch.png')} style={{ width: 35, height: 35, position: 'absolute', bottom: 22 }}></Image>) : (<Image source={require('../assets/icons/activesearch.png')} style={{ width: 35, height: 35, position: 'absolute', bottom: 22 }}></Image>)
            }
            }></Tab.Screen>
            <Tab.Screen name="Cart" component={CartStackScreen} options={{
                tabBarIcon: ({ focused }) => !focused ? (<Image source={require('../assets/icons/inactivecart.png')} style={{ width: 25, height: 25 }}></Image>) : (<Image source={require('../assets/icons/activecart.png')} style={{ width: 25, height: 25 }}></Image>)
            }
            }></Tab.Screen>
            <Tab.Screen name="Account" component={AuthStackScreen} options={{
                tabBarIcon: ({ focused }) => !focused ? (<Image source={require('../assets/icons/inactiveuser.png')} style={{ width: 25, height: 25 }}></Image>) : (<Image source={require('../assets/icons/activeuser.png')} style={{ width: 25, height: 25 }}></Image>)
            }
            }></Tab.Screen>
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    shadow: {
        elevation: 10,
    }
})
export default Tabs