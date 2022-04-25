import { ScrollView, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/ListScreen/Header";
import ListContainer from "../components/ListScreen/ListContainer";
import ListItem from "../components/ListScreen/ListItem";
import { Fab } from "native-base";
import { colors } from "../utils/styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faIceCream } from "@fortawesome/free-solid-svg-icons";
import BottomSheet from "../components/Widgets/BottomSheet";
import { useSelector } from "react-redux";
import { MainText } from "../utils/styles/typography";
import BackgroundGradient from "../components/General/BackgroundGradient";

const ListScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const data = useSelector((state) => state.listitems);

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <BackgroundGradient>
      <ScrollView style={{ flex: 1 }}>
        <Header data={data} navigation={navigation} />
        {data.length === 0 ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <MainText color={colors.mediumGrey}>Add Data</MainText>
            <FontAwesomeIcon
              icon={faIceCream}
              size={22}
              color={colors.mediumGrey}
            />
          </View>
        ) : (
          <ListContainer>
            {data.map((item) => {
              return <ListItem item={item} key={item.id} />;
            })}
          </ListContainer>
        )}

        <BottomSheet visible={visible} toggleModal={toggleModal} />
        <Fab
          onPress={() => toggleModal()}
          style={{ backgroundColor: colors.steelTeal }}
          icon={
            <FontAwesomeIcon
              icon={faPlus}
              color={colors.white}
              size={20}
              data={data}
            />
          }
        />
      </ScrollView>
    </BackgroundGradient>
  );
};

export default ListScreen;
