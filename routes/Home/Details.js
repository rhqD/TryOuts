import React from "react";
import { View, Text, Button } from "react-native";
import {NavigationEvents} from 'react-navigation';
import _ from 'lodash';
import autoBind from 'react-autobind';

class DetailsScreen extends React.Component {

  constructor(props){
    super(props);
    autoBind(this);
    this.state = {
      id: null,
      name: ''
    }
  }

  componentDidMount(){
    console.log('DetailsScreen Mount');
  }

  componentWillUnmount(){
    console.log('DetailsScreen Unmount');
  }

  handleWillFocus(e){
    this.setState({
      id: this.props.navigation.getParam('id'),
      name: this.props.navigation.getParam('name')
    })
  }

  render() {
    const {id, name} = this.state;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <NavigationEvents
          onWillFocus={this.handleWillFocus}
        />
        <Text>id is {id}, and name is {name}</Text>
        <Button
          style={{marginBottom: 20}}
          title="Go to settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

export default {
  screen: DetailsScreen
};
