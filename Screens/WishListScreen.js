import React from "react";
import {Text, View} from "react-native";
import LottieView from "lottie-react-native";
import lottie from "../Constants/lottie";
import {COLORS, FONTS} from "../Constants/theme";
import {useSelector} from "react-redux";

const WishList = props => {
    const cartProduct = useSelector((state) => state.cartReducer)

    let x = cartProduct.filter((el) => {
            return el.wishList = false
        })


    console.log(x)
    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.white}}>
            <LottieView style={{height: '50%', justifyContent: 'center', alignItems: 'center'}}
                        source={lottie.emptyCart} autoPlay loop/>
            <Text style={[FONTS.h3, {color: COLORS.black}]}>Empty WishList</Text>
        </View>
    )

}
export default WishList
