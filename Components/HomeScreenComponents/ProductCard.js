import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableNativeFeedback,
    SafeAreaView,
    TouchableOpacity, ScrollView
} from "react-native";
import axios from "axios";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {useDispatch, useSelector} from "react-redux";
import {FlatList} from "react-native-gesture-handler";
import LottieView from "lottie-react-native";
import lottie from "../../Constants/lottie";

const ProductCard = props => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const cartProduct = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    const run = (product) => {
        if (cartProduct.findIndex(el => el.id === product.id) !== -1) {
            alert("ထိုပစ္စည်းသည်သင်ဝယ်ယူထားပီးဖြစ်သည်။")
        } else {
            dispatch({
                type: "ADDTOPRODUCT",
                payload: {
                    id: product.id,
                    title: product.title,
                    category: product.category,
                    productImage: product.image,
                    price: product.price,
                    qty: 1,
                    wishList:false,
                },
                id: product.id
            })
            dispatch({
                type: "ADDTOCART"
            })
        }

    }
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(async function (response) {
                setData(response.data)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    return (
        <View style={styles.container}>
            {loading ? (
                <View>
                    <Text style={styles.headerText}>You May Like</Text>
                    <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                            <LottieView style={{width: 150, height: 150}} autoPlay={true} loop source={lottie.loading}/>
                    </View>
                </View>
            ) : (<View>
                <Text style={styles.headerText}>You May Like</Text>
                <View style={styles.productCardContainer}>
                    {data.map((item, index) => {
                        return (
                            <TouchableNativeFeedback
                                onPress={() => props.navigation.navigate('ProductDetailScreen', {data: item})}
                                key={index.toString()} activeOpacity={.5}>
                                <View style={styles.productCard}>
                                    <Image style={styles.productImage}
                                           source={{uri: item.image}}/>
                                    <View style={{
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        paddingHorizontal: SIZES.padding,
                                        width: '100%'
                                    }}>
                                        <Text style={styles.desText}>{item.category}</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: "row",
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginVertical: 10,
                                        paddingHorizontal: SIZES.padding
                                    }}>
                                        <Text style={styles.priceText}>${item.price}</Text>
                                        <TouchableOpacity style={styles.shopButton} onPress={() => run(item)}>
                                            <Ionicons size={20} color={COLORS.primary} name="cart-outline"/>
                                            <Text style={[FONTS.body5, {color: COLORS.primary}]}>Shop Now</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </TouchableNativeFeedback>
                        )
                    })}
                </View>
            </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding,
        backgroundColor: COLORS.white,
    },
    productCardContainer: {
        marginTop: SIZES.padding * 2,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    productCard: {
        backgroundColor: COLORS.white,
        width: '47%',
        borderRadius: SIZES.radius,
        alignItems: "center",
        paddingTop: SIZES.padding * 2,
        marginHorizontal: SIZES.padding - 6,
        marginBottom: SIZES.padding,
        paddingBottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    productImage: {
        width: '80%',
        height: 200,
        resizeMode: "contain",
    },
    headerText: {
        ...FONTS.h4,
        fontWeight: "bold",
        color: COLORS.black,
        marginLeft: '2%'
    },
    desText: {
        marginVertical: SIZES.padding,
    },
    priceText: {
        ...FONTS.body4,
        fontWeight: "bold",
        color: COLORS.black,
    },
    shopButton: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        paddingHorizontal: SIZES.padding - 2,
        borderColor: COLORS.primary,
        flexDirection: "row",
        marginStart: SIZES.padding,
        borderRadius: SIZES.roundRadius,
        paddingVertical: SIZES.padding - 5
    },
    skeContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        // justifyContent: "center"
    },
    skeCard: {
        width: '47%',
        borderRadius: SIZES.radius,
        alignItems: "center",
        marginBottom: SIZES.padding,
        backgroundColor: COLORS.primary
    }
})

export default ProductCard
