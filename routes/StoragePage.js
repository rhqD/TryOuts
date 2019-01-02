import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';

export class StoragePage extends Component{
  componentDidMount(){
    this.props.getStorageData();
  }

  render(){
    const {schoolIcon: {fetchingStatus, url}} = this.props;
    return (<View style={{flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
    <Text> hahahahah </Text>
      {fetchingStatus === 2 && <Image
        style={{width: 50, height: 50}}
        source={{uri: url}}
      />}
    </View>);
  }
}

const mapStateToProps = (state) => {
  return {
    schoolIcon: state.app.schoolIcon
  };
};
export default connect(mapStateToProps, {...actionCreators})(StoragePage)
