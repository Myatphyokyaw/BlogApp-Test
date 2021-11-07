import React from "react";
import {View,StyleSheet,Animated} from "react-native";
import {COLORS, SIZES} from "../../Constants/theme";

const IndicatorComponent = props =>{
    return(
        <Animated.View style={[styles.dots,{transform:[{scale:props.scale}]}]}>

        </Animated.View>
    )
}

const styles = StyleSheet.create({
    dots:{
       width:10,
       height:10,
       borderRadius:SIZES.radius * 3,
       backgroundColor:COLORS.white,
       marginEnd:SIZES.padding * 1.5
    }
})

export default IndicatorComponent
