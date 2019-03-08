import {createNavigationReducer} from 'react-navigation-redux-helpers'
import {combineReducers} from 'redux'
import {MyAppNavigator} from '../navigators/AppNavigator'
import cardReducer from './card'
import themeReducer from './theme'

//自动创建navigation的reducer
const navReducer = createNavigationReducer(MyAppNavigator);

const appReducer = combineReducers({
    nav: navReducer,
    card:cardReducer,//银行卡操作
    theme:themeReducer,//改变颜色操作
});

export default appReducer;