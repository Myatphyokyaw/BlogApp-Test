import React from "react";
import {View, StyleSheet, Text, Image, ScrollView, TouchableNativeFeedback} from "react-native";
import DetailHeaderBarComponent from "../Components/ProductDetailScreenComponents/DetailHeaderBarComponent";
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import {useDispatch} from "react-redux";
// import {addition} from "../store/actionType";

const ProductDetailScreen = props => {
    const data = props.route.params.data
    // const dispatch = useDispatch()
    // const run = () => {
    //     props.navigation.navigate('Cart');
    //     dispatch(addition())
    // }
    return (
        <View style={styles.container}>
            <DetailHeaderBarComponent navigation={props.navigation}/>
            <View style={styles.imgContainer}>
                <Image style={styles.productImg} source={{uri: data.image}}/>
            </View>
            <View style={styles.desContainer}>
                <Text style={styles.titleText}>{data.title}</Text>
                <View style={styles.rateContainer}>
                    {[1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <AntDesign key={index.toString()} name="star" color='#ffc108' size={20}/>
                        )
                    })}
                    <Text style={styles.rateText}>{"( " + data.rating.count + " Reviews )"}</Text>
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.price}>${data.price}</Text>
                        <Text style={styles.discount}>${data.price + 30}</Text>
                    </View>
                    <Text style={styles.stockText}>Available in stock</Text>
                </View>
                <View style={styles.aboutContainer}>
                    <Text style={[FONTS.h3, {color: COLORS.black, fontWeight: "bold"}]}>About</Text>
                    <ScrollView>
                        <Text style={styles.aboutText}>{data.description}</Text>
                    </ScrollView>
                    <TouchableNativeFeedback onPress={() => run()}>
                        <View style={styles.addBtn}>
                            <Text style={[FONTS.h3, {color: COLORS.white}]}>Add to cart</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    productImg: {
        width: "90%",
        height: "95%",
        resizeMode: "contain"
    },
    imgContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 0.5,
    },
    desContainer: {
        paddingHorizontal: SIZES.padding * 2,
        paddingTop: SIZES.padding * 1.5,
        flex: 0.5,
    },
    titleText: {
        color: COLORS.black,
        ...FONTS.h3,
        fontWeight: "bold"
    },
    rateContainer: {
        flexDirection: "row",
        paddingVertical: SIZES.padding
    },
    rateText: {
        ...FONTS.body3,
        color: COLORS.black,
        marginLeft: SIZES.padding
    },
    price: {
        ...FONTS.h2,
        fontWeight: "bold",
        color: COLORS.black
    },
    secondContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    discount: {
        textDecorationLine: "line-through",
        marginLeft: SIZES.padding
    },
    stockText: {
        ...FONTS.h4,
        color: COLORS.black
    },
    aboutContainer: {
        paddingTop: SIZES.padding * 2,
        flex: 1,

    },
    aboutText: {
        ...FONTS.body4,
        marginTop: SIZES.padding,

    },
    addBtn: {
        backgroundColor: COLORS.primary,
        height: 50,
        borderRadius: SIZES.roundRadius,
        justifyContent: "center",
        alignItems: "center",
        marginTop: SIZES.padding * 2
    },
})

export default ProductDetailScreen
