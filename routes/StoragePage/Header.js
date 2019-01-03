import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import autoBind from 'react-autobind';
import _ from 'lodash';
const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
};
export default class Header extends Component{
  constructor(props){
    super(props);
    autoBind(this);
  }

  render(){
    return (<View style={[{height: 70, width: '100%', backgroundColor: '#007acc'}, shadowStyle]}>
      <StatusBar
        backgroundColor="#007acc"
        translucent={false}
      />
    </View>);
  }
}
