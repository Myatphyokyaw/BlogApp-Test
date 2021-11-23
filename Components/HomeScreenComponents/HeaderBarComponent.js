import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {COLORS, SIZES} from "../../Constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import {IconButton} from "react-native-paper";

const HeaderBarComponent = props => {
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <IconButton
                    icon="magnify-scan"
                    size={20}
                    style={{margin:0}}
                    onPress={() => console.log('Pressed')}
                />
                <TouchableOpacity style={styles.searchBar} onPress={()=>props.navigation.navigate('SearchScreen')} activeOpacity={.5}>
                    <Ionicons size={20} name="ios-search-outline"/>
                    <Text style={{marginLeft: 5}}>Search Product</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.7}>
                    <View style={styles.badge}>
                        <Text style={{color: COLORS.white, fontSize: 10}}>5</Text>
                    </View>
                    <IconButton
                        icon="bell-outline"
                        size={20}
                        style={{margin:0}}
                        onPress={() => console.log('Pressed')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    },
    bar: {
        height: 60,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    searchBar: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        borderRadius: SIZES.roundRadius,
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
        top: '-5%',
        right: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    }
})
export default HeaderBarComponent
