import React, {Component} from 'react';
import {View, Image, Text, DrawerLayoutAndroid} from 'react-native';
import { createBottomTabNavigator } from "react-navigation";
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import StoragePage from './StoragePage';
import Drawer from './Drawer';
import homeIcon from '../assets/home2.png';

const AppNavi = createBottomTabNavigator({
  storage: {
    screen: StoragePage,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (<Image
        style={{width: 28, height: 28}}
        source={homeIcon}
      />)
    }
  }
}, {
  initialRouteName: 'storage'
});

export class HomeScreen extends Component{
  static router = AppNavi.router;

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind();
  }

  componentDidMount(){
    this.props.getSchoolIconUrl();
    this.props.getUserProfile();
  }

  renderNavigationView(){
    return (<Drawer onLogout={this.handleLogout}/>);
  }

  handleLogout(){
    this.props.navigation.navigate('Auth');
  }

  render(){
    const {navigation} = this.props;
    return (<DrawerLayoutAndroid
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        drawerWidth={200}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.renderNavigationView}
      >
        <AppNavi
          style={{flex: 1, width: '100%'}}
          navigation={navigation}
        />
      </DrawerLayoutAndroid>);
  }
}

const mapStateToProps = (state) => {
  return {
    schoolIcon: state.app.schoolIcon
  };
};
export default connect(mapStateToProps, {...actionCreators})(HomeScreen)
