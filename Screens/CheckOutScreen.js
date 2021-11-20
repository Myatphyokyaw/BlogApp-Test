import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import {CreditCardInput, LiteCreditCardInput} from "@soevii/react-native-card-input";

const CheckOutScreen = props => {
    return (
        <View style={styles.container}>
            <ProgressSteps>
                <ProgressStep>
                    <View style={styles.paymentContainer}>
                        <Text style={[FONTS.h3, {textAlign: "center", color: COLORS.black}]}>PAYMENT</Text>
                        <View style={styles.paymentFormContainer}>
                            <LiteCreditCardInput
                                placeholders={{ number: "Card Number", expiry: "MM/YY", cvc: "CVC" }}
                                inputStyle={{backgroundColor: COLORS.lightGray2, borderRadius: SIZES.radius,padding:SIZES.padding}}
                            />
                        </View>
                    </View>
                </ProgressStep>
                <ProgressStep>
                    <View style={{alignItems: 'center'}}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep>
                    <View style={{alignItems: 'center'}}>
                        <Text>This is the content within step 3!</Text>
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
    },
    paymentContainer: {
        flex: 1,
    },
    paymentFormContainer: {
        padding: SIZES.padding,
        marginTop: SIZES.padding * 5
    }
})

export default CheckOutScreen
