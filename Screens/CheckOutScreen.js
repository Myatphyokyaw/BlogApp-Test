import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Image} from "react-native";
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import {CreditCardInput, LiteCreditCardInput} from "@soevii/react-native-card-input";
import {useDispatch} from "react-redux";
import {Button, TextInput} from "react-native-paper";

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
            <ProgressSteps>
                <ProgressStep>
                    <View style={styles.container}>
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
                        <Button contentStyle={{
                            backgroundColor: COLORS.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 80
                        }} mode="contained" onPress={() => {
                            console.log("Pressed")
                        }}>
                            CheckOut
                        </Button>
                    </View>
                </ProgressStep>
                <ProgressStep>
                    <View style={{alignItems: 'center'}}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep onSubmit={() => success()}>
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
        padding: SIZES.padding
    },
    headerText: {
        ...FONTS.h2
    },
    textInput: {
        marginTop: SIZES.padding * 3,
        backgroundColor: COLORS.white
    }
})

export default CheckOutScreen
