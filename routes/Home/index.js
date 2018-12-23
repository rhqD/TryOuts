import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home';
import Details from './Details';

const AppNavigator = createStackNavigator({
  Home,
  Details
});

export default createAppContainer(AppNavigator);
