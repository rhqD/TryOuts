import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';

export class StoragePage extends Component{
  componentDidMount(){
    this.props.getStorageData();
  }

  render(){
    const {schoolIcon: {fetchingStatus, url}} = this.props;
    return (<View style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
      {fetchingStatus === 2 && <Image
        style={{width: 50, height: 50}}
        source={{uri: url}}
      />}
      <TouchableOpacity
        style={{ height: 40, width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 40, backgroundColor: '#5dc2d6' }}
        activeOpacity={0.6}
      >
        <Text style={{color: 'white', fontSize: 20}}>Log In</Text>
      </TouchableOpacity>
    </View>);
  }
}

const mapStateToProps = (state) => {
  return {
    schoolIcon: state.app.schoolIcon
  };
};
export default connect(mapStateToProps, {...actionCreators})(StoragePage)
