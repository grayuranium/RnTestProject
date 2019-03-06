import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,RefreshControl} from 'react-native';
import {ActivityIndicator} from "react-native-paper";

const CITY_NAMES = ['北京','上海','成都','西安','重庆','杭州','武汉','南京'];
type Props = {};
export default class FlatlistDemo extends Component<Props> {
    constructor(props){
        super(props);
        console.disableYellowBox = true;
        this.state = {
            isLoading:false,
            dataArray:CITY_NAMES,
        };
    }

    _renderItem(data){
        return <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    }

    _loadData(){
        this.setState({
            isLoading:true,
        })
        setTimeout(()=>{
            let dataArray = [];
            for (let i = this.state.dataArray.length-1;i>=0;i--){
                dataArray.push(this.state.dataArray[i]);
            }
            this.setState({
                dataArray:dataArray,
                isLoading:false,
            });
        },200)
    }

    _genIndicator(){
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                animating={true}
            />
            <Text>加载更多</Text>
        </View>
    }

    _reloadData(){
        //尾部加载会自动刷新哦
        setTimeout(()=>{
            let dataArray = [];
            dataArray = this.state.dataArray.concat(CITY_NAMES);
            this.setState({
                dataArray:dataArray,
            });
        },200)
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(data)=>this._renderItem(data)}
                    // refreshing={this.state.isLoading}
                    // onRefresh={()=>{
                    //     this._loadData();
                    // }}
                    //自定义refreshcontroler
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            refreshing={this.state.isLoading}
                            colors={['red']}
                            tintColor={'orange'}
                            titleColor={'red'}
                            onRefresh={()=>{
                                this._loadData();
                            }}
                        />
                    }
                    ListFooterComponent={this._genIndicator()}
                    onEndReached={()=>{
                        this._reloadData();
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    item:{
        backgroundColor: '#169',
        height:200,
        marginRight:15,
        marginLeft:15,
        marginBottom:15,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    text:{
        color:'white',
        fontSize: 20,
    },
    indicatorContainer:{
        alignItems:'center',
    },
    indicator:{
        color: 'red',
        margin: 10,
    },
});
