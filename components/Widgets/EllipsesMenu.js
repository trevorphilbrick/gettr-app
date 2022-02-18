import React from "react";
import { Pressable } from "react-native";
import { Menu } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../utils/styles/colors";

const EllipsesMenu = () => {
  return (
    <Menu
      w="190"
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <FontAwesomeIcon
              icon={faEllipsisV}
              size={22}
              color={colors.mediumGrey}
            />
          </Pressable>
        );
      }}
    >
      <Menu.Item>Arial</Menu.Item>
      <Menu.Item>Nunito Sans</Menu.Item>
      <Menu.Item>Roboto</Menu.Item>
      <Menu.Item>Poppins</Menu.Item>
      <Menu.Item>SF Pro</Menu.Item>
      <Menu.Item>Helvetica</Menu.Item>
      <Menu.Item isDisabled>Sofia</Menu.Item>
      <Menu.Item>Cookie</Menu.Item>
    </Menu>
  );
};

export default EllipsesMenu;
