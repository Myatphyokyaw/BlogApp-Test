import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import HeaderComponent from "../Components/HeaderComponent";
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import LottieView from "lottie-react-native";
import lottie from "../Constants/lottie";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import RNOtpVerify from "react-native-otp-verify";

const OTPVerifyScreen = props => {

    const [OTP, SetOTP] = useState("");
    useEffect(() => {
        RNOtpVerify.getOtp()
            .then(p => console.log(p))
            .catch(p => console.log(p));
    })
    return (
        <View style={styles.container}>
            <HeaderComponent navigation={props.navigation}/>
            <View style={styles.imgContainer}>
                <LottieView style={styles.lottieView} source={lottie.otpVerify} autoPlay loop/>
            </View>
            <Text style={styles.text1}>Verification code</Text>
            <Text style={styles.text2}>We have sent the code verification to Your Mobile Number</Text>
            <Text style={styles.text3}>+959798173552</Text>
            <View style={{justifyContent: "center", alignItems: "center", marginVertical: SIZES.padding * 9}}>
                <OTPInputView
                    pinCount={4}
                    code={props.route.params.code}
                    style={{width: '80%', height: 40}}
                    codeInputFieldStyle={styles.underlineStyleBase}
                />
            </View>
            <TouchableOpacity activeOpacity={.7} style={styles.submitBtn}>
                <View>
                    <Text style={styles.submitTxt}>Submit</Text>
                </View>
            </TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: SIZES.padding * 2,
    },
    lottieView: {
        width: SIZES.width,
        height: 300
    },
    imgContainer: {
        alignItems: "center"
    },
    text1: {
        ...FONTS.h1,
        color: COLORS.black,
        textAlign: "center"
    },
    text2: {
        textAlign: "center",
        ...FONTS.body2,
        fontWeight: "normal",
        marginVertical: SIZES.padding * 2
    },
    text3: {
        ...FONTS.h2,
        textAlign: "center",
        color: COLORS.black
    },
    submitBtn: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.roundRadius,
    },
    submitTxt: {
        color: COLORS.white,
        ...FONTS.h3
    },
    underlineStyleBase: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 50,
        backgroundColor: COLORS.white,
        color: COLORS.black,
        ...FONTS.h2
    },

})

export default OTPVerifyScreen
