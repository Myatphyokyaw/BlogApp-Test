import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Image} from "react-native";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import {CreditCardInput, LiteCreditCardInput} from "@soevii/react-native-card-input";
import {useDispatch} from "react-redux";
import {Button, TextInput} from "react-native-paper";
import LottieView from "lottie-react-native";
import lottie from "../Constants/lottie";

const CheckOutScreen = props => {
    const dispatch = useDispatch();
    const success = () => {
        dispatch({
            type: "ALLDELETEITEM"
        })
        props.navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <ProgressSteps marginBottom={20}>
                <ProgressStep isComplete={false} nextBtnStyle={styles.nextBtn} nextBtnText="CheckOut"
                              nextBtnTextStyle={{color: COLORS.white}}>
                    <View st            yle={styles.container}>
                        <Text style={styles.headerText}>Payment Details</Text>
                        <TextInput outlineColor={COLORS.primary} activeOutlineColor={COLORS.primary}
                                   style={styles.textInput} label="Card HolderName" mode='outlined'/>
                        <TextInput outlineColor={COLORS.primary} activeOutlineColor={COLORS.primary}
                                   style={styles.textInput}
                                   label="Card Number" mode='outlined' right={<TextInput.Affix text="/16"/>}/>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <TextInput style={[styles.textInput, {width: '40%'}]} outlineColor={COLORS.primary}
                                       activeOutlineColor={COLORS.primary} label="Expiry date" mode='outlined'/>
                            <TextInput style={[styles.textInput, {width: '40%'}]} outlineColor={COLORS.primary}
                                       activeOutlineColor={COLORS.primary} label="CVC" mode='outlined'/>
                        </View>
                    </View>
                </ProgressStep>
                <ProgressStep nextBtnStyle={styles.nextBtn} nextBtnText="Confirm" previousBtnStyle={styles.previousBtn}
                              nextBtnTextStyle={{color: COLORS.white}}>
                    <View style={{alignItems: 'center',flex:1}}>
                        <LottieView style={styles.confirmImg} source={lottie.confirm} autoPlay loop/>
                        <Text style={styles.confirmText}>Confirm your payment</Text>
                    </View>
                </ProgressStep>
                <ProgressStep previousBtnStyle={{display: 'none'}} nextBtnStyle={styles.nextBtn}
                              nextBtnTextStyle={{color: COLORS.white}} onSubmit={() => success()}>
                    <View style={{alignItems: 'center'}}>
                        <LottieView style={{width: '100%', height: 500}} source={lottie.success} autoPlay loop/>
                        <Text style={FONTS.h3}>Thank For Buying</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.padding,
    },
    headerText: {
        ...FONTS.h2
    },
    textInput: {
        marginTop: SIZES.padding * 3,
        backgroundColor: COLORS.white
    },
    nextBtn: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: SIZES.padding * 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius,
    },
    previousBtn: {
        borderWidth: 0.2,
        borderColor: COLORS.primary,
        borderRadius: SIZES.radius
    },
    confirmImg:{
        width:'100%',
        height:'80%',
        justifyContent:"center",
        alignItems:"center"
    },
    confirmText:{
        ...FONTS.h2,
        marginTop:SIZES.padding * 4
    }
})

export default CheckOutScreen
