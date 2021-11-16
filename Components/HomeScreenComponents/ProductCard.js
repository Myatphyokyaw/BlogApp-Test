import React, {useEffect, useRef, useState} from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableNativeFeedback,
    SafeAreaView
} from "react-native";
import axios from "axios";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {useDispatch, useSelector} from "react-redux";

const ProductCard = props => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const cartProduct = useSelector((state) => state.cartReducer)
    const dispatch = useDispatch()
    const run = (product) => {
        if (cartProduct.findIndex(el => el.id === product.id) !== -1) {
            alert("ထိုပစ္စည်းသည်သင့်ဝယ်ယူထားပီးဖြစ်သည်။")
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
        <SafeAreaView>
            {loading ? (
                <View style={styles.container}>
                    <Text style={styles.headerText}>You May Like</Text>
                    <View style={styles.skeContainer}>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item style={styles.skeCard}>
                                <SkeletonPlaceholder.Item marginTop={10} marginLeft={10} borderTopLeftRadius={10}
                                                          borderTopRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item marginTop={0} marginLeft={10} borderBottomLeftRadius={10}
                                                          borderBottomRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item width={120} marginLeft={10} height={20} marginTop={5}
                                                          borderRadius={10}/>
                                <SkeletonPlaceholder.Item
                                    marginTop={6}
                                    width={80}
                                    height={20}
                                    borderRadius={10}
                                    marginLeft={10}
                                />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item style={styles.skeCard}>
                                <SkeletonPlaceholder.Item marginTop={10} marginLeft={10} borderTopLeftRadius={10}
                                                          borderTopRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item marginTop={0} marginLeft={10} borderBottomLeftRadius={10}
                                                          borderBottomRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item width={120} marginLeft={10} height={20} marginTop={5}
                                                          borderRadius={10}/>
                                <SkeletonPlaceholder.Item
                                    marginTop={6}
                                    width={80}
                                    height={20}
                                    borderRadius={10}
                                    marginLeft={10}
                                />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item style={styles.skeCard}>
                                <SkeletonPlaceholder.Item marginTop={10} marginLeft={10} borderTopLeftRadius={10}
                                                          borderTopRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item marginTop={0} marginLeft={10} borderBottomLeftRadius={10}
                                                          borderBottomRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item width={120} marginLeft={10} height={20} marginTop={5}
                                                          borderRadius={10}/>
                                <SkeletonPlaceholder.Item
                                    marginTop={6}
                                    width={80}
                                    height={20}
                                    borderRadius={10}
                                    marginLeft={10}
                                />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item style={styles.skeCard}>
                                <SkeletonPlaceholder.Item marginTop={10} marginLeft={10} borderTopLeftRadius={10}
                                                          borderTopRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item marginTop={0} marginLeft={10} borderBottomLeftRadius={10}
                                                          borderBottomRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item width={120} marginLeft={10} height={20} marginTop={5}
                                                          borderRadius={10}/>
                                <SkeletonPlaceholder.Item
                                    marginTop={6}
                                    width={80}
                                    height={20}
                                    borderRadius={10}
                                    marginLeft={10}
                                />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item style={styles.skeCard}>
                                <SkeletonPlaceholder.Item marginTop={10} marginLeft={10} borderTopLeftRadius={10}
                                                          borderTopRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item marginTop={0} marginLeft={10} borderBottomLeftRadius={10}
                                                          borderBottomRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item width={120} marginLeft={10} height={20} marginTop={5}
                                                          borderRadius={10}/>
                                <SkeletonPlaceholder.Item
                                    marginTop={6}
                                    width={80}
                                    height={20}
                                    borderRadius={10}
                                    marginLeft={10}
                                />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>
                        <SkeletonPlaceholder>
                            <SkeletonPlaceholder.Item style={styles.skeCard}>
                                <SkeletonPlaceholder.Item marginTop={10} marginLeft={10} borderTopLeftRadius={10}
                                                          borderTopRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item marginTop={0} marginLeft={10} borderBottomLeftRadius={10}
                                                          borderBottomRightRadius={10} width={170}
                                                          height={90}/>
                                <SkeletonPlaceholder.Item width={120} marginLeft={10} height={20} marginTop={5}
                                                          borderRadius={10}/>
                                <SkeletonPlaceholder.Item
                                    marginTop={6}
                                    width={80}
                                    height={20}
                                    borderRadius={10}
                                    marginLeft={10}
                                />
                            </SkeletonPlaceholder.Item>
                        </SkeletonPlaceholder>
                    </View>
                </View>

            ) : (<View style={styles.container}>
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
                                    <Text style={styles.desText}>Mens Casual Premium Slim Fit T-Shirts</Text>
                                    <View style={{
                                        flexDirection: "row",
                                        width: '100%',
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginTop: 10,
                                        paddingStart: SIZES.padding
                                    }}>
                                        <Text style={styles.priceText}>${item.price}</Text>
                                        <TouchableNativeFeedback onPress={() => run(item)}>
                                            <View style={styles.shopButton}>
                                                <Ionicons size={20} color={COLORS.white} name="ios-cart"/>
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>

                                </View>
                            </TouchableNativeFeedback>
                        )
                    })}
                </View>
            </View>)}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding
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
        borderWidth: 0.5,
        borderColor: COLORS.primary
    },
    productImage: {
        width: '80%',
        height: 120,
        resizeMode: "contain",
        zIndex: -1
    },
    headerText: {
        ...FONTS.h4,
        fontWeight: "bold",
        color: COLORS.black,
    },
    desText: {
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding
    },
    priceText: {
        ...FONTS.body3,
        fontWeight: "bold",
        color: COLORS.black,
    },
    shopButton: {
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        width: 45,
        height: 45,
        borderTopLeftRadius: SIZES.radius,
        borderBottomRightRadius: SIZES.radius,

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
