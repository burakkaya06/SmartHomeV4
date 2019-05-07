import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';



export default class Main extends Component<Props> {
    render() {
        return (
            <View style={styles.mainDesign}>
                <Text >Main Pageden Merhaba</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    mainDesign:{
        flex: 1,
        backgroundColor:'#f1ce44',
        alignItems: 'center',
        justifyContent:'center'
    }
})
// onPress={()=>this.goLogin()}>