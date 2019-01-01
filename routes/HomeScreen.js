import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

export class HomeScreen extends Component{
  render(){
    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
    </View>);
  }
}

const mapStateToProps = (state) => {
  return {
    test: true
  };
};
export default connect(mapStateToProps)(HomeScreen)
