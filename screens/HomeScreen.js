import React from 'react';
import BackgroundGradient from '../components/General/BackgroundGradient';
import MostRecentList from '../components/HomeScreen/MostRecentList';

const HomeScreen = ({ navigation }) => {
  return (
    <BackgroundGradient>
      <MostRecentList navigation={navigation} />
    </BackgroundGradient>
  );
};

export default HomeScreen;
