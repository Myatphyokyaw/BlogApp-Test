import React from "react";
import LottieView from "lottie-react-native";
import {StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native"
import {COLORS, FONTS, SIZES} from "../../Constants/theme";

const StartViewComponent = props => {
    return (
        <View style={styles.container}>
            <View style={styles.firstSection}>
                <LottieView style={styles.lottie} source={props.data.image} autoPlay loop/>
            </View>
            <View style={styles.secondSection}>
                <Text style={styles.titleText}>{props.data.title}</Text>
                <Text style={styles.desText}>{props.data.description}</Text>
                <View style={styles.btnContainer}>
                    <TouchableNativeFeedback onPress={() => props.navigation.navigate("LoginScreen")}>
                        <View style={[styles.startBtn, {display: props.data.showBtn ? "flex" : "none"}]}>
                            <Text style={{color: COLORS.white}}>Get Started</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: SIZES.width,
        alignItems: "center"
    },
    lottie: {
        height: SIZES.height / 4
    },
    firstSection: {
        flex: 0.6,
        width: SIZES.width,
        justifyContent: "center",
        alignItems: "center"
    },
    secondSection: {
        flex: 0.4,
        padding: SIZES.padding * 2,
    },
    titleText: {
        ...FONTS.h2,
        color: COLORS.white,
        marginBottom: SIZES.padding,
        textAlign: "center"
    },
    desText: {
        textAlign: "center",
        ...FONTS.body3,
        color: COLORS.white
    },
    startBtn: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding * 1.2,
        marginBottom: SIZES.padding * 2

    },
    btnContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default StartViewComponent
