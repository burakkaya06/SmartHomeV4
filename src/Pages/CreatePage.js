

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput,Alert} from 'react-native';
import {Actions} from "react-native-router-flux";



export default class CreatePage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {userName: "", password: "",email:"",NL:"",homeStatus:""};

    }


   /* InsertDataToServer=() =>{
        const {userName}=this.state;
        const {password}=this.state;
        const {SSH}=this.state;

    }*/
    goCreate(){
        var name = this.state.userName;
        var pass = this.state.password;
        var email  = this.state.email;
        var namelast=this.state.NL;
        var homeStat=this.state.homeStatus;
        if (name == "" || pass == "" || email=="" || namelast=="" || homeStat=="" ) {
            Alert.alert("You can't leave it blank");
        }
        else{
                fetch('http://api.goldgym.pro/api/CRUD',{

                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        kullaniciAdi:name,
                        password:pass,
                        gercekKisiAdiSoyadi:namelast,
                        email:email,
                        evDurumId:homeStat

                    })
                }).then((response)=>response.json())
                  .then((responseJson)=>{

                      if(JSON.stringify(responseJson)=="true"){
                          Alert.alert("Registration Successful")
                          setTimeout(Actions.Admin,3000);

                      }

                      else{
                          Alert.alert("User does exist")
                          setTimeout(Actions.CreatePage,1000);
                      }

                  }).catch((error)=>{
                      console.error(error);
                });


        }
    }



    render() {
        return (
            <View style={styles.container} >

                <View style={styles.textput1}>
                    <TextInput

                        value={this.state.userName}
                        placeholder="New User Name"
                        onChangeText={(value) => this.setState({userName: value})}
                        />
                </View>
                <View style={styles.textput1}>
                    <TextInput

                        value={this.state.NL}
                        placeholder="Name and Lastname"
                        onChangeText={(value) => this.setState({NL: value})}
                    />
                </View>
                <View style={styles.textput2}>
                    <TextInput
                        value={this.state.password}
                        placeholder="New User Password"
                        onChangeText={(value) => this.setState({password: value})}
                    />
                </View>
                <View style={styles.textput3}>
                    <TextInput

                        value={this.state.email}
                        placeholder="New User Email"
                        onChangeText={(value) => this.setState({email: value})}
                    />
                </View>
                <View style={styles.textput4}>
                    <TextInput

                        value={this.state.homeStatus}
                        placeholder="Home Status Id"
                        onChangeText={(value) => this.setState({homeStatus: value})}
                    />
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.goCreate()}
                        >
                        <Text style={styles.buttonText}>CREATE</Text>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1ce44'
    },
    textput1:{
        width: 300,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#ef6700',
        marginBottom: 10

    },
    textput4:{
        width: 300,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#ef6700',
        marginBottom: 10,
        marginTop: 10
    },
    textput2:{
        width: 300,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#ef6700',
        marginBottom: 10


    },
    textput3:{
        width: 300,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#ef6700',

    },
    button:{

        width: 100,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#ef6700',
        marginTop: 40,
        justifyContent: 'center'
    },
    buttonText:{

        borderColor: '#ef6700',
        backgroundColor: '#ef6700',
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '500',
        paddingLeft: 15

    }
});
