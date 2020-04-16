import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MealsNavigator from './navigation/MealsNavigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <MealsNavigator />;
};

export default App;
