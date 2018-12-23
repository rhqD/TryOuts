import React from "react";
import { View, Text, Button } from "react-native";

class Settings extends React.Component {
  componentDidMount(){
    console.log('Settings Mount');
  }

  componentWillUnmount(){
    console.log('Settings Unmount');
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Settings Screen</Text>
        <Button
          style={{marginBottom: 20}}
          title="Go to profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

export default {
  screen: Settings
};
