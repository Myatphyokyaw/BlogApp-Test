import React, {useRef, useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity, Image, TouchableWithoutFeedback
} from "react-native";
import LoginTopComponent from "../Components/LoginScreenComponents/LoginTopComponent";
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import PhoneInput from 'react-native-phone-number-input';
import OrComponent from "../Components/StartScreenComponents/OrComponent";
import images from "../Constants/images";

const LoginScreen = props => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const phoneInput = useRef(null);
    const sentOTP = async () => {
        var axios = require('axios');
        var data = JSON.stringify({
            "messageFormat": "Hello, this is your OTP ${otp}. Please do not share it with anyone",
            "phoneNumber": "+959798173552",
            "otpLength": 4,
            "otpValidityInSeconds": 120
        });
        var config = {
            method: 'post',
            url: 'https://otp.apistack.run/v1/sendOtp',
            headers: {
                'x-as-apikey': '43cc5367-9420-4462-8326-123a26cd8673',
                'Content-Type': 'application/json'
            },
            data : data
        };
        axios(config)
            .then(function (response) {
                 console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        props.navigation.navigate("OTPVerifyScreen",{code:'2504'})

    }

    return (
        <View style={styles.container}>
            <LoginTopComponent/>
            <View style={styles.phoneRootContainer}>
                <Text style={styles.phText}>Phone Number</Text>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="MM"
                    layout="first"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.textInput}
                    withShadow
                    autoFocus
                />
            </View>
            <TouchableOpacity onPress={()=>sentOTP(value)} style={styles.button} activeOpacity={.7}>
                <Text style={{color: COLORS.white, fontWeight: "bold"}}>Request OTP</Text>
            </TouchableOpacity>
            <OrComponent/>
            <TouchableOpacity style={styles.googleBtn} activeOpacity={.7}>
                <Image style={styles.googleImg} source={images.google}/>
                <Text style={{fontWeight: "bold"}}>Google</Text>
            </TouchableOpacity>
            <View style={styles.contain}>
                <Text>Not registered yet?</Text>
                <TouchableWithoutFeedback onPress={()=>alert("Hello")}>
                    <Text style={{color:'red',fontWeight:"bold"}}>  Create an Account</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.padding * 2
    },
    phoneContainer: {
        borderRadius: SIZES.roundRadius,
        borderColor: COLORS.primary,
        borderWidth: 1,
        width: '100%'
    },
    phoneRootContainer: {
        marginTop: SIZES.padding * 3,
    },
    textInput: {
        borderTopRightRadius: SIZES.roundRadius,
        borderBottomRightRadius: SIZES.roundRadius,
        height: 50,
        paddingVertical: 0,
        borderLeftColor: COLORS.primary,
        borderLeftWidth: 1,
    },
    phText: {
        ...FONTS.h4,
        fontWeight: "bold",
        color: COLORS.black,
        marginBottom: SIZES.padding
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SIZES.padding * 1.5,
        paddingHorizontal: 32,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.primary,
        marginVertical: SIZES.padding * 3
    },
    googleBtn:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SIZES.padding * 1,
        paddingHorizontal: 32,
        borderRadius: SIZES.roundRadius,
        backgroundColor: COLORS.white,
        marginVertical: SIZES.padding * 3
    },
    googleImg:{
        width:25,
        height:25,
        resizeMode:"contain",
        marginHorizontal:SIZES.padding
    },
    contain:{
        flexDirection:"row"
    }

})

export default LoginScreen
