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
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";

const Tab = createMaterialBottomTabNavigator()
const HomeContainerScreen = props => {
    const count = useSelector((state) => state.cartReducer)
    let cart = count.filter((el) => {
        return el.wishList === false
    })
    let wish = count.filter((el) => {
        return el.wishList === true
    })
    return (
        <Tab.Navigator
            barStyle={{backgroundColor: COLORS.white,height:60}}
            labeled={false}
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,

            }}>
            <Tab.Screen options={{

                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.btnContainer}>
                            <Ionicons name={focused ? "ios-home" : "ios-home-outline"} size={22}
                                      color={focused ? COLORS.primary : COLORS.black}/>
                            <Text style={[styles.btnText, {color: focused ? COLORS.primary : COLORS.black}]}>Home</Text>
                        </View>
                    )
                }
            }} name="Home" component={Home}/>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.btnContainer}>
                            <View style={[styles.cartBadgeContainer, {display: cart.length === 0 ? "none" : "flex"}]}>
                                <View style={styles.cartBadge}>
                                    <Text style={{color: COLORS.white, fontSize: 10}}>{cart.length}</Text>
                                </View>
                            </View>

                            <Ionicons name={focused ? "ios-cart" : "ios-cart-outline"} size={22}
                                      color={focused ? COLORS.primary : COLORS.black}/>
                            <Text style={[styles.btnText, {color: focused ? COLORS.primary : COLORS.black}]}>Cart</Text>
                        </View>
                    )
                }
            }} name="Cart" component={Cart}/>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.btnContainer}>
                            <View style={[styles.wishBadgeContainer,{display: wish.length === 0 ? "none" : "flex"}]}>
                                <View style={styles.wishBadge}>
                                    <Text style={{color: COLORS.white, fontSize: 10}}>{wish.length}</Text>
                                </View>
                            </View>
                            <Ionicons name={focused ? "heart" : "heart-outline"} size={22}
                                      color={focused ? COLORS.primary : COLORS.black}/>
                            <Text
                                style={[styles.btnText, {color: focused ? COLORS.primary : COLORS.black}]}>WishList</Text>
                        </View>
                    )
                }
            }} name="WishList" component={WishList}/>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return (
                        <View style={styles.btnContainer}>
                            <Ionicons name={focused ? "person" : "person-outline"} size={22}
                                      color={focused ? COLORS.primary : COLORS.black}/>
                            <Text
                                style={[styles.btnText, {color: focused ? COLORS.primary : COLORS.black}]}>Account</Text>
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
        justifyContent: "center",
    },
    btnText: {
        fontSize: 10,
        width: '100%'
    },
    cartBadge: {
        width: 16,
        height: 16,
        backgroundColor: 'red',
        borderRadius: SIZES.roundRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeContainer: {
        zIndex: 12,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.roundRadius,
        position: 'absolute',
        top: -15,
        right: '-35%',
        backgroundColor: COLORS.white
    },
    wishBadge: {
        width: 16,
        height: 16,
        backgroundColor: 'red',
        borderRadius: SIZES.roundRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wishBadgeContainer: {
        zIndex: 12,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.roundRadius,
        position: 'absolute',
        top: -15,
        right: '-10%',
        backgroundColor: COLORS.white
    }

})

export default HomeContainerScreen
