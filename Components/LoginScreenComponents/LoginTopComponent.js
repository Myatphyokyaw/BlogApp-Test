import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";

const LoginTopComponent = props => {

    return (
        <View>
            <Text style={styles.headerText}>Login Account</Text>
            <Text>Hello, welcome back to our account</Text>
        </View>
    )

}

const styles = StyleSheet.create({

    headerText: {
        ...FONTS.h2,
        color: COLORS.black,
        marginBottom: SIZES.padding,
        fontWeight:"bold"
    }

})

export default LoginTopComponent
