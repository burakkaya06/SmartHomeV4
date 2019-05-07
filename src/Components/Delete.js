import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class Delete extends Component<Props> {
    render() {
        return (
            <View >
                <Image
                    style={{width: 120, height: 120}}
                    source={require('../Images/delete.png')}
                />

            </View>
        );
    }
}
