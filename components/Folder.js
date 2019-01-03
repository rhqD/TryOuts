import React, {Component} from 'React';
import autoBind from 'react-autobind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import folder from './images/folder.png';
import lockedFolder from './images/folder_locked.png';
import systemFolder from './images/folder_system.png';
const folderMap = {
  0: lockedFolder,
  1: systemFolder,
  2: folder
}

export default class Folder extends Component{
  constructor(props){
    super(props);
    autoBind(this);
  }

  handlePress(){
    this.props.onGoToDirectory(this.props.meta.id);
  }

  render(){
    const {meta: {id, name, type, createUser}} = this.props;
    return (<TouchableOpacity
      activeOpacity={0.6}
      style={{height: 60, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#ddd'}}
      onPress={this.handlePress}
    >
      <Image
        resizeMode="contain"
        style={{width: 50}}
        source={folderMap[type]}
      />
      <View style={{flex: 1, paddingLeft: 20}}>
        <Text style={{fontSize: 14}}>{name}</Text>
        <Text style={{color: '#666', fontSize: 12}}>{createUser}</Text>
      </View>
    </TouchableOpacity>);
  }
}
