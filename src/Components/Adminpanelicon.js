import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class Adminpanelicon extends Component<Props> {
    render() {
        return (
            <View >
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../Images/adminpanel.png')}
                />

            </View>
        );
    }
}
