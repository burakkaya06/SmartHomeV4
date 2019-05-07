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



export default class EditPage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            email:"",
            NL:"",
            homeStatus:"",
            username1:"",
            dataSource:[],
            kullaniciId:""

        }}

   goModify(){

       var name = this.state.username1;
       var pass = this.state.password;
       var email1  = this.state.email;
       var namelast=this.state.NL;
       var homeStat=this.state.homeStatus;
       var kullId=this.state.kullaniciId;
       var kontrolname=this.state.userName;

      if(kontrolname==""){
          Alert.alert("Please Firstly Click Find User")
      }
      else{
          fetch('http://api.goldgym.pro/api/CRUDEDIT',{

              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type':'application/json'
              },
              body: JSON.stringify({
                  kullaniciId:kullId,
                  kullaniciAdi:name,
                  gercekKisiAdiSoyadi:namelast,
                  email:email1,
                  password:pass,
                  evDurumId:homeStat

              })
          }).then((response)=>response.json())
              .then((responseJson)=>{

                  if(JSON.stringify(responseJson)=="true"){
                      Alert.alert("Update Succesfull")
                      setTimeout(Actions.Admin,3000);

                  }

                  else{
                      Alert.alert("Update Failed")
                      setTimeout(Actions.Admin,1000);
                  }

              }).catch((error)=>{
              console.error(error);
          });

      }
   }




    goFind(){
        var name = this.state.userName;
        if (name == ""  ) {
            Alert.alert("You can't leave it blank");
        }
        else{
            fetch('http://api.goldgym.pro/api/OnlyForPut',{

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    kullaniciAdi:name
                })
            }).then((response)=>response.json())
                .then((responseJson)=>{
                    if(responseJson!=null){

                        this.setState({
                            username1:responseJson.kullaniciAdi,
                            NL:responseJson.gercekKisiAdiSoyadi,
                            email:responseJson.email,
                            password:responseJson.password,
                            homeStatus:responseJson.evDurumId.toString(),
                            kullaniciId:responseJson.kullaniciId
                        })


                    }
                    if(responseJson==null){
                        Alert.alert("Doesn't exist user");
                        Actions.Admin();
                    }



                }).catch((error)=>{
                console.error(error);
            });


        }

    }

    render() {
        return(
            <View style={styles.container} >

                <View style={styles.textput1}>
                    <TextInput

                        value={this.state.userName}
                        placeholder="User Name"
                        onChangeText={(value) => this.setState({userName: value})}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.goFind()}
                    >
                        <Text style={styles.buttonText}>FIND USER</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textput1}>
                    <TextInput

                        value={this.state.username1}
                        placeholder="User Name"
                        onChangeText={(value) => this.setState({username1: value})}
                    />
                </View>
                <View style={styles.textput1}>
                    <TextInput

                        value={this.state.NL}
                        placeholder="Name Lastname"
                        onChangeText={(value) => this.setState({NL: value})}
                    />
                </View>
                <View style={styles.textput1}>
                    <TextInput

                        value={this.state.password}
                        placeholder="Password"
                        onChangeText={(value) => this.setState({password: value})}
                    />
                </View>
                <View style={styles.textput1}>
                    <TextInput

                        value={this.state.email}
                        placeholder="Email"
                        onChangeText={(value) => this.setState({email: value})}
                    />
                </View>
                <View style={styles.textput1}>
                    <TextInput

                        value={this.state.homeStatus}
                        placeholder="Home Status"
                        onChangeText={(value) => this.setState({homeStatus: value})}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={()=>this.goModify()}
                    >
                        <Text style={styles.buttonText1}>MODIFY USER</Text>
                    </TouchableOpacity>
                </View>


            </View>


        )

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
    button:{

        width: 100,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#ef6700',
        marginTop: 5,
        justifyContent: 'center',
        marginBottom: 5
    },
    button1:{

        width: 150,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#ef6700',
        marginTop: 5,
        justifyContent: 'center',
        marginBottom: 5
    },
    buttonText:{

        borderColor: '#ef6700',
        backgroundColor: '#ef6700',
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '500',
        paddingLeft: 10

    },
    buttonText1:{

        borderColor: '#ef6700',
        backgroundColor: '#ef6700',
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '500',
        paddingLeft: 23

    }
});

