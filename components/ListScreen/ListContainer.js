import { Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { colors } from "../../utils/styles/colors";

const ListContainerView = styled.View`
  margin: 0 24px;
  display: flex;
  border-radius: 24px;
  background-color: ${colors.white};
  padding: 16px;
`;

const ListContainer = (props) => {
  return <ListContainerView>{props.children}</ListContainerView>;
};

export default ListContainer;
