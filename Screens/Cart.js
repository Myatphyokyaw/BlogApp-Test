import React, {useEffect, useState} from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableNativeFeedback, TouchableOpacity, LayoutAnimation, TouchableHighlight,
} from "react-native";
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import {useDispatch, useSelector} from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LottieView from "lottie-react-native";
import lottie from "../Constants/lottie";
import {SwipeListView} from 'react-native-swipe-list-view';

const Cart = props => {
    const cartProduct = useSelector((state) => state.cartReducer)
    const [condition, setCondition] = useState(false)
    let total = []
    const [totalSumPrice, setTotalSumPrice] = useState(0)
    const dispatch = useDispatch()
    const deleteItem = (id) => {
        dispatch({type: "DELETEITEM", id: id})
    }
    const increase = (id) => {
        dispatch({
            type: "INCREASEQTY",
            id: id
        })
    }
    useEffect(() => {
        if (cartProduct.length !== 0) {
            totalPrice()
        }

    })


    const decrease = (id) => {
        if (cartProduct[cartProduct.findIndex((el) => el.id === id)].qty > 1) {
            dispatch({
                type: "DECREASEQTY",
                id: id
            })
        }

    }
    const totalPrice = (id) => {
        cartProduct.map((el) => {
            var cost = el.price * el.qty
            total.push(cost)
        })
        let price = total.reduce((x, y) => {
            return x + y
        }).toFixed(2)
        setTotalSumPrice(price)
    }
    return (
        cartProduct.length !== 0 ? (
                <View style={styles.container}>
                    <View style={{flex: 1}}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>Shopping Cart</Text>
                        </View>
                        <View style={styles.itemContainer}>
                            <SwipeListView
                                stopLeftSwipe={10.2}
                                data={cartProduct}
                                renderItem={({item, index}) =>
                                    <View style={styles.detailCardContainer}>
                                        <Image style={styles.productImg}
                                               source={{uri: item.productImage}}/>
                                        <View style={styles.subContainer}>
                                            <View style={{
                                                width: '68%',
                                                flexDirection: "row",
                                                justifyContent: "space-between",
                                                alignItems: "center"
                                            }}>
                                                <Text style={[FONTS.body5, {
                                                    color: COLORS.black, fontWeight: "bold", width: '100%'
                                                }]}>{item.category}</Text>
                                                <TouchableNativeFeedback onPress={() => deleteItem(item.id)}>
                                                    <View style={styles.smallDelBtn}>
                                                        <MaterialCommunityIcons size={15} color={COLORS.white}
                                                                                name="delete"/>
                                                    </View>
                                                </TouchableNativeFeedback>

                                            </View>
                                            <View style={{
                                                flexDirection: "row",
                                                alignItems: "center",
                                                marginTop: SIZES.padding,
                                                justifyContent: "space-between",
                                                width: '75%'
                                            }}>
                                                <View style={{
                                                    alignItems: "center",
                                                    flexDirection: "row",
                                                }}>
                                                    <TouchableNativeFeedback onPress={() => {
                                                        decrease(item.id), totalPrice(item.id)
                                                    }}>
                                                        <View style={styles.qtyBtnContainer}>
                                                            <Text style={styles.qtyBtnText}>-</Text>
                                                        </View>
                                                    </TouchableNativeFeedback>
                                                    <View style={{width: 30, alignItems: "center"}}>
                                                        <Text style={{color: COLORS.black}}>{item.qty}</Text>
                                                    </View>
                                                    <TouchableNativeFeedback onPress={() => {
                                                        increase(item.id), totalPrice(item.id)
                                                    }}>
                                                        <View style={styles.qtyBtnContainer}>
                                                            <Text style={styles.qtyBtnText}>+</Text>
                                                        </View>
                                                    </TouchableNativeFeedback>
                                                </View>
                                                <Text>${item.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                }
                                renderHiddenItem={(data, rowMap) => (
                                    <View style={styles.rowBack}>
                                        <TouchableNativeFeedback onPress={() => deleteItem(data.item.id)}>
                                            <View style={styles.deleteBtn}>
                                                <MaterialCommunityIcons size={30} color={COLORS.white}
                                                                        name="delete"/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>

                                )}

                                leftOpenValue={75}
                                rightOpenValue={-75}
                            />
                        </View>
                    </View>
                    <View style={styles.checkOutBox}>
                        <View style={styles.subTotalContainer}>
                            <Text style={[FONTS.body3, {color: COLORS.black}]}>Sub Total</Text>
                            <Text style={[FONTS.body3, {color: COLORS.black}]}>$ {totalSumPrice}</Text>
                        </View>
                        <View style={styles.subTotalContainer}>
                            <Text style={[FONTS.body3, {color: COLORS.black}]}>Shipping</Text>
                            <Text style={[FONTS.body3, {color: COLORS.black}]}>$ 10.00</Text>
                        </View>
                        <View style={styles.subTotalContainer}>
                            <Text style={[FONTS.body3, {color: COLORS.black}]}>Total</Text>
                            <Text style={[FONTS.body3, {color: COLORS.black}]}>$ {(totalSumPrice + 10.00)}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('CheckOutScreen')} activeOpacity={.7} style={styles.checkOutButton}>
                            <View>
                                <Text style={[FONTS.h4, {color: COLORS.white}]}>Checkout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            ) :
            (<View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: COLORS.white}}>
                <LottieView style={{height: '60%', justifyContent: 'center', alignItems: 'center'}}
                            source={lottie.emptyCart} autoPlay loop/>
            </View>)

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "space-between"
    },
    headerContainer: {
        height: '9%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.white
    },
    headerText: {
        ...FONTS.h2,
        color: COLORS.primary
    },
    itemContainer: {
        paddingHorizontal: SIZES.padding * 1.5,
        paddingTop: SIZES.padding * 1.5,
        paddingBottom: SIZES.padding * 1.5,
        flex: 1,
    },
    detailCardContainer: {
        borderRadius: SIZES.radius,
        padding: SIZES.padding,
        marginVertical: SIZES.padding - 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
        borderWidth: 0.2,
        borderColor: COLORS.primary

    },
    productImg: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    subContainer: {
        marginLeft: SIZES.padding * 1.5,
        width: '100%'
    },
    qtyBtnContainer: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius,
        borderColor: COLORS.lightGray2,
        borderWidth: 1
    },
    qtyBtnText: {
        color: COLORS.black,
        ...FONTS.h2,
    },
    deleteBtn: {
        flexDirection: "row",
        backgroundColor: 'red',
        width: 85,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.padding - 7,
        borderRadius: SIZES.radius,
        height: 84
    },
    checkOutBox: {
        height: '27%',
        width: '100%',
        backgroundColor: COLORS.white,
        borderTopRightRadius: SIZES.roundRadius * 1.2,
        borderTopLeftRadius: SIZES.roundRadius * 1.2,
        paddingHorizontal: SIZES.padding * 3,
        paddingVertical: SIZES.padding * 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 30,
    },
    subTotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: SIZES.padding
    },
    checkOutButton: {
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        height: '25%',
        borderRadius: SIZES.roundRadius,
        marginTop: SIZES.padding * 1.2
    },
    rowBack: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    smallDelBtn: {
        backgroundColor: 'red',
        width: 25,
        height: 25,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.radius
    },
    smallDelBtnText: {
        color: COLORS.white
    }
})
export default Cart
