import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class Create extends Component<Props> {
    render() {
        return (
            <View >
                <Image
                    style={{width: 150, height: 150}}
                    source={require('../Images/create.png')}
                />

            </View>
        );
    }
}
