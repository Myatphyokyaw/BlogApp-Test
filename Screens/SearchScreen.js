import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView, TouchableNativeFeedback} from "react-native";
import {COLORS, SIZES} from "../Constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {IconButton} from "react-native-paper";
import axios from "axios";
import LottieView from "lottie-react-native";
import lottie from "../Constants/lottie";

const SearchScreen = props => {

    const [allProduct, setAllProduct] = useState([])
    const [userFilter, setUserFilter] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(async function (response) {
                setAllProduct(response.data)
                setUserFilter(allProduct)

            })
            .catch(function (error) {
                alert("NetWork Error")
            })
    }, [])

    const searchProduct = (text) => {
        setUserFilter(allProduct.filter((el) => {
            return el.title.includes(text)
        }))

    }

    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <IconButton
                    icon="arrow-left"
                    color={COLORS.secondary}
                    size={25}
                    onPress={() => props.navigation.goBack()}
                />
                <TouchableOpacity style={styles.searchBar} onPress={() => props.navigation.navigate('SearchScreen')}
                                  activeOpacity={.5}>
                    <Ionicons size={20} name="ios-search-outline"/>
                    <TextInput autoFocus onChangeText={(text) => searchProduct(text)}
                               style={{marginLeft: 5, height: 40}}
                               placeholder="Search Product"/>
                </TouchableOpacity>
            </View>
            {userFilter.length !== 0 ? (
                    <ScrollView>
                        {userFilter.map((el, index) => {
                            return (
                                <TouchableNativeFeedback
                                    onPress={() => props.navigation.navigate("ProductDetailScreen", {data: el})}
                                    key={index.toString()}>
                                    <View style={styles.listItemContainer}>
                                        <Text>{el.title}</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            )
                        })}
                    </ScrollView>
                ) :
                (
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: SIZES.padding * 2
                    }}>
                        <LottieView autoPlay loop style={styles.lottieImg} source={lottie.emptyCart}/>
                        <Text>Search Product Not Found</Text>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    bar: {
        height: 60,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: COLORS.secondary,
        borderBottomWidth: 0.5
    },
    searchBar: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        borderRadius: SIZES.roundRadius,
        marginRight: SIZES.padding * 3,
        borderWidth: 0.5,
        borderColor: COLORS.primary,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.lightGray3
    },
    listItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
        padding: SIZES.padding * 2
    },
    lottieImg: {
        width: '90%',
        height: 200
    }

})

export default SearchScreen
