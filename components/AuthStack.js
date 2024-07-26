import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Signin';
import ForgotPassScreen from '../screens/ForgotPass';



const AuthStack = createNativeStackNavigator();
function AuthStackScreen(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginScreen}/>
            <AuthStack.Screen name="Sign up" component={SignupScreen}></AuthStack.Screen>
            <AuthStack.Screen name="Forgot password" component={ForgotPassScreen}></AuthStack.Screen>
        </AuthStack.Navigator>
    )
}
export {AuthStackScreen}