import React from "react";
import { View, Text, Button } from "react-native";

class Profile extends React.Component {
  componentDidMount(){
    console.log('Profile Mount');
  }

  componentWillUnmount(){
    console.log('Profile Unmount');
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default {
  screen: Profile
};
