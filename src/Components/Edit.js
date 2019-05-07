import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class Edit extends Component<Props> {
    render() {
        return (
            <View >
                <Image
                    style={{width: 130, height: 130}}
                    source={require('../Images/edit.png')}
                />

            </View>
        );
    }
}
