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
} from 'react-native';


import { Location, Permissions, MapView } from 'expo';

import { StackNavigator } from 'react-navigation';

const url = process.env.BACKEND_URI; // Backend link

export class userHome extends React.Component {

    static navigationOptions = {
        title: 'userHome'
    };
    render(){
        return (
            <Text>Home</Text>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',

    },
    textField: {
      alignSelf: 'stretch',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 5,
      backgroundColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white',
    },
    button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 10,
      marginLeft: 5,
      marginRight: 5,
      borderRadius: 5,
      backgroundColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'white'
  },
    redText: {
      color: 'red'
    },

});
