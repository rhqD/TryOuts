import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { AsyncStorage } from "react-native"

export default class AuthLoadingScreen extends Component{

  componentDidMount(){
    AsyncStorage.getItem('token').then((token) => {
      if (token){
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth')
      }
    })
  }

  render(){
    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>正在验证登陆...</Text>
    </View>);
  }
}
