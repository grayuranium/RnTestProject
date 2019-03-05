import {createStackNavigator,createMaterialTopTabNavigator,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation'
import {createAppContainer,SafeAreaView,DrawerItems} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react'
import {Button,Platform,ScrollView} from 'react-native'
import HomePage from '../../js/page/HomePage'
import Page1 from '../../js/page/Page1'
import Page2 from '../../js/page/Page2'
import Page3 from '../../js/page/Page3'
import Page4 from '../../js/page/Page4'
import Login from '../../js/page/Login'

//用户登录页面
const AuthNavigator = createStackNavigator({
    Login:{
        screen:Login,
    },
},{
    defaultNavigationOptions:{
        header:null,
    },
})

//侧拉导航栏
const AppDrawNavigator = createDrawerNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            drawerLabel:'Page1',
            drawerIcon:({tintColor})=>(
                <MaterialIcons name={'drafts'} size={24} style={{color:tintColor}}/>
            ),
        },
    },
    Page4:{
        screen:Page4,
        navigationOptions:{
            drawerLabel:'Page4',
            drawerIcon:({tintColor})=>(
                <MaterialIcons name={'move-to-inbox'} size={24} style={{color:tintColor}}/>
            ),
        }
    },
}, {
    initialRouteName: 'Page1',
    contentOptions: {
        activeTintColor: '#e91e63',
    },
    contentComponent: (props) => (
        <ScrollView style={{backgroundColor:'#789',flex:1}}>
            <SafeAreaView forceInset={{top:'always',horizontal:'never'}}>
                <DrawerItems {...props}/>
            </SafeAreaView>
        </ScrollView>
    ),
})

//顶部导航栏
const AppTopNavigator = createMaterialTopTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'IOS',
        },
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:'Android'
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel:'React'
        }
    },
    Page4:{
        screen:Page4,
        navigationOptions:{
            tabBarLabel:'Django'
        }
    },
},{
    tabBarOptions:{
        tabStyle:{mindWidth:50},
        upperCaseLabel:false,//是否使标签大写
        scrollEnabled:true,//是否支持选项卡滚动
        style:{
            backgroundColor:'#678',
        },
        indicatorStyle:{
            height:2,
            backgroundColor:'white',
        },//选项卡指示器（下面的行）
        labelStyle:{
            fontSize:13,
            marginTop:6,
            marginBottom:6,
        },//文字的样式

    }
})

//底部导航栏
const AppBottomNavigator = createBottomTabNavigator({
    Page1:{
        screen:Page1,
        navigationOptions:{
            tabBarLabel:'最热',
            tabBarIcon:({horizontal,tintColor})=>(
                <Ionicons name={'ios-home'} size={26} style={{color:tintColor}}/>
            ),
        },
    },
    Page2:{
        screen:Page2,
        navigationOptions:{
            tabBarLabel:'趋势',
            tabBarIcon:({horizontal,tintColor})=>(
                <Ionicons name={'ios-people'} size={26} style={{color:tintColor}}/>
            ),
        }
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            tabBarLabel:'收藏',
            tabBarIcon:({horizontal,tintColor})=>(
                <Ionicons name={'ios-aperture'} size={26} style={{color:tintColor}}/>
            ),
        }
    },
    Page4:{
        screen:Page4,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({horizontal,tintColor})=>(
                <Ionicons name={'ios-home'} size={26} style={{color:tintColor}}/>
            ),
        }
    },
},{
    tabBarOptions:{
        inactiveColor: '#3e2465',
        activeColor:Platform.OS==='ios'?'#e91e63':'#fff',
    }
})

//标准导航栏
const AppStackNavigator = createStackNavigator({
    HomePage:{
        screen: HomePage,
    },
    Page1:{
        screen: Page1,
        navigationOptions:{
            //静态配置屏幕属性
            title: 'this is page1',
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: ({navigation}) =>({
            //动态配置屏幕属性
            title:`${navigation.state.params.name}`,
        })
    },
    Page3:{
        screen: Page3,
        navigationOptions: (props)=>{
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                title: params.title?params.title:'This is Page3',
                headerRight:(
                    <Button title={params.mode==='edit'?'保存':'编辑'}
                            onPress={()=>setParams({mode:params.mode==='edit'?'':'edit'})}/>
                )
            }
        }
    },
    Page4:{
        screen: Page4,
    },
    Top:{
        screen:AppTopNavigator,
        navigationOptions:{
            title: 'this is topNavigator',
        },
    },
    Bottom:{
        screen:AppBottomNavigator,
        navigationOptions:{
            title: 'this is bottomNavigator',
        },
    },
    Draw:{
        screen:AppDrawNavigator,
        navigationOptions:{
            title: 'this is drawNavigator',
        },
    },
},{
    initialRouteName:'HomePage',
})

//不可回退导航栏
const MyAppNavigator = createSwitchNavigator({
    Auth:{
        screen:AuthNavigator,
    },
    App:{
        screen:AppStackNavigator,
    }
},{
    initialRouteName:'Auth',
})

export const AppNavigatorContainer = createAppContainer(MyAppNavigator);