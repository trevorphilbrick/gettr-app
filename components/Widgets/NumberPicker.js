import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCirclePlus, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../utils/styles/colors";
import { SubText } from "../../utils/styles/typography";

const NumberPicker = ({ value, onPress, containerStyle }) => {
  return (
    <View style={containerStyle}>
      <Pressable onPress={() => onPress(value--)}>
        <FontAwesomeIcon
          icon={faMinusCircle}
          color={colors.mediumGrey}
          size={18}
          style={{ marginRight: 8 }}
        />
      </Pressable>
      <SubText fontSize="20px" color={colors.mediumGrey}>
        {value}
      </SubText>
      <Pressable onPress={() => onPress(value++)}>
        <FontAwesomeIcon
          icon={faCirclePlus}
          color={colors.mediumGrey}
          size={18}
          style={{ marginLeft: 8 }}
        />
      </Pressable>
    </View>
  );
};

export default NumberPicker;
