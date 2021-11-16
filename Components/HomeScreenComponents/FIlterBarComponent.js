import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, ScrollView, FlatList} from "react-native";
import ProductData from "../../Data/ProductData";
import axios from "axios";
import {COLORS, FONTS, SIZES} from "../../Constants/theme";

const FilterBarComponent = props => {

    return (
        <View style={styles.container}>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding * 2,
    },
    itemContainer: {
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: SIZES.roundRadius,
        paddingHorizontal: SIZES.padding * 3,
        marginHorizontal: SIZES.padding - 5

    },
    itemText: {
        color: COLORS.white,
        ...FONTS.body4,
        fontWeight: 'bold'
    }
})
export default FilterBarComponent

