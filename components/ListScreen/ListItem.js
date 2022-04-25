import { View } from "react-native";
import React, { useState } from "react";
import { MainText, SubText, LightSubText } from "../../utils/styles/typography";
import styled from "styled-components/native";
import { images } from "../../resource/images";
import RoundCheckBox from "react-native-round-checkbox";
import { colors } from "../../utils/styles/colors";
import { useDispatch } from "react-redux";
import { removeListItem } from "../../redux/actions/listActions";

const ListItemWrapperView = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom-color: ${colors.lightRed};
  border-bottom-width: 1px;
`;

const ListItemLeftContentView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ListItemRightContentView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 8px;
`;

const ListItemIcon = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;

const ListItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(item.isChecked);
  const dispatch = useDispatch();

  const renderLeftImage = (cat) => {
    switch (cat) {
      case "Meat":
        return <ListItemIcon source={images.steakImg} resizeMode="contain" />;
      case "Produce":
        return <ListItemIcon source={images.saladImg} resizeMode="contain" />;
    }
  };

  return (
    <ListItemWrapperView
      key={item.id}
      onLongPress={() => dispatch(removeListItem(item))}
    >
      <ListItemLeftContentView>
        {renderLeftImage(item.listItemCategory)}
        <View>
          <MainText>{item.listItemName}</MainText>
          <SubText>{item.listItemCategory}</SubText>
        </View>
      </ListItemLeftContentView>
      <ListItemRightContentView>
        <LightSubText marginRight="8px">{item.listItemQuantity}</LightSubText>
        <RoundCheckBox
          size={22}
          borderColor={colors.mediumGrey}
          backgroundColor={colors.white}
          iconColor={colors.mediumGrey}
          checked={isChecked}
          onValueChange={(checked) => setIsChecked(checked)}
        />
      </ListItemRightContentView>
    </ListItemWrapperView>
  );
};

export default ListItem;
