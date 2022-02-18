import styled from "styled-components/native";
import { colors } from "./colors";

export const TitleText = styled.Text`
  font-size: 28px;
  color: ${colors.mediumGrey};
`;

export const MainText = styled.Text`
  font-size: 20px;
  color: ${colors.jetGrey};
`;

export const SubText = styled.Text`
  font-size: 16px;
  color: ${colors.davysGrey};
`;

export const LightSubText = styled(TitleText)`
  font-size: 16px;
  margin-right: ${(props) => props.marginRight || 0};
`;
