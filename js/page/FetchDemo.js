import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';

type Props = {};
export default class FetchDemo extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
            showText:'',
        };
    }

    loadData(){
        let url = `https://api.github.com/search/repositories?q=${this.searchText}`;
        fetch(url)
            .then(response=>{
                if (response.ok){
                    return response.text();
                }
                throw new Error('Network are not 200!');
            })
            .then(responseText=>{
                // if (responseText.reverse()==='OK')
                this.setState({
                    showText:responseText,
                })
            }).catch(e=>{
                this.setState({
                    showText:e.toString(),
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput style={styles.input} onChangeText={text=>{
                        this.searchText = text;
                    }}/>
                    <Button style={styles.search_btn} title={'Search'} onPress={()=>{
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
