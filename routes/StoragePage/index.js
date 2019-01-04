import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, BackHandler, ScrollView, Linking} from 'react-native';
import {connect} from 'react-redux';
import * as actionCreators from '../../actions';
import Folder from '../../components/Folder';
import File from '../../components/File';
import autoBind from 'react-autobind';
import _ from 'lodash';
import Header from './Header';
import loadingGif from '../../assets/loading.gif';
// import RNFetchBlob from 'rn-fetch-blob';

export class StoragePage extends Component{
  constructor(props){
    super(props);
    autoBind(this);
  }

  componentDidMount(){
    this.props.getStorageData();
    const currDirectory = _.last(this.props.stack);
    if (currDirectory && _.isString(currDirectory.id) && !_.isArray(currDirectory.files)){
      this.props.getFiles(currDirectory.id);
    }
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillReceiveProps(nextProps){
    const currDirectory = _.last(this.props.stack) || {};
    const nextDirectory = _.last(nextProps.stack) || {};
    if (currDirectory.id !== nextDirectory.id && !_.isArray(nextDirectory.files)){
      this.props.getFiles(nextDirectory.id);
    }
  }

  handleGoToDirectory(id){
    this.props.goToDirectory(id);
  }

  handleDownloadFile(id, name){
    this.props.getFileDownloadLink(id).then((url) => {
      Linking.openURL(url);
      // RNFetchBlob.config({
      //   path : RNFetchBlob.fs.dirs.DocumentDir + '/' + name
      // }).fetch('GET', url).then((res) => {
      //   console.log('The file saved to ', res.path());
      // })
    });
  }

  handleBackPress(e){
    if (this.props.stack.length > 1){
      this.props.goBackToDirectory();
      return true;
    }
    return false;
  }

  render(){
    const {schoolIcon: {fetchingStatus, url}, stack, filesLoadingStatus} = this.props;
    const directory = _.last(stack);
    const subFolders = _.get(directory, 'subFolders', []);
    const files = _.get(directory, 'files', []);
    return (<View style={{flex: 1, width: '100%'}}>
      <Header/>
      <ScrollView keyboardDismissMode="on-drag">
        {filesLoadingStatus === 1 && <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 50, height: 50}}
            source={loadingGif}
          />
        </View>}
        {subFolders.map((folderMeta) => (<Folder
          key={folderMeta.id}
          meta={folderMeta}
          onGoToDirectory={this.handleGoToDirectory}
        />))}
        {files.map((fileMeta) => (<File
          key={fileMeta.id}
          onDownloadFile={this.handleDownloadFile}
          meta={fileMeta}
        />))}
      </ScrollView>
    </View>);
  }
}

const mapStateToProps = (state) => {
  return {
    schoolIcon: state.app.schoolIcon,
    stack: state.app.directory.stack,
    filesLoadingStatus: state.app.directory.filesLoadingStatus
  };
};
export default connect(mapStateToProps, {...actionCreators})(StoragePage)
