import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, Image, TouchableNativeFeedback, ScrollView} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";
import axios from "axios";

const HotSalesProductComponent = props => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=3')
            .then(function (response) {
                console.log(response.data);
                setData(response.data)
                data.reverse()
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.hotSaleText}>Hot Sales</Text>
                <Text style={styles.seeMoreText}>View More ></Text>
            </View>
            <View style={styles.cardContainer}>
                {data.map((item, index) => {
                    return (
                        <TouchableNativeFeedback key={index.toString()}>
                            <View style={styles.card}>
                                <Image style={styles.image}
                                       source={{uri: item.image}}/>
                                <Text style={styles.categoryText}>KeyBoard ...</Text>
                                <Text style={styles.orderText}>357106 Orders</Text>
                            </View>
                        </TouchableNativeFeedback>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.padding * 1.5,
        marginTop: SIZES.padding * 3
    },
    hotSaleText: {
        ...FONTS.h3,
        color: COLORS.black,
        fontWeight: "bold"
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardContainer: {
        marginTop: SIZES.padding * 2,
        flexDirection: "row",
        width:'100%'
    },
    card: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        paddingVertical: SIZES.padding * 2,
        width: '33.333333%',
        height: 160,
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: SIZES.padding - 5
    },
    image: {
        width: 100,
        height: 60,
        resizeMode: "contain"
    },
    categoryText: {
        ...FONTS.body4,
        fontWeight: "bold",
        color: COLORS.black,
    },
    orderText: {
        ...FONTS.body5,
        color: '#f15b09'
    }
})

export default HotSalesProductComponent
