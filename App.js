import React from "react";
import {StatusBar, StyleSheet, View} from "react-native";
import StartScreen from "./Screens/StartScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import OTPVerifyScreen from "./Screens/OTPVerifyScreen";
import HomeContainerScreen from "./Screens/HomeContainerScreen";
import ProductDetailScreen from "./Screens/ProductDetailScreen";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {CartReducer} from "./store/Reducers/CartReducer";
import {ItemCountReducer} from "./store/Reducers/ItemCountReducer";
import CheckOutScreen from "./Screens/CheckOutScreen";
import {AddWishReducer} from "./store/Reducers/AddWishReducer";

const Stack = createNativeStackNavigator()
const RootReducer = combineReducers({
    cartReducer: CartReducer,
    itemCountReducer: ItemCountReducer,
    addWishReducer : AddWishReducer
});
const store = createStore(RootReducer);

const App = props => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="white" barStyle="dark-content"/>
            <Provider store={store}>
                <Stack.Navigator initialRouteName="StartScreen" screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="StartScreen" component={StartScreen}/>
                    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                    <Stack.Screen name="OTPVerifyScreen" component={OTPVerifyScreen}/>
                    <Stack.Screen name="HomeContainerScreen" component={HomeContainerScreen}/>
                    <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen}/>
                    <Stack.Screen name="CheckOutScreen" component={CheckOutScreen}/>
                </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default App
