import {applyMiddleware,createStore} from 'redux'
import appReducer from '../reducer/index'
import {middleware} from '../navigators/AppNavigator'

//中间件队列
const middlewares = [
    middleware,
];

export default createStore(appReducer,applyMiddleware(...middlewares));