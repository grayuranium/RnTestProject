import {applyMiddleware,createStore} from 'redux'
import appReducer from '../reducer/index'
import thunk from 'redux-thunk'
import {middleware} from '../navigators/AppNavigator'

//自定义中间件（我的debug调试有点问题，慎用）
// const logger = store => next => action =>{
//     if (typeof action==='function'){
//         console.log('dispatching a function');
//     }else {
//         console.log('dispatching',action);
//     }
//     console.log('nextState',store.getState());
// };

//中间件队列
const middlewares = [
    middleware,
    // logger,
    thunk,
];

export default createStore(appReducer,applyMiddleware(...middlewares));