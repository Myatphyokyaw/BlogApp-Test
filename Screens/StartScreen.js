import React, {useRef} from "react";
import {FlatList, StyleSheet, View, Animated, StatusBar} from "react-native";
import {COLORS, SIZES} from "../Constants/theme";
import StartViewComponent from "../Components/StartScreenComponents/StartViewComponent";
import StartScreenData from "../Data/StartScreenData";
import IndicatorComponent from "../Components/StartScreenComponents/IndicatorComponent";
import Backdrop from "../Components/StartScreenComponents/Backdrop";
import SquareComponent from "../Components/StartScreenComponents/SquareComponent";

const StartScreen = props => {
    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container}>
            <Backdrop scrollX={scrollX}/>
            <SquareComponent scrollX={scrollX}/>
            <Animated.FlatList data={StartScreenData}
                               keyExtractor={item => item.id} horizontal
                               showsHorizontalScrollIndicator={false}
                               pagingEnabled
                               renderItem={({item}) => {
                                   return (
                                       <StartViewComponent data={item} navigation={props.navigation}/>
                                   )
                               }}
                               scrollEventThrottle={32}
                               onScroll={Animated.event(
                                   [{nativeEvent: {contentOffset: {x: scrollX}}}],
                                   {useNativeDriver: false}
                               )}
            />
            <View style={styles.indicatorContainer}>
                {StartScreenData.map((item, index) => {

                    const inputRange = [(index - 1) * SIZES.width, index * SIZES.width, (index + 1) * SIZES.width]

                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.5, 1.2, 0.5],
                        extrapolate: "clamp"
                    })

                    return (
                        <IndicatorComponent scale={scale} key={index.toString()}/>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    indicatorContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 40
    }
})

export default StartScreen
