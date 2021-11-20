import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import LottieView from "lottie-react-native";
import lottie from "../Constants/lottie";
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import {useSelector} from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

const WishList = props => {
    const cartProduct = useSelector((state) => state.cartReducer)

    let x = cartProduct.filter((el) => {
        return el.wishList === true
    })

    console.log(x.image)
    return (
        x.length === 0 ? (
                <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.white}}>
                    <LottieView style={{height: '50%', justifyContent: 'center', alignItems: 'center'}}
                                source={lottie.emptyCart} autoPlay loop/>
                    <Text style={[FONTS.h3, {color: COLORS.black}]}>Empty WishList</Text>
                </View>
            ) :
            (
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            <Ionicons name="layers-outline" size={20}/> {x.length} Items in WishList
                        </Text>
                    </View>
                    <View style={styles.listRootContainer}>
                        <FlatList data={x} renderItem={({item, index}) => {
                            return (
                                <View style={styles.listContainer}>
                                    <Image style={styles.productImg} source={{uri: item.productImage}}/>
                                    <View style={styles.desContainer}>
                                        <Text style={styles.category}>{item.category}</Text>
                                        <Text style={styles.title}>{item.title}</Text>
                                    </View>
                                    <View style={{justifyContent:"space-between"}}>
                                        <TouchableOpacity style={styles.deleteButton}>
                                            <MaterialCommunityIcons size={20} color="red" name="delete-outline"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.shopButton}>
                                            <Ionicons size={20} color={COLORS.primary} name="cart-outline"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }}/>
                    </View>
                </View>
            )
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerContainer: {
        width: '100%',
        height: '7%',
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.secondary,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        ...FONTS.h3,
        color: COLORS.primary
    },
    listContainer: {
        borderRadius: SIZES.radius,
        padding: SIZES.padding,
        marginVertical: SIZES.padding - 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
        borderBottomWidth: 0.2,
        borderBottomColor: COLORS.primary,
    },
    productImg: {
        width: 70,
        height: 70,
        resizeMode: "contain"
    },
    listRootContainer: {
        padding: SIZES.padding,
        flex: 1,
    },
    category: {
        ...FONTS.h4,
        color:COLORS.black

    },
    desContainer:{
        marginLeft:SIZES.padding - 5,
        width:'65%',
    },
    title:{
        width:'100%',
        ...FONTS.body5
    },
    shopButton: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        paddingHorizontal: SIZES.padding * 1.5,
        borderColor: COLORS.primary,
        flexDirection: "row",
        marginEnd: SIZES.padding,
        borderRadius: SIZES.roundRadius,
        paddingVertical: SIZES.padding - 5,
        marginBottom:SIZES.padding,
    },
    deleteButton:{
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        paddingHorizontal: SIZES.padding * 1.5,
        borderColor: 'red',
        flexDirection: "row",
        marginEnd: SIZES.padding,
        borderRadius: SIZES.roundRadius,
        paddingVertical: SIZES.padding - 5,
        marginBottom:SIZES.padding
    }
})

export default WishList
