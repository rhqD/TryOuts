import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class AuthLoadingScreen extends Component{

  componentDidMount(){
    setTimeout(() => {
      console.log('ready to navigate');
      this.props.navigation.navigate('SignIn');
    }, 2000)
  }

  render(){
    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>正在验证登陆...</Text>
    </View>);
  }
}
