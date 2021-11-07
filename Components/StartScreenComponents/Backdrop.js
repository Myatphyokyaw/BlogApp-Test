import React from "react";
import {View, StyleSheet, Animated} from "react-native";
import {COLORS, SIZES} from "../../Constants/theme";

const Backdrop = props => {
    const bgColor = ['#28c7fa', '#2f89fc', '#fc5c9c', '#30e3ca']
    const backgroundColor = props.scrollX.interpolate({
        inputRange: bgColor.map((_, i) => i * SIZES.width * 1.5),
        outputRange: bgColor.map((bg) => bg)
    })
    return (
        <Animated.View style={[styles.bg, {backgroundColor}]}>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    bg: {
        ...StyleSheet.absoluteFillObject,

    }
})

export default Backdrop
