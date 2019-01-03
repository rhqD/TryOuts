import React, {Component} from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import AuthLoadingScreen from './AuthLoadingScreen';
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import {connect} from 'react-redux';
import {Image, Modal, Text, View, TouchableHighlight} from 'react-native';
import loadingGif from '../assets/loading2.gif';

const AuthStack = createStackNavigator({ SignIn: SignInScreen },
{
  defaultNavigationOptions: {
    headerStyle: {
      display: 'none'
    }
  }
});

const RootNavi = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: HomeScreen,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
));

export class Root extends Component{
  constructor(props){
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  render(){
    const {showLoadingGif} = this.props;
    return (<View style={{flex: 1, width: '100%'}}>
      <Modal
        animationType="fade"
        transparent
        visible={showLoadingGif}
      >
        <View style={{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}}>
          <View style={{backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent'}}>
            <Image
              style={{backgroundColor: 'transparent'}}
              source={loadingGif}
            />
          </View>
        </View>
      </Modal>
      <RootNavi/>
    </View>);
  }
};

const mapStateToProps = (state) => {
  return {
    showLoadingGif: state.app.loadingGif.showCount > 0
  }
}

export default connect(mapStateToProps)(Root);
