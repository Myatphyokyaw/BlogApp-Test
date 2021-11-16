import React from "react";
import {View, StyleSheet, TextInput, TouchableNativeFeedback, Text, TouchableOpacity} from "react-native";
import {COLORS, SIZES} from "../../Constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useSelector} from "react-redux";

const HeaderBarComponent = props => {
    // const value = useSelector((state) => state.counter)
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <Ionicons size={20} name="ios-scan-sharp" color={COLORS.black}/>
                <TouchableOpacity style={styles.searchBar} activeOpacity={.5}>
                    <Ionicons size={20} name="ios-search-outline"/>
                    <Text style={{marginLeft: 5}}>Search Product</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7}>
                    <View style={styles.badge}>
                        <Text style={{color: COLORS.white, fontSize: 10}}>5</Text>
                    </View>
                    <Ionicons size={20} name="notifications-outline" color={COLORS.black}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // flex: 1
    },
    bar: {
        height: 60,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding * 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    searchBar: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        borderRadius: SIZES.roundRadius,
        marginHorizontal: SIZES.padding,
        borderWidth: 0.5,
        borderColor: COLORS.primary,
        paddingHorizontal: SIZES.padding
    },
    badge: {
        width: 17,
        height: 17,
        backgroundColor: 'red',
        borderRadius: SIZES.roundRadius,
        position: 'absolute',
        top: -7,
        right: -5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    }
})
export default HeaderBarComponent
