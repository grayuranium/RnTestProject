import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

type Props = {};
export default class Page1 extends Component<Props> {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to page1!</Text>
                <Button title={'返回'} onPress={()=>{
                    navigation.goBack();
                }}/>
                <Button title={'跳转回主页'} onPress={()=>{
                    navigation.navigate('HomePage');
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
