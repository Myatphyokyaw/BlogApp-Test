import React, {useState} from "react";
import {View} from "react-native";
import {SliderBox} from "react-native-image-slider-box";
import {COLORS, SIZES} from "../../Constants/theme";

const ImageSlideComponent = props => {
    const [images, setImages] = useState([
        "https://s.alicdn.com/@img/imgextra/i3/O1CN01QEL53b1ZNOzSa5hHT_!!6000000003182-0-tps-990-400.jpg",
        "https://s.alicdn.com/@img/tfs/TB1e.XyReL2gK0jSZFmXXc7iXXa-990-400.png",
        "https://s.alicdn.com/@img/imgextra/i1/O1CN01WnnDil27ftvqtY6Wb_!!6000000007825-0-tps-990-400.jpg",
        "https://s.alicdn.com/@img/imgextra/i2/O1CN01g9roWR1eePmq1CxIR_!!6000000003896-0-tps-990-400.jpg",
    ])
    return (
        <View>
            <SliderBox ImageComponentStyle={{borderRadius: 15, width: '94%', marginVertical: 10}}
                       autoplay circleLoop paginationBoxStyle={{
                position: "absolute",
                bottom: 15,
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 2,
                backgroundColor: 'rgba(255,255,255,0.4)',
                borderRadius: SIZES.roundRadius,
            }} dotStyle={{
                width: 7,
                height: 7,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
            }}
                       sliderBoxHeight={175} images={images}
                       dotColor={COLORS.secondary}
            />
        </View>
    )
}

export default ImageSlideComponent
