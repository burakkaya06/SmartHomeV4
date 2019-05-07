import React, {Component} from 'react';
import {Platform, StyleSheet,StatusBar, Text, View,Image} from 'react-native';



import Logo from "../Components/Logo";
import YbuLogo from "../Components/YbuLogo";
import Form from "../Components/Form";


export default class Login extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#ef6700"
                    barStyle="light-content"
                />

                <View style={styles.Logo}>
                    <Logo/>
                </View>

                <View style={styles.Loginicin}>
                    <Form/>
                </View>

                <View style={styles.YbuLogo}>
                    <YbuLogo/>
                </View>


            </View>

        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f1ce44'
    },
    Logo :{
        marginTop:60,
        flex:2,
        backgroundColor: '#f1ce44',
        alignItems:'center',
        justifyContent: 'center'
    },
    YbuLogo:{
        flex:2,
        backgroundColor: '#f1ce44',
        alignItems:'center',
        justifyContent: 'center'
    },
    Loginicin: {
        flex:4,
        backgroundColor: '#f1ce44',
        alignItems:'center',
        justifyContent: 'center'




    }
});
