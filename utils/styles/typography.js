import styled from "styled-components/native";
import { colors } from "./colors";

export const TitleText = styled.Text`
  font-size: 28px;
  color: ${colors.mediumGrey};
  margin-bottom: ${(props) => props.marginBottom || 0};
`;

export const MainText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.color || colors.jetGrey};
`;

export const SubText = styled.Text`
  font-size: ${(props) => props.fontSize || "16px"};
  color: ${(props) => props.color || colors.davysGrey};
`;

export const LightSubText = styled(TitleText)`
  font-size: 16px;
  margin-right: ${(props) => props.marginRight || 0};
`;
