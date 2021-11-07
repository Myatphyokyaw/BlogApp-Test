import React from "react";
import {StyleSheet, View} from "react-native";
import StartScreen from "./Screens/StartScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import OTPVerifyScreen from "./Screens/OTPVerifyScreen";

const Stack = createNativeStackNavigator()


const App = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StartScreen" screenOptions={{
              headerShown:false
            }}>
                <Stack.Screen name="StartScreen" component={StartScreen}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="OTPVerifyScreen" component={OTPVerifyScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default App
