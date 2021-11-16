import React, {useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";

const DetailHeaderBarComponent = props => {
    const [click, setClick] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={30} color={COLORS.primary}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Product</Text>
                <TouchableOpacity onPress={() => {
                    setClick(!click)
                }}>
                    <FontAwesome name={click ? "heart" : "heart-o"} color={click ? 'red' : COLORS.primary} size={23}/>
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
