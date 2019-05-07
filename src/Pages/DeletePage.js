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



export default class DeletePage extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {userName: ""};
    }
goDelete(){

    var name = this.state.userName;
    if (name == "") {
        Alert.alert("You can't leave it blank");
    }

    else{
        fetch('http://api.goldgym.pro/api/CRUDDELETE',{

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                kullaniciAdi:name,


            })
        }).then((response)=>response.json())
            .then((responseJson)=>{

                if(JSON.stringify(responseJson)==1){
                    Alert.alert("User deleted")
                    setTimeout(Actions.Admin,3000);

                }
                if (JSON.stringify(responseJson)==3){
                    Alert.alert("This user cannot be deleted")
                    setTimeout(Actions.Admin,1000);
                }

                if(JSON.stringify(responseJson)==2){
                    Alert.alert("User doesn't exist")
                    setTimeout(Actions.DeletePage,1000);
                }

            }).catch((error)=>{
            console.error(error);
        });
        debugger;


    }
}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textput1}>
                    <TextInput

                        value={this.state.userName}
                        placeholder="Username to delete"
                        onChangeText={(value) => this.setState({userName: value})}
                    />
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>this.goDelete()}
                    >
                        <Text style={styles.buttonText}>DELETE</Text>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1ce44'
    },
    rowViewContainer:{
        textAlign: 'center',
        fontSize:20,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10
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
})