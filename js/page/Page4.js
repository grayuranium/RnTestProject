import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

type Props = {};
export default class Page4 extends Component<Props> {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>welcome to page4!</Text>
                <Button title={'打开侧边栏'} onPress={()=>navigation.openDrawer()}/>
                <Button title={'关闭侧边栏'} onPress={()=>navigation.closeDrawer()}/>
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
