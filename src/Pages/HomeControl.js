import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity,Alert} from 'react-native';
import {Actions} from "react-native-router-flux";




export default class HomeControl extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            evDurumId:this.props.evDurumId,
            elektrik:this.props.elektrik,
            gaz:this.props.gaz,

            elektrikAcık:{uri: 'https://i.hizliresim.com/LlAro0.png'},
            elektrikKapalı:{uri: 'https://i.hizliresim.com/16v5nB.png'},
            elektrikDurumSource:{uri: 'null'},
            suAcık:{uri: 'https://i.hizliresim.com/9aoypZ.png'},
            suKapalı:{uri: 'https://i.hizliresim.com/gr8aL0.png'},
            suDurum:1,
            suDurumSource:{uri: 'https://i.hizliresim.com/9aoypZ.png'},
            dogalgazAcık:{uri: 'https://i.hizliresim.com/P1k9Ed.png'},
            dogalgazKapalı:{uri: 'https://i.hizliresim.com/7agz8L.png'},
            gazDurum:1,
            gazDurumSource:{uri: 'null'}


        }}

        refresh(){
            var dogalgazAcık=this.state.dogalgazAcık;
            var dogalgazKapalı=this.state.dogalgazKapalı;
            var gaz=this.state.gaz;
            var elektrikAcık=this.state.elektrikAcık;
            var elektrikKapalı=this.state.elektrikKapalı;
            var elektrimDurum=this.state.elektrik;
            if(elektrimDurum==true){
                this.setState({
                    elektrikDurumSource:elektrikAcık
                })
            }
            if(elektrimDurum==false){
                this.setState({
                    elektrikDurumSource:elektrikKapalı
                })

            }
            if(gaz==true){
                this.setState({
                    gazDurumSource:dogalgazAcık
                })

            }
            if(gaz==false){
                this.setState({
                    gazDurumSource:dogalgazKapalı
                })

            }



        }

        componentDidMount(){
        debugger;
        var dogalgazAcık=this.state.dogalgazAcık;
        var dogalgazKapalı=this.state.dogalgazKapalı;
        var gaz=this.state.gaz;
        var elektrikAcık=this.state.elektrikAcık;
        var elektrikKapalı=this.state.elektrikKapalı;
        var elektrimDurum=this.state.elektrik;
        if(elektrimDurum==true){
            this.setState({
                elektrikDurumSource:elektrikAcık
            })
        }
        if(elektrimDurum==false){
            this.setState({
                elektrikDurumSource:elektrikKapalı
            })

        }
        if(gaz==true){
            this.setState({
                gazDurumSource:dogalgazAcık
            })

        }
        if(gaz==false){
            this.setState({
                gazDurumSource:dogalgazKapalı
            })

            }

        setInterval(this.refresh.bind(this),5000);
        }
        goChangeGas() {
            var id=this.state.evDurumId;
            var gasAcık = this.state.dogalgazAcık;
            var gasKapalı = this.state.dogalgazKapalı;

            if(this.state.gaz==true){
                this.setState({
                    gaz:false,
                    gazDurumSource:gasKapalı
                })
                fetch('http://api.goldgym.pro/api/openCloseGas',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        Id:id,
                        dogalGazVanaDurumu:false
                    })
                }).catch((error)=>{
                    console.error(error);
                });
            }
            if(this.state.gaz==false)
            {
                this.setState({

                    gazDurumSource:gasAcık,
                    gaz:true

                })
                debugger;
                fetch('http://api.goldgym.pro/api/openCloseGas',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        Id:id,
                        dogalGazVanaDurumu:true
                    })
                }).catch((error)=>{
                    console.error(error);
                });


            }
        }
        goChangeWater() {
        var suAcık = this.state.suAcık;
        var suKapalı = this.state.suKapalı;
        debugger;
        if(this.state.suDurum==1){
            this.setState({
                suDurum:0,
                suDurumSource:suKapalı

            })
        }
        if(this.state.suDurum==0)
        {
            this.setState({
                suDurum:1,
                suDurumSource:suAcık

            })
        }
    }
        goChangeElectricity(){
            var id=this.state.evDurumId;
            var elektrikAcık=this.state.elektrikAcık;
            var elektrikKapalı=this.state.elektrikKapalı;
            if(this.state.elektrik==true){
                this.setState({
                    elektrik:false,
                    elektrikDurumSource:elektrikKapalı
                })
                fetch('http://api.goldgym.pro/api/openClose',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        Id:id,
                        elektrikAktifMi:false
                    })
                }).catch((error)=>{
                    console.error(error);
                });

            }
            if(this.state.elektrik==false)
            {
                this.setState({

                    elektrikDurumSource:elektrikAcık,
                    elektrik:true

                })
                debugger;
                fetch('http://api.goldgym.pro/api/openClose',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        Id:id,
                        elektrikAktifMi:true
                    })
                }).catch((error)=>{
                    console.error(error);
                });


            }

        }

    render() {
        return (
            <View style={styles.main} >

                <View style={styles.elektrik} >
                    <TouchableOpacity onPress={()=>this.goChangeElectricity()} >
                        <Image
                            style={{width: 100, height: 100}}
                            source={this.state.elektrikDurumSource}
                        />
                    </TouchableOpacity >
                </View>
                <View style={styles.su}>
                    <TouchableOpacity onPress={()=>{
                        this.goChangeGas()}} >
                        <Image
                            style={{width: 100, height: 100}}
                            source={this.state.gazDurumSource}
                        />
                    </TouchableOpacity >
                </View>
                <View style={styles.gaz}>
                    <TouchableOpacity onPress={()=>{
                        Alert.alert("Development Stage")
                        this.goChangeWater()}} >
                        <Image
                            style={{width: 100, height: 100}}
                            source={this.state.suDurumSource}
                        />
                    </TouchableOpacity >

                </View>

            </View>

        );
    }
}

const styles=StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor:'#f1ce44',
        alignItems: 'center',
        justifyContent:'center'
    },
    elektrik:{
        flex: 1,
        backgroundColor:'#f1ce44',
        alignItems: 'center',
        justifyContent:'center'
    },
    su:{
        flex: 1,
        backgroundColor:'#f1ce44',
        alignItems: 'center',
        justifyContent:'center'
    },
    gaz:{
        flex: 1,
        backgroundColor:'#f1ce44',
        alignItems: 'center',
        justifyContent:'center'
    }

})
// onPress={()=>this.goLogin()}>