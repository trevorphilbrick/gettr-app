import { ScrollView, Text, FlatList } from "react-native";
import React from "react";
import Header from "../components/ListScreen/Header";
import ListContainer from "../components/ListScreen/ListContainer";
import ListItem from "../components/ListScreen/ListItem";
import { Fab } from "native-base";
import { colors } from "../utils/styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ListScreen = ({ data }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header data={data} />
      <ListContainer>
        {data.list.map((item) => {
          return <ListItem item={item} />;
        })}
      </ListContainer>
      <Fab
        style={{ backgroundColor: colors.steelTeal }}
        icon={<FontAwesomeIcon icon={faPlus} color={colors.white} size={20} />}
      />
    </ScrollView>
  );
};

export default ListScreen;
