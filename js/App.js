import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import {Provider} from 'react-redux'
import store from './store/store'
import {AppWithNavigationState} from './navigators/AppNavigator'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
          <AppWithNavigationState/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
