import React, {useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";
import {useSelector, useDispatch} from "react-redux";
import {IconButton} from "react-native-paper";

const DetailHeaderBarComponent = props => {
    const dispatch = useDispatch()
    const data = props.data
    const [click, setClick] = useState(false)
    const wishList = useSelector((state) => state.cartReducer)
    const addWishList = (product) => {
        if (wishList.findIndex(el => el.id === data.id) !== -1) {
            alert("this product is already purchase")
        } else {
            dispatch({
                type: "ADDTOPRODUCT",
                payload: {
                    id: data.id,
                    title: data.title,
                    category: data.category,
                    productImage: data.image,
                    price: data.price,
                    qty: 1,
                    wishList: true,
                },
            })
        }
    }
    if (wishList.length !== 0 && wishList.findIndex(el => el.id === data.id) !== -1) {
        var condition = wishList[wishList.findIndex(el => el.id === data.id)].wishList
    }

    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <IconButton
                    icon="arrow-left"
                    size={30}
                    color={COLORS.primary}
                    style={{margin:0}}
                    onPress={() => props.navigation.goBack()}
                />
                <Text style={styles.headerText}>Product</Text>
                <TouchableOpacity onPress={() => {
                    addWishList()
                }}>
                    <FontAwesome name={condition ? "heart" : "heart-o"} color={condition ? 'red' : COLORS.primary}
                                 size={23}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    bar: {
        padding: SIZES.padding,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding * 2
    },
    headerText: {
        ...FONTS.h3,
        color: COLORS.black
    }
})

export default DetailHeaderBarComponent
