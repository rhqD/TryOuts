import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './routes';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.dev';
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <AppNavigator/>
    </Provider>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
