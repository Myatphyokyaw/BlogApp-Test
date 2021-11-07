import React from "react";
import {View, StyleSheet, Animated} from "react-native";
import {COLORS, SIZES} from "../../Constants/theme";

const SquareComponent = props => {

    const YOLO = Animated.modulo(
        Animated.divide(
            Animated.modulo(props.scrollX, SIZES.width),
            new Animated.Value(SIZES.width)
        ),
        1
    )
    const rotate = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: ['-50deg', '0deg', '-50deg']
    })

    return (
        <Animated.View style={[styles.square, {
            transform: [{
                rotate,
            }]
        }]}>

        </Animated.View>
    )

}

const styles = StyleSheet.create({
    square: {
        backgroundColor: COLORS.white,
        position: "absolute",
        width: SIZES.height,
        height: SIZES.height,
        borderRadius: SIZES.radius * 15,
        top: -SIZES.height * 0.6,
        left: -SIZES.height * 0.2,

    }
})


export default SquareComponent
