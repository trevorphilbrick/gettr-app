import React from "react";
import { Pressable } from "react-native";
import { Menu } from "native-base";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../utils/styles/colors";
import saveNewList from "../../utils/functions/saveNewList";
import { useSelector } from "react-redux";

const EllipsesMenu = () => {
  const data = useSelector((state) => state.listitems);

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
      <Menu.Item onPress={() => saveNewList(data)}>Save</Menu.Item>
    </Menu>
  );
};

export default EllipsesMenu;
