import React, {Component} from 'react';
import {Image, View} from 'react-native';



export default class YbuLogo extends Component<Props> {
    render() {
        return (
            <View >
                <Image
                    style={{width: 90, height: 90}}
                    source={require('../Images/ybuLogo.png')} />

            </View>
        );
    }
}