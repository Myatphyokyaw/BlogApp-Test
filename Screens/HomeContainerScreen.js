import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from "./Home";
import Cart from "./Cart";
import Account from "./Account";
import {Text, View, StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import {useSelector} from "react-redux";
import WishList from "./WishListScreen";

const Tab = createMaterialBottomTabNavigator()
const HomeContainerScreen = props => {
    const count = useSelector((state) => state.cartReducer)

    return (
        <Tab.Navigator
            barStyle={{backgroundColor:COLORS.white}}
            labeled={false}
            screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,

        }}>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.btnContainer}>
                            <Ionicons name={focused ? "ios-home" : "ios-home-outline"} size={20}
                                      color={focused ? COLORS.primary : COLORS.black}/>
                            {/*<Text style={[styles.btnText, {color: focused ? COLORS.primary : COLORS.black}]}>Home</Text>*/}
                        </View>
                    )
                }
            }} name="Home" component={Home}/>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.btnContainer}>
                            <View style={[styles.badge, {display: count.length === 0 ? "none" : "flex"}]}>
                                <Text style={{color: COLORS.white, fontSize: 10}}>{count.length}</Text>
                            </View>
                            <Ionicons name={focused ? "ios-cart" : "ios-cart-outline"} size={25}
                                      color={focused ? COLORS.primary : COLORS.black}/>
                        </View>
                    )
                }
            }} name="Cart" component={Cart}/>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.btnContainer}>
                            <Ionicons name={focused ? "server-sharp" : "server-outline"} size={20}
                                      color={focused ? COLORS.primary : COLORS.black}/>
                            {/*<Text style={[styles.btnText, {color: focused ? COLORS.primary : COLORS.black}]}>Account</Text>*/}
                        </View>
                    )
                }
            }} name="WishList" component={WishList}/>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.btnContainer}>
                            <Ionicons name={focused ? "ios-people-sharp" : "ios-people-outline"} size={20}
                                      color={focused ? COLORS.primary : COLORS.black}/>
                            {/*<Text style={[styles.btnText, {color: focused ? COLORS.primary : COLORS.black}]}>Account</Text>*/}
                        </View>
                    )
                }
            }} name="Account" component={Account}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: "center",
        marginTop: '10%'
    },
    btnText: {
        fontSize: 10
    },
    badge: {
        width: 17,
        height: 17,
        backgroundColor: 'red',
        borderRadius: SIZES.roundRadius,
        position: 'absolute',
        top: -5,
        right: -5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    }

})

export default HomeContainerScreen
