import { View, Text, Pressable } from "react-native";
import React from "react";
import { TitleText } from "../../utils/styles/typography";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../utils/styles/colors";
import styled from "styled-components/native";
import EllipsesMenu from "../Widgets/EllipsesMenu";

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 16px 24px;
`;
const Header = ({ data, navigation }) => {
  return (
    <HeaderContainer>
      <Pressable onPress={() => navigation.goBack()}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size={22}
          color={colors.mediumGrey}
        />
      </Pressable>
      <TitleText>{data.listName}</TitleText>
      <EllipsesMenu />
    </HeaderContainer>
  );
};

export default Header;
