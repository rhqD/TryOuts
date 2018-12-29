import React, {Component} from 'react';
import autoBind from 'react-autobind';
import {Animated, View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Video} from 'expo';
import bkVideo from '../assets/bk3.mp4';

export default class SignInScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      password: '',
      account: ''
    };
    autoBind(this);
  }

  handleLogin(){
    setTimeout(() => {
      console.log('navigate');
      this.props.navigation.navigate('Home');
    }, 1000)
  }

  render(){
    return (<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#294f80'}}>
      <View style={StyleSheet.absoluteFillObject}>
        <Animated.View style={[StyleSheet.absoluteFillObject, {opacity: this.state.backgroundOpacity}]}>
          <Video
            isLooping
            isMuted
            resizeMode="cover"
            shouldPlay
            source={bkVideo}
            style={{width: '100%', height: '100%'}}
          />
        </Animated.View>
      </View>
      <View style={{padding: 20, width: '100%', alignItems: 'center', marginBottom: 80}}>
        <Image
          resizeMode="contain"
          style={{width: '80%', marginBottom: 20}}
          source={require('../assets/logo_white.png')}
        />
        <Text style={{width: '100%', paddingLeft: 20, paddingBottom: 5, paddingTop: 5, color: '#fff'}}>User Name</Text>
        <TextInput
          style={{width: '100%', height: 40, borderRadius: 20, backgroundColor: 'white', paddingLeft: 20, paddingRight: 20}}
          onChangeText={(userName) => this.setState({userName})}
          value={this.state.userName}
        />
        <Text style={{width: '100%', paddingLeft: 20, paddingBottom: 5, paddingTop: 5, color: '#fff'}}>Password</Text>
        <TextInput
          secureTextEntry
          style={{width: '100%', height: 40, borderRadius: 20, backgroundColor: 'white', paddingLeft: 20, paddingRight: 20}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Text style={{width: '100%', paddingLeft: 20, paddingBottom: 5, paddingTop: 5, color: '#fff'}}>Account</Text>
        <TextInput
          style={{width: '100%', height: 40, borderRadius: 20, backgroundColor: 'white', paddingLeft: 20, paddingRight: 20}}
          onChangeText={(account) => this.setState({account})}
          value={this.state.account}
        />
        <TouchableOpacity
          style={{ height: 40, width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 40, backgroundColor: '#5dc2d6' }}
          activeOpacity={0.6}
        >
          <Text style={{color: 'white', fontSize: 20}}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>);
  }
}
