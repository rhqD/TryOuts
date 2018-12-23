import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from './Home';
import Settings from './Settings';

const AppNavigator = createBottomTabNavigator({
  Home,
  Settings
});

export default createAppContainer(AppNavigator);
