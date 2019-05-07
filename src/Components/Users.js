import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class Users extends Component<Props> {
    render() {
        return (
            <View >
                <Image
                    style={{width: 175, height: 175}}
                    source={require('../Images/users.png')}
                />

            </View>
        );
    }
}
