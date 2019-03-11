import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,AsyncStorage} from 'react-native';

type Props = {};
const KEY = 'save_key';
export default class AsyncStorageDemo extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            showText:'',
        };
    }

    async doSave(searchText){
        //方法1
        AsyncStorage.setItem(KEY,searchText,error => {
            error&&console.log(error.toString());
        })

        //方法2
        // AsyncStorage.setItem(KEY,searchText)
        //     .catch(error => {
        //         error&&console.log(error.toString());
        //     })

        //方法3
        // try {
        //     await AsyncStorage.setItem(KEY,searchText);
        // }catch (error) {
        //     error&&console.log(error.toString());
        // }
    }

    doGet(){
        //类比doSave也有三种，这里使用第二种
        AsyncStorage.getItem(KEY)
            .then(value => {
                this.setState({
                    showText:value,
                });
                console.log(value);
            })
            .catch(error=>{
                error&&console.log(error.toString());
            })
    }

    doRemove(){
        //类比doSave也有三种，这里使用第二种
        AsyncStorage.removeItem(KEY)
            .catch(error => {
                error&&console.log(error.toString());
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput style={styles.input} onChangeText={text=>{
                        this.searchText = text;
                    }}/>

                </View>
                <View style={styles.input_container}>
                    <Button title={'save'} onPress={()=>{
                        this.doSave(this.searchText);
                    }}/>
                    <Button title={'show'} onPress={()=>{
                        this.doGet();
                    }}/>
                    <Button title={'delete'} onPress={()=>{
                        this.doRemove();
                    }}/>
                </View>
                <Text>{this.state.showText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input:{
        height:30,
        flex:4,
        borderColor:'black',
        borderWidth:1,
        margin:10,
    },
    input_container:{
        flexDirection:'row',
        alignItems: 'flex-start',
    },
    search_btn:{
        flex:1,
    }
});
