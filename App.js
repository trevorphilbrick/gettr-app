import React from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ListScreen from "./screens/ListScreen";
import BackgroundGradient from "./components/General/BackgroundGradient";
import { mockData } from "./utils/mockData/mockList";

export default function App() {
  const DATA = mockData[0];

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <BackgroundGradient>
          <SafeAreaView style={{ flex: 1 }}>
            <ListScreen data={DATA} />
          </SafeAreaView>
        </BackgroundGradient>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
