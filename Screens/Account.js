import React from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity} from "react-native";
import {COLORS, FONTS, SIZES} from "../Constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Account = props => {

    return (
        <View style={styles.container}>
            <Image style={styles.profileImg} source={{uri: "https://avatars.githubusercontent.com/u/72590127?v=4"}}/>
            <View style={styles.detailContainer}>
                <Ionicons size={30} color={COLORS.black} name="person-circle-outline"/>
                <View style={{marginLeft: SIZES.padding}}>
                    <Text style={[FONTS.h3, {color: COLORS.black}]}>Name</Text>
                    <Text>Myat Phyo Kyaw</Text>
                </View>
            </View>
            <View style={styles.detailContainer}>
                <MaterialCommunityIcons size={30} color={COLORS.black} name="phone-in-talk-outline"/>
                <View style={{marginLeft: SIZES.padding}}>
                    <Text style={[FONTS.h3, {color: COLORS.black}]}>Email</Text>
                    <Text>myatphyokyaw2@gmail.com</Text>
                </View>
            </View>
            <View style={styles.detailContainer}>
                <Ionicons size={30} color={COLORS.black} name="mail-unread-outline"/>
                <View style={{marginLeft: SIZES.padding}}>
                    <Text style={[FONTS.h3, {color: COLORS.black}]}>Phone Number</Text>
                    <Text>09798173552</Text>
                </View>
            </View>
            <View style={styles.detailContainer}>
                <Ionicons size={30} color={COLORS.black} name="location-outline"/>
                <View style={{marginLeft: SIZES.padding}}>
                    <Text style={[FONTS.h3, {color: COLORS.black}]}>Location</Text>
                    <Text>Yangon</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.logoutBtn}>
                <Text style={[FONTS.h4,{color:COLORS.primary}]}>LogOut</Text>
                <Ionicons size={20} color={COLORS.primary} name="ios-arrow-forward-outline"/>
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        padding: SIZES.padding * 2
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: SIZES.roundRadius

    },
    detailContainer: {
        backgroundColor: COLORS.white,
        width: '100%',
        height: 80,
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.padding * 1.2,
        padding: SIZES.padding,
        borderRadius: SIZES.radius,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    logoutBtn: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        width:'100%',
        borderRadius:SIZES.roundRadius,
        justifyContent:"center",
        alignItems:"center",
        marginTop:SIZES.padding * 5,
        height:50,
        flexDirection:"row"
    }
})
export default Account
