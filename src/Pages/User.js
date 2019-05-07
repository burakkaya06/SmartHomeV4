import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    ActivityIndicator,
    TextInput, Alert
} from 'react-native';
import {Actions} from "react-native-router-flux";
import Welcome from '../Components/Welcome';


export default class User extends Component<Props> {

    constructor(props) {
        super(props);
        //this.hareketKontrol=this.hareketKontrol.bind(this); //hata alırsan buradaki yorum satırını aç




        this.state = {userName: "",
            NL:props.gercekKisiAdiSoyadi,
            kullaniciAdi:props.kullaniciAdi,
            evDurumId:props.evDurumId,
            evSıcaklık:"",
            evNem:"",
            elektrik:"",
            su:"",
            gaz:"",
            source1:{uri: 'https://i.hizliresim.com/al3bqg.png'},
            source2:{uri: 'https://i.hizliresim.com/nQM3PB.png'},
            source3:{uri: 'https://i.hizliresim.com/oX3RnQ.png'},
            source4:{uri: 'https://i.hizliresim.com/gr8JjZ.png'},
            source5:{uri: 'https://i.hizliresim.com/5a71pD.png'},
            source6:{uri: 'https://i.hizliresim.com/RrklEZ.png'},
            source7:{uri: 'https://i.hizliresim.com/8aZ7mA.png'},
            source8:{uri: 'https://i.hizliresim.com/qdMZ2B.png'},
            source9:{uri: 'https://i.hizliresim.com/dv3Aq7.png'},
            source10:{uri: 'https://i.hizliresim.com/4jrvRp.png'},
            nemSource:{uri: 'https://i.hizliresim.com/QLBdZG.png'},
            source11:{uri: 'https://i.hizliresim.com/k9By2D.png'},
            source12:{uri: 'https://i.hizliresim.com/NnARyX.png'},
            source13:{uri: 'https://i.hizliresim.com/al3b4Q.png'},
            source14:{uri: 'https://i.hizliresim.com/YQk71Z.png'},
            source15:{uri: 'https://i.hizliresim.com/8aZ7G7.png'},
            source16:{uri: 'https://i.hizliresim.com/DY20Lv.png'},
            source17:{uri: 'https://i.hizliresim.com/mM6WV0.png'},
            source18:{uri: 'https://i.hizliresim.com/Em847Z.png'},
            source19:{uri: 'https://i.hizliresim.com/oX3RLb.png'},
            source20:{uri: 'https://i.hizliresim.com/V9a1ZZ.png'},
            sıcaklıkSource:{uri: 'https://i.hizliresim.com/QLBdZG.png'},
            homeControlSource:{uri: 'https://i.hizliresim.com/AD3qqr.png'},
            homeControlOpen:{uri: 'https://i.hizliresim.com/AD3qqr.png'},
            homeControlClose: {uri: 'https://i.hizliresim.com/0Rykko.png'}

            }

    }



