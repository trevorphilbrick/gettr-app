import { Dimensions, View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../utils/styles/colors";

const screenHeight = Dimensions.get("window").height;

const BackgroundGradient = (props) => {
  return (
    <View>
      <LinearGradient
        colors={[colors.azureX11WebColor, colors.offWhite]}
        start={[0, 1]}
        end={[1, 1]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: screenHeight,
        }}
      >
        {props.children}
      </LinearGradient>
    </View>
  );
};

export default BackgroundGradient;
