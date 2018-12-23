import { createStackNavigator, createAppContainer } from "react-navigation";
import Settings from './Settings';
import Profile from './Profile';

const AppNavigator = createStackNavigator({
  Settings,
  Profile
});

export default createAppContainer(AppNavigator);
