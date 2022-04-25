import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";

const MainNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="List" component={ListScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
