import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {COLORS, FONTS, SIZES} from "../Constants/theme";

const HeaderComponent = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={.7} onPress={()=>props.navigation.goBack()}>
                <Ionicons color={COLORS.black} name="arrow-back-outline" size={30}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>OTP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    headerText: {
        ...FONTS.h3,
        color: COLORS.black,
        marginEnd:SIZES.padding * 1.2
    }
})

export default HeaderComponent
