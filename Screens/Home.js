import React, {useState} from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import HeaderBarComponent from "../Components/HomeScreenComponents/HeaderBarComponent";
import {COLORS, SIZES} from "../Constants/theme";
import ProductCard from "../Components/HomeScreenComponents/ProductCard";

const Home = props => {
    return (
        <View style={styles.container}>
            <HeaderBarComponent navigation={props.navigation}/>
            <ScrollView>
                <ProductCard navigation={props.navigation}/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    }
})
export default Home
