import React from 'react';

// Importing other screens
import Register from './Register';
import Room from './Room';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ListView,
    Alert,
    Button,
    AsyncStorage,
    ScrollView,
    Image
} from 'react-native';


import { Location, Permissions, MapView } from 'expo';

import { StackNavigator } from 'react-navigation';

const url = process.env.BACKEND_URI; // Backend link

export default class ViewRoom extends React.Component {

    join(){
        console.log('joined room');
    }

    static navigationOptions = {
        title: 'ViewRoom'
    };
    render(){
        return (
            <View style={{flex: 1}}>
                <Image source={require('../images/maxresdefault.jpg')}>
                <View style={style.roomContainer}>
                    <View style={style.largeBox}>
                        <Text style={style.host}>Samuel</Text>
                        <View style={style.center}>
                            <View style={style.descriptionBox}>
                                <ScrollView>
                                    <Text style={[style.descriptionColor, style.host]}>
                                        Hello, my name is Samuel. Today I will be hosting a party at 1818 Floral St.  If you are down to get turnt, feel free to come!
                                        P.S. someone should bring some popcorn, we are planning on watching movies later.
                                    </Text>
                                </ScrollView>
                            </View>

                            <View style={{paddingTop: 20, paddingBottom: 20}}>
                                <Text style={[style.descriptionColor, style.host, style.song1Box]}>
                                    You should be able to see all this.
                                </Text>
                            </View>

                            <View style={{paddingTop: 20}}>
                                <Text style={[style.descriptionColor, style.host, style.song1Box]}>
                                    You should be able to see all this.
                                </Text>
                            </View>

                            <View style={{paddingTop: 20}}>
                                <Text style={[style.descriptionColor, style.host, style.song1Box]}>
                                    You should be able to see all this.
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={ () => {this.join()}} style={style.button}>
                        <Text style={style.redText}>Join Room</Text>
                    </TouchableOpacity>
                </View>
            </Image>
        </View>
    );
}
}

const style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    roomContainer: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, .5)',
        width: 410
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    host: {
        fontStyle: 'italic',
        fontSize: 20,
        color: 'red',
    },
    largeBox: {
        borderRadius: 4,
        borderWidth: 2,
        right: 0,
        borderColor: 'pink',
        flexDirection: 'column',
        width: 410,
    },
    descriptionBox: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'green',
        width: 200,
        height: 170,
        padding: 20,
        overflow: 'scroll',
        backgroundColor: 'rgba(52, 52, 52, .5)',
    },
    song1Box: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'yellow',
        width: 200,
        height: 80,
        paddingTop: 20,
        overflow: 'scroll',
        backgroundColor: 'rgba(52, 52, 52, .5)',

    },

    descriptionColor: {
        color: 'red'
    },
    button: {
        width: 410,
        alignItems: 'center',
        paddingBottom: 10,
        marginTop: 10,
        marginRight: 5,
        borderRadius: 5,
        backgroundColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white'
    },
    redText: {
        color: 'red',
        fontSize: 20
    },


});
