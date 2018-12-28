import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import AuthLoadingScreen from './AuthLoadingScreen';
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';

const AppStack = createStackNavigator({ Home: HomeScreen});
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
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
));
