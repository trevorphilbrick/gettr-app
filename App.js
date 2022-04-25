import React, { useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ListScreen from './screens/ListScreen';
import BackgroundGradient from './components/General/BackgroundGradient';
import { Provider } from 'react-redux';
import { store } from './redux/reduxStore';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');

export default function App() {
  console.log(usersCollection);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <BackgroundGradient>
                <MainNavigator />
              </BackgroundGradient>
            </SafeAreaView>
          </SafeAreaProvider>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
