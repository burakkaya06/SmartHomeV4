import React, {Component} from 'react';
import {TouchableOpacity, TextInput, Text, View, Image, StyleSheet,Button,Alert} from 'react-native';
import {Actions} from 'react-native-router-flux'
import serializeKey from '../common/serializeKey';











export default class Form extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {userName: "",
            password: "",
            kullaniciAdi:"",
            gercekKisiAdiSoyadi:"",
            evDurumId:""};

    }


    goLogin() {

        var kullaniciAdi = this.state.userName;
        var password = this.state.password;
        if (kullaniciAdi == "" || password == "") {
            Alert.alert("you can't leave it blank");
        }
        else {
            var kullaniciAdi = this.state.userName;
            var password = this.state.password;
            var SSH  = this.state.SSH;
            if (kullaniciAdi == "" || password == "" || SSH=="") {
                Alert.alert("You can't leave it blank");
            }

            else{

                //fetch('http://192.168.2.29/smarthome/insert.php',{
                    //fetch('http://192.168.3.36//bu/api/kullanici',{
                fetch('http://api.goldgym.pro/api/kullanici',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        kullaniciAdi:kullaniciAdi,
                            password:password,
                    })
                }).then((response)=>response.json())
                    .then((responseJson)=>{

                        //Alert.alert(responseJson.kullaniciAdi);

                        if(responseJson.kullaniciAdi=="admin"){

                            Actions.Admin();
                        }

                        if(responseJson.kullaniciAdi=="nokullanici"){
                            Alert.alert("The User doesn't exist")
                        }
                        if(responseJson.kullaniciAdi=="tanımsiz"){
                            Alert.alert("Invalid Password")

                        }
                        if(responseJson.kullaniciAdi!="admin" && responseJson.kullaniciAdi!="nokullanici" && responseJson.kullaniciAdi!="tanımsiz" && responseJson!=null){

                            this.state.gercekKisiAdiSoyadi=responseJson.gercekKisiAdiSoyadi;
                            this.state.kullaniciAdi=responseJson.kullaniciAdi;
                            this.state.evDurumId=responseJson.evDurumId;


                           Actions.push("User",{gercekKisiAdiSoyadi: this.state.gercekKisiAdiSoyadi,kullaniciAdi:this.state.kullaniciAdi,evDurumId:this.state.evDurumId})

                        }



                    }).catch((error)=>{
                    console.error(error);
                });


            }


        }
    }

    render() {
        return (
            <View>
                <View style={styles.inputBox1}>
                    <TextInput
                        value={this.state.userName}
                        placeholder="ID"
                        onChangeText={(value) => this.setState({userName: value})}
                    />
                </View>
                <View style={styles.inputBox2}>
                    <TextInput

                        secureTextEntry={true}
                        value={this.state.password}
                        placeholder="Password"
                        onChangeText={(value) => this.setState({password: value})}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.goLogin()}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>


                </View>


            </View>
        );

    }}
    const styles = StyleSheet.create({
        inputBox1: {
            width: 300,
            borderRadius: 10,
            borderWidth: 5,
            borderColor: '#ef6700',

        },
        button: {
            width: 100,
            borderRadius: 40,
            borderWidth: 5,
            borderColor: '#ef6700',
            marginTop: 40,
            marginLeft: 100


        },
        buttonText: {
            borderColor: '#ef6700',
            backgroundColor: '#ef6700',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: '500',
            paddingLeft: 20


        },
        inputBox2: {
            width: 300,
            borderRadius: 10,
            borderColor: '#ef6700',
            borderWidth: 5,
            marginTop: 10

        }
    })
//onPress={() => Actions.Admin()}>
// <TouchableOpacity
//style={styles.button}
////onPress={() => this.goLogin()}>
//onPress={() => Actions.Admin()}>
//<Text style={styles.buttonText}>LOGIN</Text>
//</TouchableOpacity>
////onPress={() => this.goLogin()}>