    hareketKontrol(){
        debugger;
        var id=2;
        fetch('http://api.goldgym.pro/api/HareketKontrol',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Id:id
            })
        }).then((response)=>response.json())
            .then((responseJson12)=>{
                if(responseJson12==1){
                    //Alert.alert(" Thief in your home. " +
                    //"You should check your house")
                    Alert.alert(
                        'Motion Alarm',
                        'You should check your home',
                        [
                            {text: 'Turn off Alarm', onPress: () => this.hareketSensoruKapat()},
                            {text: 'Cancel'}
                        ],
                        { cancelable: false }
                    )

                }

            }).catch((error)=>{
            console.error(error);
        });



    }
    hareketSensoruKapat(){

        fetch('http://api.goldgym.pro/api/HareketSensKapat',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                hareketVarMi:false
            })
        }).then((response)=>response.json())
            .then((responseJson12)=>{

                Alert.alert(
                    'Motion Alarm',
                    'Alarm turned off',
                    [
                        {text: 'OK'}
                    ],
                    { cancelable: false }
                )


            }).catch((error)=>{
            console.error(error);
        });

    }
    kapıKontrol(){

        var id=2;
        fetch('http://api.goldgym.pro/api/KapiHareket',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Id:id
            })
        }).then((response)=>response.json())
            .then((responseJson12)=>{
                if(responseJson12==1){
                    //Alert.alert(" Thief in your home. " +
                    //"You should check your house")
                    Alert.alert(
                        'Door Alarm',
                        'You should check your home',
                        [
                            {text: 'Turn off Alarm', onPress: () => this.kapiHareketSensoruKapat()},
                            {text: 'Cancel'}
                        ],
                        { cancelable: false }
                    )

                }

            }).catch((error)=>{
            console.error(error);
        });
    }
    kapiHareketSensoruKapat(){
        fetch('http://api.goldgym.pro/api/KapiHareketSensKapat',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                dumanVarMi:false
            })
        }).then((response)=>response.json())
            .then((responseJson12)=>{

                Alert.alert(
                    'Door Alarm',
                    'Alarm turned off',
                    [
                        {text: 'OK'}
                    ],
                    { cancelable: false }
                )


            }).catch((error)=>{
            console.error(error);
        });

    }


    gazKontrol(){
        debugger;
        var id=2;
        fetch('http://api.goldgym.pro/api/GazKontrolUygulama',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Id:id
            })
        }).then((response)=>response.json())
            .then((responseJson12)=>{

                if(responseJson12==1){
                        //Alert.alert(" Thief in your home. " +
                        //"You should check your house")
                        Alert.alert(
                            'Warning !!!',
                            'You should check your house, Gaz Detected',
                            [
                                {text: 'Turn off the valve of Gas', onPress: () => this.gazKontrolKapat()},


                            ],
                            { cancelable: false }
                    )
                }


            }).catch((error)=>{
            console.error(error);
        });




    }
    gazKontrolKapat(){
        fetch('http://api.goldgym.pro/api/GazKontrolSensorKapat',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                suVanaDurumu:false
            })
        }).then((response)=>response.json())
            .then((responseJson12)=>{

                Alert.alert(
                    'GAS Alarm',
                    'Alarm turned off',
                    [
                        {text: 'OK'}
                    ],
                    { cancelable: false }
                )




            }).catch((error)=>{
            console.error(error);
        });


    }

    componentDidMount(){

        var id=this.state.evDurumId;
        var source1=this.state.source1;
        var source2=this.state.source2;
        var source3=this.state.source3;
        var source4=this.state.source4;
        var source5=this.state.source5;
        var source6=this.state.source6;
        var source7=this.state.source7;
        var source8=this.state.source8;
        var source9=this.state.source9;
        var source10=this.state.source10;

        var source11=this.state.source11;
        var source12=this.state.source12;
        var source13=this.state.source13;
        var source14=this.state.source14;
        var source15=this.state.source15;
        var source16=this.state.source16;
        var source17=this.state.source17;
        var source18=this.state.source18;
        var source19=this.state.source19;
        var source20=this.state.source20;

        var homeControlOpen=this.state.homeControlOpen;
        var homeControlClose=this.state.homeControlClose;

        if(id!=2){
            this.setState({
                homeControlSource:homeControlClose
            })
        }
        if(id==2){
            this.setState({
                homeControlSource:homeControlOpen
            })
        }


        //fetch('http://192.168.2.29/smarthome/insert.php',{
        fetch('http://api.goldgym.pro/api/home',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Id:id
            })
        }).then((response)=>response.json())
            .then((responseJson1)=>{
               if(responseJson1!=null){


                   debugger;

                   this.setState({
                       evSıcaklık:responseJson1.anlikSıcaklik,
                       evNem:responseJson1.anlikNem,
                       elektrik:responseJson1.elektrikAktifMi,
                       su:responseJson1.suVanaDurumu,
                       gaz:responseJson1.dogalGazVanaDurumu

                   })
                   if(responseJson1.anlikNem>=0 && responseJson1.anlikNem<=10 ){
                       this.setState({
                           nemSource:source1
                       })
                   }
                   if(responseJson1.anlikNem>=11 && responseJson1.anlikNem<=20 ){
                       this.setState({
                           nemSource:source2
                       })
                   }
                   if(responseJson1.anlikNem>=21 && responseJson1.anlikNem<=30 ){
                       this.setState({
                           nemSource:source3
                       })
                   }
                   if(responseJson1.anlikNem>=31 && responseJson1.anlikNem<=40 ){
                       this.setState({
                           nemSource:source4
                       })
                   }
                   if(responseJson1.anlikNem>=41 && responseJson1.anlikNem<=50 ){
                       this.setState({
                           nemSource:source5
                       })

                   }
                   if(responseJson1.anlikNem>=51 && responseJson1.anlikNem<=60 ){
                       this.setState({
                           nemSource:source6
                       })

                   }
                   if(responseJson1.anlikNem>=61 && responseJson1.anlikNem<=70 ){
                       this.setState({
                           nemSource:source7
                       })

                   }
                   if(responseJson1.anlikNem>=71 && responseJson1.anlikNem<=80 ){
                       this.setState({
                           nemSource:source8
                       })

                   }
                   if(responseJson1.anlikNem>=81 && responseJson1.anlikNem<=90 ){
                       this.setState({
                           nemSource:source9
                       })

                   }
                   if(responseJson1.anlikNem>=91 && responseJson1.anlikNem<=100 ){
                       this.setState({
                           nemSource:source10
                       })
                   }
                   if(responseJson1.anlikNem>=91 && responseJson1.anlikNem<=100 ){
                       this.setState({
                           nemSource:source10
                       })
                   }





                   if(responseJson1.anlikSıcaklik>=0 && responseJson1.anlikSıcaklik<=10 ){
                       this.setState({
                           sıcaklıkSource:source11
                       })
                   }
                   if(responseJson1.anlikSıcaklik>=11 && responseJson1.anlikSıcaklik<=20 ){
                       this.setState({
                           sıcaklıkSource:source12
                       })
                   }
                   if(responseJson1.anlikSıcaklik>=21 && responseJson1.anlikSıcaklik<=30 ){
                       this.setState({
                           sıcaklıkSource:source13
                       })
                   }
                   if(responseJson1.anlikSıcaklik>=31 && responseJson1.anlikSıcaklik<=40 ){
                       this.setState({
                           sıcaklıkSource:source14
                       })
                   }
                   if(responseJson1.anlikSıcaklik>=41 && responseJson1.anlikSıcaklik<=50 ){
                       this.setState({
                           sıcaklıkSource:source15
                       })
                   }
                   if(responseJson1.anlikSıcaklik>=51 && responseJson1.anlikSıcaklik<=60 ){
                       this.setState({
                           sıcaklıkSource:source16
                       })
                   }
                   if(responseJson1.anlikSıcaklik>=61 && responseJson1.anlikSıcaklik<=70 ){
                       this.setState({
                           sıcaklıkSource:source17
                       })
                   }
                   if(responseJson1.anlikSıcaklik>=71 && responseJson1.anlikSıcaklik<=80 ){
                       this.setState({
                           sıcaklıkSource:source18
                       })
                   }
                   if(responseJson1.anlikSıcaklik>=81 && responseJson1.anlikSıcaklik<=90 ){
                       this.setState({
                           sıcaklıkSource:source19
                       })
                   }
                   if(responseJson1.anlikSıcaklik>=91 && responseJson1.anlikSıcaklik<=100 ){
                       this.setState({
                           sıcaklıkSource:source20
                       })
                   }

                   setInterval(this.hareketKontrol.bind(this),7000);
                   setInterval(this.kapıKontrol.bind(this),11000);
                   setInterval(this.gazKontrol.bind(this),15000);
               }


            }).catch((error)=>{
            console.error(error);
        });







    }
    homeControlicin(){

        var id=this.state.evDurumId;
        debugger;
        if(id!=2){

            Alert.alert("There is no definition of a smart home")
        }
        if(id==2){

            Actions.push("HomeControl",{evDurumId:this.state.evDurumId,
                elektrik:this.state.elektrik,su:this.state.su,gaz:this.state.gaz})

        }


    }





    render() {

        return (
            <View style={styles.container} >

                <View style={{alignItems:'center',}} >
                <Welcome/>
                </View>
                <View style={{alignItems:'center'}} >
                    <Text style={styles.forText}>Your Home {this.state.NL}  </Text>
                </View>
                <View style={{flex:3,alignItems:'flex-start',flexDirection:'row',justifyContent:'space-around',paddingLeft:62,paddingRight: 62}}>

                    <Image
                        source={require('../Images/humidity.png')}/>
                    <Image
                        source={require('../Images/temperature.png')}/>

                </View>

                <View style={styles.container2}>
                    <Image
                        style={{width: 90, height: 180}}
                        source={this.state.nemSource}
                    />
                    <Image />
                    <Image
                        style={{width: 90, height: 180}}
                        source={this.state.sıcaklıkSource}
                    />
                    <Image />
                </View>
                <View style={{flex:3,alignItems:'flex-start',flexDirection:'row',justifyContent:'space-around',paddingLeft:62,paddingRight: 62}}>
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.componentDidMount()}>
                            <Text style={styles.buttonText}>%{this.state.evNem}</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.componentDidMount()}>
                            <Text style={styles.buttonText}>{this.state.evSıcaklık}°C</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{alignItems:'center',paddingBottom:20 }}>
                    <TouchableOpacity  onPress={() =>this.homeControlicin()}>
                        <Image
                            style={{width: 90, height: 90}}
                            source={this.state.homeControlSource}/>
                    </TouchableOpacity >

                </View>





            </View>
        );
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,

       //alignItems: 'center',
        backgroundColor: '#f1ce44'
    },
    container2:{
        flexDirection:'row',
        flex:3,
        backgroundColor: '#f1ce44',
        paddingLeft:80,
        paddingRight:50,
        justifyContent: 'space-around',
        paddingBottom: 120
    },

    button:{

        width: 90,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#ef6700',
        justifyContent: 'center',

    },
    buttonText:{

        borderColor: '#ef6700',
        backgroundColor: '#ef6700',
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '500',
        paddingLeft: 15,
        fontSize:20

    },
    stretch: {
        alignItems: 'flex-start',
        justifyContent:'flex-start'

    },
    forText:{

        justifyContent:'center',
        alignItems:'center',
        fontSize: 30,
        fontFamily:'VINCHAND'
    }
})