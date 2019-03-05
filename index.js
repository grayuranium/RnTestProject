/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {AppStackNavigatorContainer} from './js/navigators/AppNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
