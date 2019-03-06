import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

type Props = {};
export default class HomePage extends Component<Props> {
    static navigationOptions = {
        title: 'Home',
        headerBackTitle:'返回',
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to HomePage!</Text>
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
