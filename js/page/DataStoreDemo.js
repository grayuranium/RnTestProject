import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,AsyncStorage} from 'react-native';
import DataStore from "../expand/dao/DataStore";

type Props = {};
export default class DataStoreDemo extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            showText:'',
        };
        this.datastore = new DataStore();
    }

    loadData(){
        let url = `https://api.github.com/search/repositories?q=${this.searchText}`;
        this.datastore.fetchData(url)
            .then(data=>{
                let showData = `初次数据加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`
                this.setState({
                    showText:showData,
                })
            })
            .catch(error=>{
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
                    <Button title={'search'} onPress={()=>{
                        this.loadData();
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
