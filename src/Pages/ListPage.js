import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, ListView, Image} from "react-native";
import {ListItem } from 'react-native-elements';





export default class ListPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            dataSource:[]
        };

    }
    renderItem = ({item}) =>{
        return(


            <View style={{flex: 1,flexDirection:'row',marginBottom:3}}>
                <Image style={{width:80,height:80, margin:5}}
                    source={require('../Images/kulanici.png')}
                />

                <View style={{flex:1, justifyContent:'center',marginLeft: 5}}>

                    <Text style={{fontSize: 18}}>
                       User : {item.kullaniciAdi}
                    </Text>
                    <Text style={{fontSize: 14}}>
                        Name Lastname: {item.gercekKisiAdiSoyadi}
                    </Text>
                    <Text style={{fontSize: 14}}>
                        Email: {item.email}
                    </Text>
                    <Text style={{fontSize: 14}}>
                        Password: {item.password}
                    </Text>
                    <Text style={{fontSize: 14}}>
                        Home Status: {item.evDurumId}
                    </Text>
                </View>

           </View>


            )
    }
    renderSeparator =()=>{
        return(
            <View style={styles.seperator}>

            </View>
                )
    }
    componentDidMount(){
        const url='http://api.goldgym.pro/api/kullanici'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson)=>{
                this.setState({
                    dataSource:responseJson
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    render() {
        return (

            <View style={styles.mainDesign}>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>index}
                    ItemSeparatorComponent={this.renderSeparator}

                />

            </View>

        );
    }
}

const styles=StyleSheet.create({
    mainDesign:{
        flex: 1,
        backgroundColor:'#f1ce44',
        alignItems: 'flex-start',
        justifyContent:'center',
        paddingTop:40,
        paddingLeft:10
    },
    rowViewContainer:{
        textAlign: 'center',
        fontSize:20,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    seperator:{
        height: 5,
        width: 600,
        backgroundColor:'#ef6700'
    }
})