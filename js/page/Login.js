import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

type Props = {};
export default class Login extends Component<Props> {
    render() {
        const {navigation} = this.props;
        //这里button居然可以跳转到另一个导航栏的页面，可见导航栏可以嵌套使用
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>请登录!</Text>
                <Button title={'Login'} onPress={()=>navigation.navigate('App')}/>
            </View>
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
