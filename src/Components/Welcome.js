import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class Welcome extends Component<Props> {
    render() {
        return (
            <View >
                <Image
                    style={{width: 400, height: 200}}
                    source={require('../Images/welcome.png')}
                />

            </View>
        );
    }
}
