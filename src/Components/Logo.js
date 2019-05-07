import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class Logo extends Component<Props> {
    render() {
        return (
            <View >
                <Image
                    source={require('../Images/logo.png')}
                />

            </View>
        );
    }
}
