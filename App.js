/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView
} from 'react-native';

import Router from './src/Router/Router';

class App extends Component {
  render() {
    return (
      // <Provider store={Store}>
          <Router />
      // </Provider>
    );
  }  
};

const styles = StyleSheet.create({
});

export default App;
// AppRegistry.registerComponent('App',  () => point);
