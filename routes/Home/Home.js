import React from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: (<View style={{width: 200, paddingLeft: 20}}><Button title="home" /></View>),
    headerStyle: {
      backgroundColor: '#f4511e',
      height: 50
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('Home Mount');
  }

  componentWillUnmount(){
    console.log('Home Unmount');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {id: 1, name: 'haha'})}
        />
      </View>
    );
  }
}

export default {
  screen: HomeScreen
};
