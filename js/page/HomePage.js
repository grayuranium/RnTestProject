import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BackHandler, StyleSheet, Text, View,Button} from 'react-native';
import {NavigationActions} from 'react-navigation';
import actions from '../actions';

type Props = {};
class HomePage extends Component<Props> {

    componentDidMount(): void {
        BackHandler.addEventListener('hardwareBackPress',this.onBackPress);
    }

    componentWillUnmount(): void {
        BackHandler.removeEventListener('hardwareBackPress',this.onBackPress);
    }

    /**
     * 处理物理按键事件
     * @returns {boolean}
     */
    onBackPress = ()=>{
        const {nav} = this.props;
        if (nav.routes[1].index===0){
            return false;
        }
        this.props.navigation.dispatch(NavigationActions.back());
        return true;
    }

    constructor(props){
        super(props);
        this.props = {
            theme:'#0000ff',
        };
    }

    static navigationOptions = {
        title: 'Home',
        headerBackTitle:'返回',
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to HomePage!{this.props.theme}</Text>
                <Button title={'跳转到page1'} onPress={()=>{
                    navigation.navigate('Page1');
                }}/>
                <Button title={'跳转到page2'} onPress={()=>{
                    navigation.navigate('Page2',{name:'动态跳转到page2'});
                }}/>
                <Button title={'跳转到page3'} onPress={()=>{
                    navigation.navigate('Page3',{title:'动态跳转到page3'});
                }}/>
                <Button title={'跳转到TopNavigator'} onPress={()=>{
                    navigation.navigate('Top');
                }}/>
                <Button title={'跳转到BottomNavigator'} onPress={()=>{
                    navigation.navigate('Bottom');
                }}/>
                <Button title={'跳转到DrawNavigator'} onPress={()=>{
                    navigation.navigate('Draw');
                }}/>
                <Button title={'跳转到FlatlistDemo'} onPress={()=>{
                    navigation.navigate('FlatlistDemo');
                }}/>
                <Button title={'跳转到SwipeableFlatlistDemo'} onPress={()=>{
                    navigation.navigate('SwipeableFlatlistDemo');
                }}/>
                <Button title={'跳转到SectionListDemo'} onPress={()=>{
                    navigation.navigate('SectionListDemo');
                }}/>
                <Button title={'改变text的theme内容'} onPress={()=>{
                    this.props.onThemeChange('#096');
                }}/>
                <Button title={'跳转到FetchDemo'} onPress={()=>{
                    navigation.navigate('FetchDemo');
                }}/>
            </View>
        );
    }
}

const mapStateToProps = state =>({
        theme:state.theme.theme,
        nav:state.nav,
})

const mapDispatchToProps = dispatch =>({
    onThemeChange:theme=>dispatch(actions.changeTheme(theme))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);

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
