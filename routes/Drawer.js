import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import placeholderProfile from '../assets/placeholderProfile.jpg';
import _ from 'lodash';
import { logoutAsync } from '../actions/login';

export class Drawer extends Component{
  constructor(props){
    super(props);
    this.handleLogoutAsync = this.handleLogoutAsync.bind(this);
  }

  async handleLogoutAsync(){
    await logoutAsync();
    this.props.onLogout();
  }

  render(){
    const {schoolIcon: {fetchingStatus, url}, user, onLogout} = this.props;
    const userName = _.get(user, 'userName', '');
    const accountName = _.get(user, 'accountName', '');
    return (<View style={{flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#123a5c', paddingLeft: 20, paddingTop: 40, paddingBottom: 10}}>
        <Image
          style={{width: 60, height: 60, borderWidth: 1, borderRadius: 30}}
          source={fetchingStatus === 2 ? {uri:  url} : placeholderProfile}
        />
        <View style={{felx: 1, paddingLeft: 20}}>
          <Text style={{color: '#FFF'}}>{userName}</Text>
          <Text style={{marginTop: 5, color: '#FFF'}}>{accountName}</Text>
        </View>
      </View>
      <View style={{padding: 20, borderWidth: 1, flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 4, backgroundColor: '#d84830'}}
          activeOpacity={0.6}
          onPress={this.handleLogoutAsync}
        >
          <Text style={{color: 'white', fontSize: 20}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>);
  }
}

const mapStateToProps = (state) => {
  return {
    schoolIcon: state.app.schoolIcon,
    user: state.app.userProfile.user
  };
};
export default connect(mapStateToProps)(Drawer)
