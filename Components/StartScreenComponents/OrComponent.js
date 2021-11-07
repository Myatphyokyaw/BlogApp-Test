import React from "react";
import {View, StyleSheet, Text} from "react-native";
import {COLORS, SIZES} from "../../Constants/theme";

const OrComponent = props => {

    return (
        <View style={styles.container}>
            <View style={styles.line}/>
            <Text>Or Sign In With Google</Text>
            <View style={styles.line}/>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
      flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:SIZES.padding,
        marginVertical:SIZES.padding * 1.5
    },
    line: {
        height:1,
        width:'28%',
        backgroundColor:COLORS.primary,
        marginHorizontal:SIZES.padding
    }
})
export default OrComponent
