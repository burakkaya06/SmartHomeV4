import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Create from '../Components/Create';
import Users from '../Components/Users';
import Edit from '../Components/Edit';
import Delete from '../Components/Delete';
import Adminpanelicon from '../Components/Adminpanelicon'
import {Actions} from "react-native-router-flux";
export default class Admin extends Component<Props> {
    render() {
        return (

                <View style={styles.container1}>
                    <View style={styles.adminpanel}>
                        <Adminpanelicon/>
                        <Text style={styles.adminpanelText}>Admin Panel</Text>


                    </View>
                    <View style={styles.listcreate} >
                        <Create />
                        <Users/>
                    </View>
                    <View style={styles.createlistbutton} >
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Actions.CreatePage()}
                        >
                            <Text style={styles.buttonText}>CREATE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => Actions.ListPage()}
                        >
                            <Text style={styles.buttonText}>LIST</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.editdelete}>
                        <Edit />
                        <Delete />
                    </View>
                    <View style={styles.editdeletebutton}>
                        <TouchableOpacity
                            onPress={() => Actions.EditPage()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>EDIT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => Actions.DeletePage()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>DELETE</Text>
                        </TouchableOpacity>

                    </View>



                    <View style={styles.emptyc}>

                        <TouchableOpacity
                            onPress={() => Actions.Login()}
                            style={styles.button}>
                            <Text style={styles.buttonText}>EXIT</Text>
                        </TouchableOpacity>

                    </View>



                    </View>

        );
    }
}

const styles=StyleSheet.create({
    container1:{
        flex:1,
        backgroundColor:'#f1ce44'
    },
    adminpanel:{
        flex:2,
        backgroundColor:'#f1ce44',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    listcreate :{
        flexDirection:'row',
        flex:3,
        backgroundColor: '#f1ce44',
        alignItems:'center',
        justifyContent: 'center'
    },
    editdelete:{
        flexDirection:'row',
        flex:3,
        backgroundColor: '#f1ce44',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft: 65,
        marginRight:55



    },

    emptyc:{
        flex:1,
        backgroundColor: '#f1ce44',
        alignItems:'center',
        justifyContent: 'center',
        paddingRight: 20
    },

    createlistbutton:{
        flex:1,
        backgroundColor: '#f1ce44',
        alignItems:'center',
        justifyContent: 'space-evenly',
        flexDirection:'row',
        marginRight: 30



    },
    editdeletebutton:{
        flexDirection:'row',
        flex:1,
        backgroundColor: '#f1ce44',
        alignItems:'center',
        justifyContent: 'space-evenly',
        marginRight: 25

    },
    button: {
        width: 100,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: '#ef6700',
        marginLeft: 40},
    buttonText: {
        borderColor: '#ef6700',
        backgroundColor: '#ef6700',
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '500',
        paddingLeft: 20


    },
    adminpanelText:{
        fontWeight:'bold',
        fontSize:30,
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft:30,
        fontFamily:'sans-serif'
    }


});
