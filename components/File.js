import React, {Component} from 'React';
import autoBind from 'react-autobind';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import aviIcon from './images/avi.png';
import cssIcon from './images/css.png';
import csvIcon from './images/csv.png';
import docIcon from './images/doc.png';
import exeIcon from './images/exe.png';
import htmIcon from './images/html.png';
import jsIcon from './images/javascript.png';
import jpgIcon from './images/jpg.png';
import jsonIcon from './images/json.png';
import mp3Icon from './images/mp3.png';
import mp4Icon from './images/mp4.png';
import pdfIcon from './images/pdf.png';
import photoshopIcon from './images/photoshop.png';
import pngIcon from './images/png.png';
import pptIcon from './images/ppt.png';
import psdIcon from './images/psd.png';
import svgIcon from './images/svg.png';
import txtIcon from './images/txt.png';
import xlsIcon from './images/xls.png';
import xmlIcon from './images/xml.png';
import zipIcon from './images/zip.png';
import _ from 'lodash';

const iconMap = {
  avi: aviIcon,
  css: cssIcon,
  csv: csvIcon,
  doc: docIcon,
  docx: docIcon,
  exe: exeIcon,
  html: htmIcon,
  htm: htmIcon,
  js: jsIcon,
  ts: jsIcon,
  jpg: jpgIcon,
  jpeg: jpgIcon,
  json: jsonIcon,
  mp3: mp3Icon,
  mp4: mp4Icon,
  pdf: pdfIcon,
  ps: photoshopIcon,
  png: pngIcon,
  ppt: pptIcon,
  psd: psdIcon,
  svg: svgIcon,
  txt: txtIcon,
  xls: xlsIcon,
  xlsx: xlsIcon,
  xml: xmlIcon,
  rar: zipIcon,
  '7z': zipIcon,
  zip: zipIcon
}

export default class File extends Component{
  constructor(props){
    super(props);
    autoBind(this);
  }

  handlePressFile(){
    this.props.onDownloadFile(this.props.meta.id, this.props.meta.name);
  }

  render(){
    const {meta: {id, name, createUser}} = this.props;
    const ext = _.lowerCase(_.last(name.split('.')));
    const icon = _.get(iconMap, ext, txtIcon);
    return (<TouchableOpacity
      activeOpacity={0.6}
      style={{height: 60, paddingLeft: 20, paddingRight: 20, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#ddd'}}
      onPress={this.handlePressFile}
    >
      <Image
        resizeMode="contain"
        style={{width: 50}}
        source={icon}
      />
      <View style={{flex: 1, paddingLeft: 20}}>
        <Text style={{fontSize: 14}}>{name}</Text>
        <Text style={{color: '#666', fontSize: 12}}>{createUser}</Text>
      </View>
    </TouchableOpacity>);
  }
}
