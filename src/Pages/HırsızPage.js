import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ListView,
    ActivityIndicator,
    TextInput, Alert
} from 'react-native';
import {Actions} from "react-native-router-flux";
import Welcome from '../Components/Welcome';


export default class HırsızPage extends Component<Props> {

    constructor(props) {
        super(props);


    }



    render() {

        return (
            <View style={styles.container} >

                <View>
                    <Image

                        source={require('../Images/hırsız.png')}
                    />
                    <Text style={styles.forText}>     Thief in your home</Text>
                    <Text style={styles.forText}>You should check your house</Text>
                </View>
                <View style={{alignItems:'center',paddingBottom:20 }}>
                    <TouchableOpacity  onPress={() => Actions.User()}>
                        <Image  source={require('../Images/back.png')} />
                    </TouchableOpacity >

                </View>

            </View>






        );
    }
}
const styles=StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1ce44',
        paddingBottom: 100
    },
    forText:{

        justifyContent:'center',
        alignItems:'center',
        fontSize: 30,
        fontFamily:'VINCHAND'
    }
})