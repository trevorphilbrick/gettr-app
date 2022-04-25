import { Modal, View, StyleSheet, Pressable, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { colors } from "../../utils/styles/colors";
import { images } from "../../resource/images";
import { Input } from "native-base";
import NumberPicker from "../Widgets/NumberPicker";
import { useDispatch } from "react-redux";
import { addListItem } from "../../redux/actions/listActions";

const DismissBar = styled.View`
  border-bottom-color: ${colors.lightRed};
  border-bottom-width: 2px;
  border-top-color: ${colors.lightRed};
  border-top-width: 2px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  margin: 16px 25%;
`;

const BottomBarContainer = styled.View`
  background-color: ${colors.white};
  padding: 0 5% 32px;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  box-shadow: 0 10px 12px #000;
`;

const BottomSheetImage = styled.Image`
  width: 60px;
  height: 60px;
`;

const BottomSheet = ({ visible, toggleModal }) => {
  const [quantity, setQuantity] = useState(1);
  const [listItem, setListItem] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleItem = (val) => {
    setListItem(val);
  };
  const handleCategory = (val) => {
    setCategory(val);
  };

  const handleCreateListItem = (listItem, category, quantity) => {
    if (listItem !== "" && quantity !== "") {
      return dispatch(
        addListItem({
          id: Math.random(),
          listItemName: listItem,
          listItemCategory: category,
          listItemQuantity: quantity,
          isChecked: false,
        })
      );
    }
  };

  return (
    <Modal
      animated
      animationType="slide"
      hardwareAccelerated
      visible={visible}
      transparent
      onRequestClose={() => toggleModal()}
    >
      <View style={styles.overlay}>
        <BottomBarContainer>
          <Pressable onPress={() => toggleModal()}>
            <DismissBar></DismissBar>
          </Pressable>
          <View>
            <Input
              variant="underlined"
              placeholder="Enter item"
              size="lg"
              color={colors.jetGrey}
              value={listItem}
              onChangeText={(item) => handleItem(item)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 16,
            }}
          >
            <BottomSheetImage source={images.chocolateImg} />
            <View style={{ flex: 1, marginLeft: 16 }}>
              {/* TODO: Create select for category */}
              <Input
                variant="underlined"
                placeholder="Select category"
                size="lg"
                color={colors.jetGrey}
                val={category}
                onChangeText={(cat) => handleCategory(cat)}
              />
              {/* </View> */}
              {/* </Pressable> */}
              <NumberPicker
                value={quantity}
                onPress={setQuantity}
                containerStyle={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 8,
                }}
              />
            </View>
          </View>
          <Pressable
            style={{
              backgroundColor: colors.steelTeal,
              marginHorizontal: 16,
              marginHorizontal: 16,
              flexDirection: "row",
              justifyContent: "center",
              paddingVertical: 16,
              borderRadius: 50,
            }}
            onPress={() => handleCreateListItem(listItem, category, quantity)}
          >
            <Text style={{ color: colors.white, fontSize: 20 }}>Add Item</Text>
          </Pressable>
        </BottomBarContainer>
      </View>
    </Modal>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
