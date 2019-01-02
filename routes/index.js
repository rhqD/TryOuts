import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import AuthLoadingScreen from './AuthLoadingScreen';
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import {Image} from 'react-native';

const AuthStack = createStackNavigator({ SignIn: SignInScreen },
{
  defaultNavigationOptions: {
    headerStyle: {
      display: 'none'
    }
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: HomeScreen,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
));
