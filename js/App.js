import React, {Component} from 'react'
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
